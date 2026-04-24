// MainScreen.jsx — Main screen UI for dice game
import { useState, useEffect, useRef } from 'react';
import DiceScene from './DiceScene.jsx';
import { shade } from './shade.js';
import { useT } from './i18n.jsx';

const useState_ms = useState;
const useEffect_ms = useEffect;
const useRef_ms = useRef;

function MainScreen({
  prompt, accentHex, rolling, sceneDice, sceneRef, bgFrom,
  results, dice, timer, timerTotal, timerRunning, muted, onToggleMute,
  onTimerToggle, onTimerReset,
  onThrow, onSettled, onOpenSettings, density,
}) {
  const t = useT();
  const compact = density === 'compact';
  const rollLabel = (() => {
    const h = new Date().getHours();
    if (h >= 5  && h < 12) return t('ui.timeOfDay.morning');
    if (h >= 12 && h < 17) return t('ui.timeOfDay.afternoon');
    if (h >= 17 && h < 21) return t('ui.timeOfDay.evening');
    return t('ui.timeOfDay.night');
  })();
  // Idle-based shake hint: appears after 8s of no rolls (mobile only)
  const [showHint, setShowHint] = useState_ms(false);
  const [isMobile, setIsMobile] = useState_ms(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 600px), (pointer: coarse)').matches
  );
  const idleTimerRef = useRef_ms(null);
  useEffect_ms(() => {
    const mq = window.matchMedia('(max-width: 600px), (pointer: coarse)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  useEffect_ms(() => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    setShowHint(false);
    if (rolling || !isMobile) return;
    idleTimerRef.current = setTimeout(() => setShowHint(true), 8000);
    return () => clearTimeout(idleTimerRef.current);
  }, [rolling, sceneDice.length, isMobile]);
  return (
    <div style={{
      width: '100%',
      // Use dvh (dynamic viewport) so mobile URL bar doesn't push content past
      // the bottom of the screen. Hard-capped height + overflow hidden keeps
      // the Throw button and timer pill visible without the page scrolling.
      height: '100dvh',
      display: 'flex', flexDirection: 'column',
      padding: 'clamp(16px, 3vh, 48px) 24px',
      position: 'relative', gap: 'clamp(12px, 2.5vh, 32px)',
      overflow: 'hidden',
    }}>
      {/* Header / prompt — centered */}
      <div style={{
        width: '100%', maxWidth: 720, margin: '0 auto',
        textAlign: 'center', position: 'relative', zIndex: 5,
      }}>
        <div style={{
          fontFamily: '"Inter", system-ui',
          fontSize: 11, letterSpacing: 2.8, textTransform: 'uppercase',
          color: 'rgba(244,236,224,0.5)', marginBottom: 16,
          display: 'inline-flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{
            display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
            background: accentHex,
          }}/>
          {rollLabel}
          <span style={{
            display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
            background: accentHex,
          }}/>
        </div>
        <div style={{
          fontFamily: '"Instrument Serif", "Times New Roman", serif',
          fontSize: 'clamp(28px, 4.2vw, 48px)', lineHeight: 1.12,
          color: '#F4ECE0', letterSpacing: -0.5,
          textWrap: 'pretty', fontWeight: 400,
          fontStyle: 'italic',
        }}>
          {prompt}
        </div>
      </div>

      {/* 3D scene area — centered, contained */}
      <div style={{
        flex: 1, position: 'relative',
        // minHeight: 0 lets the flex child shrink below its natural/content
        // size on short viewports so the controls below stay visible.
        minHeight: 0,
        width: '100%', maxWidth: 880, margin: '0 auto',
      }}>
        {sceneDice.length > 0 && (
          <DiceScene ref={sceneRef} dice={sceneDice} accent={accentHex} bg={bgFrom} onSettled={onSettled} />
        )}
        {sceneDice.length === 0 && (
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            color: 'rgba(244,236,224,0.4)', fontSize: 14,
          }}>
            {t('ui.noDiceSelected')}
          </div>
        )}
        {/* Idle hint — mobile only, floats above the throw button as an
            overlay on the dice scene. Hidden until 8s of inactivity. */}
        {isMobile && (
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 8,
            textAlign: 'center', fontSize: 10, letterSpacing: 1.6, textTransform: 'uppercase',
            color: 'rgba(244,236,224,0.5)',
            pointerEvents: 'none', zIndex: 6,
            opacity: showHint ? 1 : 0,
            transition: 'opacity 1.2s ease-in',
            animation: showHint ? 'shakeHintPulse 2.4s ease-in-out infinite' : 'none',
          }}>
            {t('ui.shakeHint')}
          </div>
        )}
      </div>

      {/* Controls cluster — centered column */}
      <div style={{
        width: '100%', maxWidth: 520, margin: '0 auto',
        display: 'flex', flexDirection: 'column',
        position: 'relative', zIndex: 5,
      }}>
        {/* Action row: Throw + Settings */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <button
            onClick={onThrow}
            disabled={rolling}
            style={{
              flex: 1, height: 64, borderRadius: 999, border: 'none',
              background: `linear-gradient(180deg, ${accentHex}, ${shade(accentHex, -25)})`,
              color: '#FFF8EC',
              fontFamily: '"Instrument Serif", serif', fontSize: 22, fontStyle: 'italic',
              letterSpacing: 0.3, cursor: 'pointer',
              boxShadow: `0 2px 0 ${shade(accentHex, -45)}, 0 12px 30px ${accentHex}60, inset 0 1px 0 rgba(255,255,255,0.4)`,
              position: 'relative', overflow: 'hidden',
              transform: rolling ? 'scale(0.97)' : 'scale(1)',
              transition: 'transform .15s',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            }}>
            <div style={{
              position: 'absolute', inset: 0, borderRadius: 999,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.25), transparent 45%)',
              pointerEvents: 'none',
            }}/>
            <DiceIcon size={20}/>
            <span>{rolling ? t('ui.rolling') : t('ui.throw')}</span>
          </button>
          <button
            onClick={onOpenSettings}
            style={iconBtnStyle}
            aria-label={t('ui.aria.settings')}
          >
            <SettingsIcon/>
          </button>
        </div>

        {/* Timer pill */}
        <div style={{
          height: 44, borderRadius: 999,
          background: 'rgba(244,236,224,0.06)',
          border: '1px solid rgba(244,236,224,0.10)',
          display: 'flex', alignItems: 'center', padding: '0 6px 0 16px', gap: 10,
        }}>
          <button
            onClick={onTimerToggle}
            aria-label={timerRunning ? t('ui.aria.pauseTimer') : t('ui.aria.startTimer')}
            style={{
              width: 32, height: 32, borderRadius: '50%', border: 'none',
              background: timerRunning ? accentHex : 'rgba(244,236,224,0.12)',
              color: '#F4ECE0', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
            {timerRunning ? <PauseIcon/> : <PlayIcon/>}
          </button>
          <div style={{
            flex: 1, display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{
              fontFamily: '"JetBrains Mono", "SF Mono", ui-monospace, monospace',
              fontSize: 18, color: '#F4ECE0', fontVariantNumeric: 'tabular-nums',
              letterSpacing: 1,
            }}>
              {String(Math.floor(timer/60)).padStart(2,'0')}:{String(timer%60).padStart(2,'0')}
            </span>
            <div style={{
              flex: 1, height: 3, borderRadius: 2,
              background: 'rgba(244,236,224,0.08)', overflow: 'hidden',
            }}>
              <div style={{
                height: '100%', width: `${timerTotal > 0 ? (timer/timerTotal)*100 : 0}%`,
                background: accentHex, transition: 'width 1s linear',
              }}/>
            </div>
          </div>
          <button
            onClick={onTimerReset}
            aria-label={t('ui.aria.resetTimer')}
            style={{
              width: 32, height: 32, borderRadius: '50%', border: 'none',
              background: 'transparent', color: 'rgba(244,236,224,0.6)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
            <RefreshIcon/>
          </button>
          <button
            onClick={onToggleMute}
            aria-label={muted ? t('ui.aria.unmute') : t('ui.aria.mute')}
            style={{
              width: 32, height: 32, borderRadius: '50%', border: 'none',
              background: 'transparent', color: 'rgba(244,236,224,0.6)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
            {muted ? <MuteIcon/> : <SoundIcon/>}
          </button>
        </div>

      </div>

      <style>{`
        @keyframes shakeHintPulse {
          0%, 100% { transform: translateX(0); opacity: 0.35; }
          25% { transform: translateX(-2px); opacity: 0.7; }
          75% { transform: translateX(2px); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}

const iconBtnStyle = {
  width: 64, height: 64, borderRadius: '50%', border: 'none',
  background: 'rgba(244,236,224,0.06)',
  border: '1px solid rgba(244,236,224,0.12)',
  color: '#F4ECE0', cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  backdropFilter: 'blur(10px)',
};

// Icons
const DiceIcon = ({size=22}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="8" cy="8" r="1.4" fill="currentColor"/>
    <circle cx="16" cy="16" r="1.4" fill="currentColor"/>
    <circle cx="12" cy="12" r="1.4" fill="currentColor"/>
  </svg>
);
const SettingsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1A1.7 1.7 0 004.6 9a1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9c.4.6 1 1 1.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" stroke="currentColor" strokeWidth="1.4"/>
  </svg>
);
const SoundIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M15.5 8.5a5 5 0 010 7M19 5a10 10 0 010 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const MuteIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M22 9l-6 6M16 9l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8z"/></svg>
);
const PauseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
);
const RefreshIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M21 12a9 9 0 11-3-6.7L21 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 3v5h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default MainScreen;
