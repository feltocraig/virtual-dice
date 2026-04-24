// SettingsModal.jsx — Centered modal with tabs
import { useState, useRef, useEffect } from 'react';
import { shade } from './shade.js';
import { useI18n, AVAILABLE_LOCALES, switchLocale } from './i18n.jsx';

const useState_sm = useState;
const useRef_sm = useRef;
const useEffect_sm = useEffect;

// Accent and mood names are filled in from the locale at render time
// (see LookPanel). The hex/gradient values are locale-invariant.
const ACCENT_HEX = {
  rose:  '#C97A5C',
  ember: '#D14B3D',
  sage:  '#7A8F6A',
  iris:  '#8478B8',
  amber: '#D4A24C',
};
const BG_MOOD_COLORS = {
  wine:   { from: '#1A0B11', to: '#2A1620' },
  ink:    { from: '#0E0F1A', to: '#1A1C2E' },
  forest: { from: '#0E1612', to: '#1A2620' },
  smoke:  { from: '#161210', to: '#26201E' },
};
const DIE_PALETTES_SM = {
  bone:    { bg: '#F4ECE0', fg: '#2A1A14' },
  blush:   { bg: '#E8C5BD', fg: '#3A1F1A' },
  sage:    { bg: '#C8D2BC', fg: '#23301E' },
  ink:     { bg: '#2A2530', fg: '#F0E8DC' },
  amber:   { bg: '#E8C885', fg: '#3A2810' },
  iris:    { bg: '#C8C0E0', fg: '#221A38' },
};

