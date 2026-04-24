import { useState, useEffect } from 'react';
import { useT } from './i18n.jsx';

const STORAGE_KEY = 'vsd-age-confirmed';

export default function AgeGate() {
  const t = useT();
  // Start hidden to avoid a flash on confirmed visits; the effect below
  // flips it on once it has read localStorage.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== '1') setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const confirm = () => {
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch {}
    setVisible(false);
  };
  const decline = () => { window.location.href = 'https://www.google.com/'; };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(10, 6, 8, 0.92)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24,
      }}
    >
      <div style={{
        maxWidth: 420, width: '100%',
        padding: '32px 28px',
        background: '#1A0B11',
        border: '1px solid rgba(244, 236, 224, 0.14)',
        borderRadius: 16,
        color: '#F4ECE0',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
      }}>
        <h2 id="age-gate-title" style={{
          fontFamily: "'Instrument Serif', 'Times New Roman', serif",
          fontStyle: 'italic', fontWeight: 400,
          fontSize: 32, letterSpacing: '-0.3px',
          margin: '0 0 16px',
        }}>
          {t('ageGate.title')}
        </h2>
        <p style={{
          fontSize: 15, lineHeight: 1.55,
          color: 'rgba(244, 236, 224, 0.78)',
          margin: '0 0 24px',
        }}>
          {t('ageGate.body')}
        </p>
        <button
          onClick={confirm}
          style={{
            display: 'block', width: '100%',
            padding: '14px 20px',
            background: '#C97A5C',
            border: 'none', borderRadius: 10,
            color: '#1A0B11',
            fontSize: 15, fontWeight: 600,
            fontFamily: 'inherit',
            cursor: 'pointer',
            marginBottom: 10,
          }}
        >
          {t('ageGate.confirm')}
        </button>
        <button
          onClick={decline}
          style={{
            display: 'block', width: '100%',
            padding: '10px 20px',
            background: 'transparent',
            border: 'none',
            color: 'rgba(244, 236, 224, 0.5)',
            fontSize: 13,
            fontFamily: 'inherit',
            cursor: 'pointer',
          }}
        >
          {t('ageGate.decline')}
        </button>
      </div>
    </div>
  );
}
