// App.jsx — Dice Game root: state, prompt builder, wiring.
import { useState, useRef, useEffect, useMemo } from 'react';
import MainScreen from './MainScreen.jsx';
import SettingsModal from './SettingsModal.jsx';
import TweaksPanel from './TweaksPanel.jsx';
import AgeGate from './AgeGate.jsx';
import { useI18n } from './i18n.jsx';
import { useShakeToThrow } from './useShakeToThrow.js';

// ───────── Tweak defaults (editable on disk) ─────────
const TWEAKS = /*EDITMODE-BEGIN*/{
  "accent": "rose",
  "modalStyle": "centered",
  "pickerLayout": "gallery",
  "density": "roomy",
  "bgMood": "wine"
}/*EDITMODE-END*/;

// ───────── Theme palettes ─────────
const ACCENTS = {
  rose:    { hex: '#C97A5C', name: 'Bisque' },
  ember:   { hex: '#D14B3D', name: 'Ember' },
  sage:    { hex: '#7A8F6A', name: 'Sage' },
  iris:    { hex: '#8478B8', name: 'Iris' },
  amber:   { hex: '#D4A24C', name: 'Amber' },
};
const BG_MOODS = {
  wine:    { from: '#1A0B11', to: '#2A1620', label: 'Wine' },
  ink:     { from: '#0E0F1A', to: '#1A1C2E', label: 'Ink' },
  forest:  { from: '#0E1612', to: '#1A2620', label: 'Forest' },
  smoke:   { from: '#161210', to: '#26201E', label: 'Smoke' },
};

// ───────── Dice palettes ─────────
const DIE_PALETTES = {
  bone:    { bg: '#F4ECE0', fg: '#2A1A14', accent: '#A14B3D' },
  blush:   { bg: '#E8C5BD', fg: '#3A1F1A', accent: '#8A3530' },
  sage:    { bg: '#C8D2BC', fg: '#23301E', accent: '#5A6F4C' },
  ink:     { bg: '#2A2530', fg: '#F0E8DC', accent: '#C97A5C' },
  amber:   { bg: '#E8C885', fg: '#3A2810', accent: '#8A5A20' },
  iris:    { bg: '#C8C0E0', fg: '#221A38', accent: '#5A4C8A' },
};

// ───────── Persisted user settings ─────────
// Bump the key suffix when the shape changes in an incompatible way.
// Each locale keeps its own settings so customizations don't leak across
// languages (the dice library itself is localized — see src/locales/).
const SETTINGS_KEY_PREFIX = 'dice-settings-v2';

function buildDefaultSettings(localeDice) {
  return {
    dice: localeDice,
    accent: TWEAKS.accent,
    bgMood: TWEAKS.bgMood,
    muted: false,
  };
}

function loadSettings(key, defaults) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaults;
    return { ...defaults, ...JSON.parse(raw) };
  } catch {
    return defaults;
  }
}