function SettingsModal({
  style, tab, setTab, dice, setDice,
  accent, setAccent, bgMood, setBgMood, accentHex,
  editingDieId, setEditingDieId, pickerLayout, density, onReset, onClose,
}) {
  const { t, locale } = useI18n();
  const editingDie = dice.find(d => d.id === editingDieId);

  // Close on backdrop, escape
  useEffect_sm(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggleDie = (id) => {
    const target = dice.find(d => d.id === id);
    if (!target) return;
    const turningOn = !target.active;
    setDice(dice.map(d => {
      if (d.id === id) return { ...d, active: turningOn };
      // Enabling a grouped die disables any sibling in the same group.
      if (turningOn && target.group && d.group === target.group) {
        return { ...d, active: false };
      }
      return d;
    }));
  };
  const editFace = (id, idx, val) => {
    setDice(dice.map(d => {
      if (d.id !== id) return d;
      const next = { ...d, faces: d.faces.map((f, i) => i === idx ? val : f) };
      // Null the paired phrase so the prompt falls back to the edited face
      // instead of showing the stale original phrase.
      if (d.phrases) next.phrases = d.phrases.map((p, i) => i === idx ? null : p);
      return next;
    }));
  };
  const setDiePalette = (id, p) => {
    setDice(dice.map(d => d.id === id ? {...d, palette: p} : d));
  };

  // Modal container based on style tweak
  const modalStyles = getModalContainerStyle(style);

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(8px)',
        animation: 'fadeIn .2s',
      }}/>
      {/* Modal */}
      <div style={{
        ...modalStyles,
        zIndex: 101,
        background: 'linear-gradient(180deg, #1F1218, #150A0F)',
        border: '1px solid rgba(244,236,224,0.10)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
        color: '#F4ECE0',
        display: 'flex', flexDirection: 'column',
        animation: style === 'sheet' ? 'slideUp .3s' : 'pop .25s',
        overflow: 'hidden',
      }}>
        {/* Drag handle for sheet */}
        {style === 'sheet' && (
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, paddingBottom: 4 }}>
            <div style={{ width: 36, height: 4, borderRadius: 2, background: 'rgba(244,236,224,0.2)' }}/>
          </div>
        )}

        {/* Header */}
        <div style={{
          padding: '16px 20px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            {editingDie && (
              <button onClick={() => setEditingDieId(null)} style={{
                background: 'none', border: 'none', color: 'rgba(244,236,224,0.5)',
                fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase',
                cursor: 'pointer', padding: 0, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 4,
              }}>{t('ui.back')}</button>
            )}
            <div style={{
              fontFamily: '"Instrument Serif", serif', fontSize: 26, fontStyle: 'italic',
              letterSpacing: -0.3, lineHeight: 1,
            }}>
              {editingDie ? editingDie.label : t('ui.settings')}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <LanguageDropdown locale={locale} accentHex={accentHex}/>
            <button onClick={onClose} style={{
              width: 36, height: 36, borderRadius: '50%', border: 'none',
              background: 'rgba(244,236,224,0.08)', color: '#F4ECE0', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18,
            }}>×</button>
          </div>
        </div>

        {/* Tabs (hidden when editing) */}
        {!editingDie && (
          <div style={{
            display: 'flex', gap: 4, padding: '12px 20px 0',
            borderBottom: '1px solid rgba(244,236,224,0.08)',
          }}>
            {[
              ['dice', t('ui.tabs.dice')],
              ['look', t('ui.tabs.look')],
            ].map(([k, label]) => (
              <button key={k} onClick={() => setTab(k)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '10px 12px', fontSize: 13, fontWeight: 500,
                color: tab === k ? '#F4ECE0' : 'rgba(244,236,224,0.5)',
                borderBottom: tab === k ? `2px solid ${accentHex}` : '2px solid transparent',
                marginBottom: -1, fontFamily: 'inherit',
                transition: 'color .15s',
              }}>{label}</button>
            ))}
          </div>
        )}

        {/* Body */}
        <div style={{
          flex: 1, overflow: 'auto', padding: '16px 20px 20px',
        }}>
          {editingDie ? (
            <FaceEditor
              die={editingDie}
              accentHex={accentHex}
              onEdit={(idx, val) => editFace(editingDie.id, idx, val)}
              onPalette={(p) => setDiePalette(editingDie.id, p)}
              t={t}
            />
          ) : (
            <>
              {tab === 'dice' && (
                <DicePicker
                  dice={dice} accentHex={accentHex}
                  layout={pickerLayout}
                  toggleDie={toggleDie}
                  onEdit={setEditingDieId}
                  t={t}
                />
              )}
              {tab === 'look' && (
                <LookPanel
                  accent={accent} setAccent={setAccent}
                  bgMood={bgMood} setBgMood={setBgMood}
                  accentHex={accentHex}
                  t={t}
                />
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {!editingDie && (
          <div style={{
            padding: '14px 20px',
            borderTop: '1px solid rgba(244,236,224,0.08)',
            display: 'flex', gap: 10,
          }}>
            <div style={{
              flex: 1, fontSize: 11, color: 'rgba(244,236,224,0.5)',
              display: 'flex', alignItems: 'center',
            }}>
              {t('ui.panels.activeCount', {
                active: dice.filter(d => d.active).length,
                total: dice.length,
              })}
            </div>
            <button
              onClick={() => {
                if (window.confirm(t('ui.resetConfirm'))) {
                  onReset();
                }
              }}
              style={{
                padding: '10px 14px', borderRadius: 999, border: '1px solid rgba(244,236,224,0.14)',
                background: 'transparent', color: 'rgba(244,236,224,0.7)',
                fontWeight: 500, fontSize: 13, cursor: 'pointer',
                fontFamily: 'inherit',
              }}>{t('ui.reset')}</button>
            <button onClick={onClose} style={{
              padding: '10px 22px', borderRadius: 999, border: 'none',
              background: accentHex, color: '#FFF8EC', fontWeight: 600,
              fontSize: 13, cursor: 'pointer', letterSpacing: 0.2,
              boxShadow: `0 6px 16px ${accentHex}50`,
            }}>{t('ui.done')}</button>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(100%) } to { transform: translateY(0) } }
        @keyframes pop { from { opacity: 0; transform: translate(-50%, -48%) scale(.96) } to { opacity: 1; transform: translate(-50%, -50%) scale(1) } }
      `}</style>
    </>
  );
}

function getModalContainerStyle(style) {
  switch(style) {
    case 'sheet':
      return {
        position: 'fixed', left: '50%', bottom: 0, top: 80,
        transform: 'translateX(-50%)',
        width: 'min(100% - 24px, 560px)',
        borderRadius: '24px 24px 0 0',
      };
    case 'drawer':
      return {
        position: 'fixed', top: 0, bottom: 0, right: 0,
        width: 'min(88%, 440px)',
        borderRadius: '24px 0 0 24px',
      };
    case 'centered':
    default:
      return {
        position: 'fixed', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(100% - 24px, 520px)',
        maxHeight: 'min(100% - 80px, 760px)',
        borderRadius: 24,
      };
  }
}

// ───────── Dice picker ─────────
function DicePicker({ dice, accentHex, layout, toggleDie, onEdit, t }) {
  return (
    <div>
      {/* Section label */}
      <div style={{
        fontSize: 12, letterSpacing: 1.6, textTransform: 'uppercase',
        color: 'rgba(244,236,224,0.5)', marginBottom: 12,
      }}>{t('ui.panels.activeDice')}</div>

      {layout === 'list' ? (
        <ListPicker dice={dice} accentHex={accentHex} toggleDie={toggleDie} onEdit={onEdit} t={t}/>
      ) : (
        <GalleryPicker dice={dice} accentHex={accentHex} toggleDie={toggleDie} onEdit={onEdit} t={t}/>
      )}
    </div>
  );
}

function GalleryPicker({ dice, accentHex, toggleDie, onEdit, t }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
    }}>
      {dice.map(d => {
        const p = DIE_PALETTES_SM[d.palette];
        return (
          <div key={d.id} style={{
            borderRadius: 16, padding: 12,
            background: d.active ? 'rgba(244,236,224,0.06)' : 'rgba(244,236,224,0.025)',
            border: d.active ? `1px solid ${accentHex}55` : '1px solid rgba(244,236,224,0.08)',
            position: 'relative', overflow: 'hidden',
            transition: 'all .2s',
          }}>
            {/* 3D-ish die preview */}
            <div style={{
              height: 70, position: 'relative', display: 'flex',
              alignItems: 'center', justifyContent: 'center', marginBottom: 10,
            }}>
              <DiePreview palette={p} accentHex={accentHex} active={d.active} face={d.faces[0]}/>
            </div>
            <div style={{
              fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
              fontSize: 18, marginBottom: 2,
              color: d.active ? '#F4ECE0' : 'rgba(244,236,224,0.5)',
            }}>{d.label}</div>
            <div style={{ fontSize: 10, color: 'rgba(244,236,224,0.4)', marginBottom: 10 }}>
              {t('ui.panels.facesCount', { count: d.faces.length })}
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button onClick={() => toggleDie(d.id)} style={{
                flex: 1, padding: '7px 8px', borderRadius: 8,
                border: 'none', cursor: 'pointer', fontSize: 11, fontWeight: 600,
                background: d.active ? accentHex : 'rgba(244,236,224,0.1)',
                color: d.active ? '#FFF8EC' : 'rgba(244,236,224,0.6)',
                fontFamily: 'inherit',
              }}>{d.active ? t('ui.on') : t('ui.off')}</button>
              <button onClick={() => onEdit(d.id)} style={{
                width: 32, padding: 0, borderRadius: 8,
                border: '1px solid rgba(244,236,224,0.12)', background: 'transparent',
                color: 'rgba(244,236,224,0.6)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M12 20h9M16.5 3.5a2.1 2.1 0 113 3L7 19l-4 1 1-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ListPicker({ dice, accentHex, toggleDie, onEdit, t }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {dice.map(d => {
        const p = DIE_PALETTES_SM[d.palette];
        return (
          <div key={d.id} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: 10,
            borderRadius: 12, background: 'rgba(244,236,224,0.04)',
            border: '1px solid rgba(244,236,224,0.06)',
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 8, background: p.bg, color: p.fg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: '"Instrument Serif", serif', fontSize: 11, padding: 4, textAlign: 'center',
              fontStyle: 'italic',
            }}>{d.faces[0]}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{d.label}</div>
              <div style={{ fontSize: 11, color: 'rgba(244,236,224,0.5)' }}>
                {d.faces.slice(0,3).join(' · ')} · …
              </div>
            </div>
            <button onClick={() => onEdit(d.id)} style={{
              padding: '6px 10px', borderRadius: 8, fontSize: 11,
              background: 'transparent', border: '1px solid rgba(244,236,224,0.12)',
              color: 'rgba(244,236,224,0.7)', cursor: 'pointer',
            }}>{t('ui.edit')}</button>
            <Toggle on={d.active} onClick={() => toggleDie(d.id)} accentHex={accentHex}/>
          </div>
        );
      })}
    </div>
  );
}

function DiePreview({ palette, accentHex, active, face }) {
  // Isometric 3-face cube using CSS
  const size = 50;
  return (
    <div style={{
      // Filter sits on an outer 2D wrapper — applying it to the preserve-3d
      // element below forces a flattening that hides the top/right faces.
      filter: active ? 'none' : 'grayscale(0.5) opacity(0.5)',
      width: size, height: size,
    }}>
    <div style={{
      width: size, height: size, position: 'relative',
      transformStyle: 'preserve-3d',
      transform: 'rotateX(-25deg) rotateY(-30deg)',
    }}>
      {/* top */}
      <div style={{
        position: 'absolute', width: size, height: size,
        background: `linear-gradient(135deg, ${palette.bg}, ${shade(palette.bg, -15)})`,
        transform: `rotateX(90deg) translateZ(${size/2}px)`,
        boxShadow: 'inset 0 0 4px rgba(0,0,0,0.1)',
        borderRadius: 4,
      }}/>
      {/* front */}
      <div style={{
        position: 'absolute', width: size, height: size,
        background: palette.bg, color: palette.fg,
        transform: `translateZ(${size/2}px)`,
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.08)',
        borderRadius: 4,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
        fontSize: 9, padding: 4, textAlign: 'center', lineHeight: 1.1,
      }}>{face}</div>
      {/* right */}
      <div style={{
        position: 'absolute', width: size, height: size,
        background: shade(palette.bg, -25),
        transform: `rotateY(90deg) translateZ(${size/2}px)`,
        borderRadius: 4,
      }}/>
      {/* shadow */}
      <div style={{
        position: 'absolute', width: size*1.4, height: 8,
        left: -size*0.2, top: size*1.05,
        background: 'radial-gradient(ellipse, rgba(0,0,0,0.4), transparent 70%)',
        filter: 'blur(2px)',
      }}/>
    </div>
    </div>
  );
}

// ───────── Look panel ─────────
function LookPanel({ accent, setAccent, bgMood, setBgMood, accentHex, t }) {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 12, letterSpacing: 1.6, textTransform: 'uppercase', color: 'rgba(244,236,224,0.5)', marginBottom: 12 }}>{t('ui.panels.accent')}</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {Object.entries(ACCENT_HEX).map(([k, hex]) => (
            <button key={k} onClick={() => setAccent(k)} style={{
              flex: '1 1 calc(33% - 6px)', minWidth: 90,
              padding: '14px 8px', borderRadius: 14,
              background: 'rgba(244,236,224,0.04)',
              border: accent === k ? `2px solid ${hex}` : '2px solid rgba(244,236,224,0.08)',
              cursor: 'pointer', color: '#F4ECE0',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: `radial-gradient(circle at 35% 30%, ${shade(hex, 30)}, ${hex} 60%, ${shade(hex, -30)})`,
                boxShadow: `0 4px 12px ${hex}55, inset 0 1px 1px rgba(255,255,255,0.4)`,
              }}/>
              <span style={{ fontSize: 11, color: 'rgba(244,236,224,0.7)' }}>{t(`accents.${k}`)}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <div style={{ fontSize: 12, letterSpacing: 1.6, textTransform: 'uppercase', color: 'rgba(244,236,224,0.5)', marginBottom: 12 }}>{t('ui.panels.mood')}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {Object.entries(BG_MOOD_COLORS).map(([k, v]) => (
            <button key={k} onClick={() => setBgMood(k)} style={{
              padding: 0, borderRadius: 14, overflow: 'hidden',
              border: bgMood === k ? `2px solid ${accentHex}` : '2px solid rgba(244,236,224,0.08)',
              cursor: 'pointer', height: 70, position: 'relative',
              background: `radial-gradient(ellipse at 30% 0%, ${v.to}, ${v.from})`,
            }}>
              <div style={{
                position: 'absolute', bottom: 8, left: 12, color: '#F4ECE0',
                fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 14,
              }}>{t(`moods.${k}`)}</div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}

// ───────── Face editor ─────────
function FaceEditor({ die, accentHex, onEdit, onPalette, t }) {
  return (
    <div>
      {/* Big preview */}
      <div style={{
        height: 130, marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ transform: 'scale(2.2)' }}>
          <DiePreview palette={DIE_PALETTES_SM[die.palette]} accentHex={accentHex} active={true} face={die.faces[0]}/>
        </div>
      </div>

      {/* Palette */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: 'rgba(244,236,224,0.5)', marginBottom: 8 }}>{t('ui.panels.color')}</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {Object.entries(DIE_PALETTES_SM).map(([k, v]) => (
            <button key={k} onClick={() => onPalette(k)} style={{
              flex: 1, height: 36, borderRadius: 10,
              background: v.bg, cursor: 'pointer',
              border: die.palette === k ? `2px solid ${accentHex}` : '2px solid transparent',
              boxShadow: die.palette === k ? `0 0 0 1px rgba(244,236,224,0.2)` : 'inset 0 0 0 1px rgba(0,0,0,0.1)',
            }}/>
          ))}
        </div>
      </div>

      {/* Faces */}
      <div>
        <div style={{ fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: 'rgba(244,236,224,0.5)', marginBottom: 8 }}>{t('ui.panels.faces')}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {die.faces.map((face, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 12px', borderRadius: 10,
              background: 'rgba(244,236,224,0.04)',
              border: '1px solid rgba(244,236,224,0.06)',
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: 6,
                background: DIE_PALETTES_SM[die.palette].bg,
                color: DIE_PALETTES_SM[die.palette].fg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 600, fontFamily: 'inherit',
              }}>{i+1}</div>
              <input
                value={face}
                onChange={(e) => onEdit(i, e.target.value)}
                style={{
                  flex: 1, background: 'transparent', border: 'none', outline: 'none',
                  color: '#F4ECE0', fontSize: 14, fontFamily: 'inherit',
                  padding: '4px 0',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ───────── Atoms ─────────
function Toggle({ on, onClick, accentHex }) {
  return (
    <button onClick={onClick} style={{
      width: 44, height: 26, borderRadius: 999, border: 'none',
      background: on ? accentHex : 'rgba(244,236,224,0.15)',
      position: 'relative', cursor: 'pointer', padding: 0,
      transition: 'background .2s',
    }}>
      <div style={{
        width: 22, height: 22, borderRadius: '50%',
        background: '#F4ECE0', position: 'absolute', top: 2,
        left: on ? 20 : 2, transition: 'left .2s',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      }}/>
    </button>
  );
}

// Compact custom dropdown so it matches the dark modal theme. Native <select>
// would inherit the OS-default light popup which looks wrong here.
function LanguageDropdown({ locale, accentHex }) {
  const [open, setOpen] = useState_sm(false);
  const ref = useRef_sm(null);
  useEffect_sm(() => {
    if (!open) return;
    const onDocClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          height: 36, padding: '0 10px', borderRadius: 18,
          background: 'rgba(244,236,224,0.08)',
          border: '1px solid rgba(244,236,224,0.10)',
          color: '#F4ECE0', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 6,
          fontFamily: 'inherit', fontSize: 12, fontWeight: 600,
          letterSpacing: 0.6, textTransform: 'uppercase',
        }}
      >
        {locale.toUpperCase()}
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.7 }}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div
          role="listbox"
          style={{
            position: 'absolute', top: 'calc(100% + 6px)', right: 0,
            minWidth: 140,
            background: 'linear-gradient(180deg, #24161C, #180C11)',
            border: '1px solid rgba(244,236,224,0.12)',
            borderRadius: 10,
            boxShadow: '0 12px 32px rgba(0,0,0,0.5)',
            padding: 4,
            zIndex: 200,
          }}
        >
          {AVAILABLE_LOCALES.map(({ code, name }) => {
            const selected = code === locale;
            return (
              <button
                key={code}
                role="option"
                aria-selected={selected}
                onClick={() => { setOpen(false); switchLocale(code); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  width: '100%', padding: '8px 10px', borderRadius: 6,
                  background: selected ? `${accentHex}22` : 'transparent',
                  border: 'none', cursor: 'pointer',
                  color: selected ? '#F4ECE0' : 'rgba(244,236,224,0.75)',
                  fontFamily: 'inherit', fontSize: 13, textAlign: 'left',
                }}
              >
                <span style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: 0.6,
                  color: selected ? accentHex : 'rgba(244,236,224,0.4)',
                  minWidth: 22,
                }}>{code.toUpperCase()}</span>
                {name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SettingsModal;
