// TweaksPanel.jsx — design-time tweaks (accent, mood, modal style, layout, density).
function TweaksPanel({ tweaks, updateTweak, open, setOpen }) {
  return (
    <div style={{
      position: 'absolute', bottom: 16, right: 16, zIndex: 200,
      fontFamily: '"Inter", system-ui, sans-serif',
    }}>
      {!open && (
        <button onClick={() => setOpen(true)} style={{
          width: 44, height: 44, borderRadius: 12,
          background: 'rgba(20,10,15,0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(244,236,224,0.15)',
          color: '#F4ECE0', cursor: 'pointer', fontSize: 18,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
        }}>⚙</button>
      )}
      {open && (
        <div style={{
          width: 240, padding: 14,
          background: 'rgba(20,10,15,0.92)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(244,236,224,0.15)',
          borderRadius: 14, color: '#F4ECE0',
          boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: 10,
          }}>
            <div style={{
              fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase',
              color: 'rgba(244,236,224,0.6)',
            }}>Tweaks</div>
            <button onClick={() => setOpen(false)} style={{
              background: 'none', border: 'none', color: 'rgba(244,236,224,0.6)',
              cursor: 'pointer', fontSize: 16, padding: 0,
            }}>×</button>
          </div>

          <TweakRow label="Modal">
            {['centered', 'sheet', 'drawer'].map(s => (
              <PillBtn key={s} active={tweaks.modalStyle === s} onClick={() => updateTweak('modalStyle', s)}>{s}</PillBtn>
            ))}
          </TweakRow>

          <TweakRow label="Picker">
            {['gallery', 'list'].map(s => (
              <PillBtn key={s} active={tweaks.pickerLayout === s} onClick={() => updateTweak('pickerLayout', s)}>{s}</PillBtn>
            ))}
          </TweakRow>

          <TweakRow label="Density">
            {['roomy', 'compact'].map(s => (
              <PillBtn key={s} active={tweaks.density === s} onClick={() => updateTweak('density', s)}>{s}</PillBtn>
            ))}
          </TweakRow>

          <TweakRow label="Accent">
            {Object.entries({
              rose:'#C97A5C', ember:'#D14B3D', sage:'#7A8F6A', iris:'#8478B8', amber:'#D4A24C',
            }).map(([k, hex]) => (
              <button key={k} onClick={() => updateTweak('accent', k)} style={{
                width: 22, height: 22, borderRadius: '50%',
                background: hex, cursor: 'pointer',
                border: tweaks.accent === k ? '2px solid #F4ECE0' : '2px solid transparent',
                padding: 0,
              }}/>
            ))}
          </TweakRow>

          <TweakRow label="Mood">
            {Object.entries({
              wine:['#1A0B11','#2A1620'], ink:['#0E0F1A','#1A1C2E'],
              forest:['#0E1612','#1A2620'], smoke:['#161210','#26201E'],
            }).map(([k, [from, to]]) => (
              <button key={k} onClick={() => updateTweak('bgMood', k)} style={{
                width: 26, height: 22, borderRadius: 6,
                background: `radial-gradient(ellipse, ${to}, ${from})`,
                cursor: 'pointer', padding: 0,
                border: tweaks.bgMood === k ? '2px solid #F4ECE0' : '2px solid transparent',
              }}/>
            ))}
          </TweakRow>
        </div>
      )}
    </div>
  );
}

function TweakRow({ label, children }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{
        fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase',
        color: 'rgba(244,236,224,0.5)', marginBottom: 6,
      }}>{label}</div>
      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>{children}</div>
    </div>
  );
}

function PillBtn({ active, onClick, children }) {
  return (
    <button onClick={onClick} style={{
      padding: '5px 9px', borderRadius: 6,
      background: active ? 'rgba(244,236,224,0.15)' : 'rgba(244,236,224,0.04)',
      border: '1px solid ' + (active ? 'rgba(244,236,224,0.25)' : 'rgba(244,236,224,0.08)'),
      color: active ? '#F4ECE0' : 'rgba(244,236,224,0.6)',
      fontSize: 11, cursor: 'pointer', textTransform: 'capitalize',
      fontFamily: 'inherit',
    }}>{children}</button>
  );
}

export default TweaksPanel;