// ───────── Root ─────────
function App() {
  const { t, locale, strings } = useI18n();
  const settingsKey = `${SETTINGS_KEY_PREFIX}-${locale}`;
  const defaultSettings = useMemo(() => buildDefaultSettings(strings.dice), [strings.dice]);

  const [tweaks, setTweaks] = useState(TWEAKS);
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  // Settings sheet
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsTab, setSettingsTab] = useState('dice'); // dice | edit | look
  const [editingDieId, setEditingDieId] = useState(null);

  // Persisted user settings (dice library, accent, background mood, mute).
  // Initializer runs once per component lifetime — locale changes do a full
  // navigation via switchLocale, so we never need to reload keys mid-session.
  const [settings, setSettings] = useState(() => loadSettings(settingsKey, defaultSettings));
  useEffect(() => {
    try { localStorage.setItem(settingsKey, JSON.stringify(settings)); } catch {}
  }, [settings, settingsKey]);
  const patchSettings = (patch) => setSettings(s => ({ ...s, ...patch }));
  const resetSettings = () => setSettings(defaultSettings);
  const { dice, accent, bgMood, muted } = settings;
  const setDice = (v) => patchSettings({ dice: v });
  const setAccent = (v) => patchSettings({ accent: v });
  const setBgMood = (v) => patchSettings({ bgMood: v });
  const toggleMuted = () => patchSettings({ muted: !settings.muted });

  // Result
  const [results, setResults] = useState(() =>
    settings.dice.filter(d => d.active).map(d => ({
      id: d.id,
      value: d.faces[0],
      phrase: d.phrases?.[0] ?? d.faces[0],
    }))
  );
  const [rolling, setRolling] = useState(false);
  const [timer, setTimer] = useState(30);
  const [timerTotal, setTimerTotal] = useState(30);
  const [timerRunning, setTimerRunning] = useState(false);

  const sceneRef = useRef(null);

  // Timer-complete sound. Ref'd so the rAF/interval closure below always
  // reads the current mute value without needing to re-create the interval.
  const audioRef = useRef(null);
  const mutedRef = useRef(muted);
  useEffect(() => { mutedRef.current = muted; }, [muted]);
  useEffect(() => {
    const a = new Audio('/sounds/done.mp3');
    a.preload = 'auto';
    audioRef.current = a;
  }, []);

  // Tweak protocol
  useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === '__activate_edit_mode') setEditMode(true);
      if (e.data?.type === '__deactivate_edit_mode') { setEditMode(false); setTweaksOpen(false); }
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({type: '__edit_mode_available'}, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const updateTweak = (key, val) => {
    setTweaks(t => ({...t, [key]: val}));
    // accent and bgMood are user-facing too — keep the live value in sync.
    if (key === 'accent' || key === 'bgMood') patchSettings({ [key]: val });
    window.parent.postMessage({type:'__edit_mode_set_keys', edits:{[key]: val}}, '*');
  };

  const activeDice = dice.filter(d => d.active);

  // Build dice for 3D scene
  const sceneDice = useMemo(() => activeDice.map(d => ({
    faces: d.faces,
    palette: { ...DIE_PALETTES[d.palette], label: d.label },
  })), [activeDice.map(d => d.id + d.palette + d.faces.join('|')).join('|')]);

  const accentHex = ACCENTS[accent].hex;
  const bg = BG_MOODS[bgMood];

  // Throw — results come from whichever face is pointing up once the physics settles
  const handleThrow = () => {
    if (rolling) return;
    setRolling(true);
    sceneRef.current?.throw();
  };

  // Shake-to-throw (mobile). Disabled while the settings modal is open so
  // configuring doesn't accidentally reroll. The iOS permission prompt needs
  // a user gesture, so we kick it off from the first Throw button press
  // below rather than on mount.
  const { permission: shakePerm, requestPermission: requestShakePerm } =
    useShakeToThrow(handleThrow, !settingsOpen);
  const throwAndMaybeRequestShake = () => {
    if (shakePerm === 'unknown') requestShakePerm();
    handleThrow();
  };
  const handleSettled = (faceIndices) => {
    const newRes = activeDice.map((d, i) => {
      const idx = faceIndices[i];
      return {
        id: d.id,
        value: d.faces[idx] ?? d.faces[0],
        phrase: d.phrases?.[idx] ?? d.faces[idx] ?? d.faces[0],
      };
    });
    setResults(newRes);
    setRolling(false);

    const duration = newRes.find(r => r.id === 'duration');
    if (duration) {
      const match = String(duration.value).match(/\d+/);
      const seconds = match ? parseInt(match[0], 10) : NaN;
      if (Number.isFinite(seconds)) {
        setTimer(seconds);
        setTimerTotal(seconds);
        setTimerRunning(false);
      }
    }
  };

  // Timer
  useEffect(() => {
    if (!timerRunning) return;
    const i = setInterval(() => {
      setTimer(t => {
        if (t <= 1) {
          setTimerRunning(false);
          if (!mutedRef.current && audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => {});
          }
          return timerTotal;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(i);
  }, [timerRunning, timerTotal]);

  // Build prompt sentence from results. Use each result's `phrase` (the
  // sentence-form text) so dice can display shorthand like "30 sec" while the
  // prompt reads "for 30 seconds". Intensity has no phrase override and is
  // lowercased to fit mid-sentence.
  const prompt = useMemo(() => {
    if (!results.length) return t('ui.pickDiceToBegin');
    const map = Object.fromEntries(results.map(r => [r.id, r.phrase]));
    const activity = map.activity_mf || map.activity_mm || map.activity_ff || '';
    const intens = map.intensity ? ` ${map.intensity.toLowerCase()}` : '';
    const loc = map.location ? ` ${map.location}` : '';
    const dur = map.duration ? ` ${map.duration}` : '';
    if (activity) return `${activity}${intens}${loc}${dur}`;
    return results.map(r => r.value).join(' · ');
  }, [results, t]);

  return (
    <main style={{
      width: '100vw', height: '100dvh', position: 'relative', overflow: 'hidden',
      background: `radial-gradient(ellipse at 30% 0%, ${bg.to} 0%, ${bg.from} 60%, #000 100%)`,
      color: '#F4ECE0',
      fontFamily: '"Inter", -apple-system, system-ui, sans-serif',
    }}>
      <AgeGate />

      {/* Grain overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.06, mixBlendMode: 'overlay',
        backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'><filter id=\'n\'><feTurbulence baseFrequency=\'0.9\' numOctaves=\'2\' /></filter><rect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/></svg>")',
      }} />

      <MainScreen
        prompt={prompt}
        accentHex={accentHex}
        rolling={rolling}
        sceneDice={sceneDice}
        sceneRef={sceneRef}
        bgFrom={bg.from}
        results={results}
        dice={dice}
        timer={timer}
        timerTotal={timerTotal}
        timerRunning={timerRunning}
        muted={muted}
        onToggleMute={toggleMuted}
        onTimerToggle={() => setTimerRunning(r => !r)}
        onTimerReset={() => { setTimer(timerTotal); setTimerRunning(false); }}
        onThrow={throwAndMaybeRequestShake}
        onSettled={handleSettled}
        onOpenSettings={() => setSettingsOpen(true)}
        density={tweaks.density}
      />

      {settingsOpen && (
        <SettingsModal
          style={tweaks.modalStyle}
          tab={settingsTab}
          setTab={setSettingsTab}
          dice={dice}
          setDice={setDice}
          accent={accent}
          setAccent={setAccent}
          bgMood={bgMood}
          setBgMood={setBgMood}
          accentHex={accentHex}
          editingDieId={editingDieId}
          setEditingDieId={setEditingDieId}
          pickerLayout={tweaks.pickerLayout}
          density={tweaks.density}
          onReset={resetSettings}
          onClose={() => { setSettingsOpen(false); setEditingDieId(null); }}
        />
      )}

      {editMode && (
        <TweaksPanel
          tweaks={tweaks}
          updateTweak={updateTweak}
          open={tweaksOpen}
          setOpen={setTweaksOpen}
        />
      )}
    </main>
  );
}

export default App;
