// DiceScene.jsx — Real 3D dice using Three.js.
import { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import * as THREE from 'three';

// ───────── helpers ─────────
function makeFaceTexture(text, opts = {}) {
  const {
    bg = '#F4ECE0', fg = '#2A1A14', size = 1024,
    font = '400 64px "Instrument Serif", "Times New Roman", serif',
    sub = '', subFont = '500 22px "Inter", system-ui',
    accent = '#A14B3D',
  } = opts;
  const s = size / 512; // legacy constants were tuned for 512; scale them
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  ctx.fillStyle = bg;
  ctx.fillRect(0,0,size,size);

  // subtle grain
  const grain = ctx.createRadialGradient(size/2, size/2, 50*s, size/2, size/2, size/1.2);
  grain.addColorStop(0, 'rgba(255,255,255,0.08)');
  grain.addColorStop(1, 'rgba(0,0,0,0.18)');
  ctx.fillStyle = grain;
  ctx.fillRect(0,0,size,size);

  // inner border
  ctx.strokeStyle = 'rgba(0,0,0,0.07)';
  ctx.lineWidth = 6 * s;
  ctx.strokeRect(72*s, 72*s, size-144*s, size-144*s);

  // tiny corner glyph
  ctx.fillStyle = accent;
  ctx.beginPath();
  ctx.arc(90*s, 90*s, 5*s, 0, Math.PI*2);
  ctx.fill();

  // word wrap — safe zone matches the flat area of the rounded cube face
  ctx.fillStyle = fg;
  ctx.font = font.replace('64px', Math.round(64*s) + 'px');
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const words = String(text).split(' ');
  const lines = [];
  let cur = '';
  const safeMargin = 120 * s;
  const maxW = size - safeMargin * 2;
  // Use actual rendered bounds (advance width misses italic/serif overhang)
  const measure = (str) => {
    const m = ctx.measureText(str);
    const left = m.actualBoundingBoxLeft ?? 0;
    const right = m.actualBoundingBoxRight ?? m.width;
    return Math.max(m.width, left + right);
  };
  for (const w of words) {
    const test = cur ? cur + ' ' + w : w;
    if (measure(test) > maxW && cur) { lines.push(cur); cur = w; }
    else cur = test;
  }
  if (cur) lines.push(cur);
  // Starting font size by layout. Single long words (no spaces to wrap on)
  // like "Missionary" need a smaller start, because the shrink pass below
  // under-corrects when measureText misses serif overhang.
  let fontSize = Math.round(28 * s);
  if (lines.length > 2) fontSize = Math.round(24 * s);
  if (lines.length > 3) fontSize = Math.round(20 * s);
  if (lines.length === 1 && lines[0].length > 7) fontSize = Math.round(22 * s);
  ctx.font = font.replace('64px', fontSize + 'px');
  let widest = 0;
  for (const ln of lines) widest = Math.max(widest, measure(ln));
  // Deterministic fit: scale to the exact ratio needed. Tighter 30% buffer
  // (was 18%) compensates for serif overhang + 3D foreshortening near edges.
  const shrinkThreshold = maxW * 0.70;
  if (widest > shrinkThreshold) {
    const scale = shrinkThreshold / widest;
    fontSize = Math.max(Math.floor(fontSize * scale), Math.round(10 * s));
    ctx.font = font.replace('64px', fontSize + 'px');
    widest = 0;
    for (const ln of lines) widest = Math.max(widest, measure(ln));
  }
  const lh = fontSize * 1.15;
  const totalH = lines.length * lh;
  lines.forEach((ln, i) => {
    ctx.fillText(ln, size/2, size/2 - totalH/2 + lh/2 + i*lh);
  });

  if (sub) {
    ctx.font = subFont.replace('22px', Math.round(22*s) + 'px');
    ctx.fillStyle = 'rgba(0,0,0,0.45)';
    ctx.fillText(sub.toUpperCase(), size/2, size - 95*s);
  }

  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 8;
  tex.needsUpdate = true;
  return tex;
}

function makeRoundedBoxGeometry(w, h, d, radius = 0.12, segments = 6) {
  // Approximate rounded cube via BoxGeometry + vertex displacement
  const geo = new THREE.BoxGeometry(w, h, d, segments, segments, segments);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const nx = Math.sign(v.x) * Math.max(Math.abs(v.x) - (w/2 - radius), 0);
    const ny = Math.sign(v.y) * Math.max(Math.abs(v.y) - (h/2 - radius), 0);
    const nz = Math.sign(v.z) * Math.max(Math.abs(v.z) - (d/2 - radius), 0);
    const len = Math.sqrt(nx*nx + ny*ny + nz*nz);
    if (len > 0) {
      const scale = radius / len;
      v.x = (Math.sign(v.x) * (w/2 - radius)) + nx * scale;
      v.y = (Math.sign(v.y) * (h/2 - radius)) + ny * scale;
      v.z = (Math.sign(v.z) * (d/2 - radius)) + nz * scale;
      pos.setXYZ(i, v.x, v.y, v.z);
    }
  }
  geo.computeVertexNormals();
  return geo;
}

function buildDie(faces, palette) {
  const { bg, fg, accent, label } = palette;
  const size = 1.2;
  const geo = makeRoundedBoxGeometry(size, size, size, 0.07, 10);
  // Box face order: +x, -x, +y, -y, +z, -z
  const mats = [0,1,2,3,4,5].map(i => new THREE.MeshPhysicalMaterial({
    map: makeFaceTexture(faces[i] || '—', { bg, fg, accent, sub: label }),
    roughness: 0.55,
    metalness: 0.05,
    clearcoat: 0.4,
    clearcoatRoughness: 0.5,
    sheen: 0.3,
    sheenColor: new THREE.Color(accent),
  }));
  const mesh = new THREE.Mesh(geo, mats);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

// ───────── Component ─────────
// Material indices on a BoxGeometry: [+X, -X, +Y, -Y, +Z, -Z]
const FACE_NORMALS = [
  new THREE.Vector3( 1, 0, 0),
  new THREE.Vector3(-1, 0, 0),
  new THREE.Vector3( 0, 1, 0),
  new THREE.Vector3( 0,-1, 0),
  new THREE.Vector3( 0, 0, 1),
  new THREE.Vector3( 0, 0,-1),
];
function faceUpIndex(mesh) {
  let bestIdx = 2; // +Y is the natural default
  let bestY = -Infinity;
  const tmp = new THREE.Vector3();
  for (let i = 0; i < 6; i++) {
    tmp.copy(FACE_NORMALS[i]).applyEuler(mesh.rotation);
    if (tmp.y > bestY) { bestY = tmp.y; bestIdx = i; }
  }
  return bestIdx;
}

const DiceScene = forwardRef(function DiceScene({ dice, accent = '#C97A5C', bg = '#1B0E12', onSettled }, ref) {
  const onSettledRef = useRef(onSettled);
  useEffect(() => { onSettledRef.current = onSettled; }, [onSettled]);
  const mountRef = useRef(null);
  const stateRef = useRef({});

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    scene.background = null; // transparent

    // Fog for depth
    scene.fog = new THREE.Fog(bg, 8, 18);

    const camera = new THREE.PerspectiveCamera(35, w/h, 0.1, 100);
    camera.position.set(0, 7, 6);
    camera.lookAt(0, 0, 0);
    // Widens vertical FOV on portrait aspects so the horizontal dice wall at
    // x=±2.4 stays inside frame. No-op on landscape.
    const CAMERA_DISTANCE = Math.hypot(7, 6); // matches camera.position
    const TARGET_HALF_HORIZ = 3.0; // enough padding beyond the physics wall
    const BASE_FOV = 35;
    const MAX_FOV = 60; // cap so portrait doesn't go fisheye
    const fitFov = (aspect) => {
      if (aspect >= 1) return BASE_FOV;
      const needed = 2 * Math.atan(TARGET_HALF_HORIZ / (CAMERA_DISTANCE * aspect)) * 180 / Math.PI;
      return Math.min(MAX_FOV, Math.max(BASE_FOV, needed));
    };
    camera.fov = fitFov(w / h);
    camera.updateProjectionMatrix();

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.display = 'block';

    // Lights — warm key + cool rim
    const amb = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(amb);

    const key = new THREE.DirectionalLight(0xffd9b8, 1.4);
    key.position.set(3, 6, 4);
    key.castShadow = true;
    // Higher-res map + normalBias eliminates the "floating shadow" gap that
    // negative bias + soft PCF sampling was producing at the die's contact edge.
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.left = -5;
    key.shadow.camera.right = 5;
    key.shadow.camera.top = 5;
    key.shadow.camera.bottom = -5;
    key.shadow.bias = 0;
    key.shadow.normalBias = 0.02;
    scene.add(key);

    const rim = new THREE.DirectionalLight(new THREE.Color(accent), 0.6);
    rim.position.set(-4, 2, -3);
    scene.add(rim);

    const fill = new THREE.PointLight(0xffeacc, 0.4, 12);
    fill.position.set(0, 3, 3);
    scene.add(fill);

    // Floor — receives shadow, slight texture
    const floorGeo = new THREE.PlaneGeometry(20, 20);
    const floorMat = new THREE.ShadowMaterial({ opacity: 0.35 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI/2;
    floor.position.y = -0.6;
    floor.receiveShadow = true;
    scene.add(floor);

    // Build dice
    const meshes = dice.map((d, i) => {
      const m = buildDie(d.faces, d.palette);
      const spread = 1.6;
      const cols = Math.min(dice.length, 3);
      const col = i % cols;
      const row = Math.floor(i / cols);
      m.position.set((col - (cols-1)/2) * spread, 0, (row - 0.5) * spread);
      m.rotation.set(
        Math.floor(Math.random()*4) * (Math.PI/2),
        Math.floor(Math.random()*4) * (Math.PI/2),
        Math.floor(Math.random()*4) * (Math.PI/2),
      );
      // physics state
      m.userData.vel = new THREE.Vector3();
      m.userData.angVel = new THREE.Vector3();
      m.userData.restY = 0;
      scene.add(m);
      return m;
    });

    stateRef.current = { scene, camera, renderer, meshes, mount, settled: true };

    // Idle gentle hover
    let raf;
    let last = performance.now();
    const animate = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const st = stateRef.current;

      meshes.forEach((m, i) => {
        if (!st.settled && !st.settling) {
          // physics-y tumble
          m.userData.vel.y -= 9.8 * dt; // gravity
          m.position.addScaledVector(m.userData.vel, dt);
          m.rotation.x += m.userData.angVel.x * dt;
          m.rotation.y += m.userData.angVel.y * dt;
          m.rotation.z += m.userData.angVel.z * dt;

          // floor bounce
          if (m.position.y < m.userData.restY) {
            m.position.y = m.userData.restY;
            m.userData.vel.y *= -0.45;
            m.userData.vel.x *= 0.78;
            m.userData.vel.z *= 0.78;
            m.userData.angVel.multiplyScalar(0.7);
            if (Math.abs(m.userData.vel.y) < 0.4) m.userData.vel.y = 0;
          }
          // damp
          m.userData.vel.x *= (1 - 0.4*dt);
          m.userData.vel.z *= (1 - 0.4*dt);
          m.userData.angVel.multiplyScalar(1 - 0.5*dt);

          // soft wall containment — asymmetric on Z since +Z is closer to camera (bottom of frame)
          const limX = 2.4;
          const limZNear = 1.4;   // +Z edge (near camera, bottom of screen)
          const limZFar = 2.6;    // -Z edge (far from camera)
          if (Math.abs(m.position.x) > limX) { m.position.x = Math.sign(m.position.x)*limX; m.userData.vel.x *= -0.5; }
          if (m.position.z > limZNear) { m.position.z = limZNear; m.userData.vel.z *= -0.5; }
          if (m.position.z < -limZFar) { m.position.z = -limZFar; m.userData.vel.z *= -0.5; }
        } else if (st.settling) {
          // smoothly ease to face-up rotation and ground
          const t = m.userData.targetRot;
          const k = 1 - Math.pow(0.0008, dt); // ~200ms ease
          m.rotation.x += (t.x - m.rotation.x) * k;
          m.rotation.y += (t.y - m.rotation.y) * k;
          m.rotation.z += (t.z - m.rotation.z) * k;
          m.position.y += (m.userData.restY - m.position.y) * k;
        }
        // when fully settled: leave the die untouched
      });

      // die-vs-die collision (sphere approximation)
      if (!st.settled && !st.settling) {
        const radius = 0.72; // inscribed-ish radius for 1.2-size cube
        const minDist = radius * 2;
        for (let i = 0; i < meshes.length; i++) {
          for (let j = i + 1; j < meshes.length; j++) {
            const a = meshes[i], b = meshes[j];
            const dx = b.position.x - a.position.x;
            const dy = b.position.y - a.position.y;
            const dz = b.position.z - a.position.z;
            const d2 = dx*dx + dy*dy + dz*dz;
            if (d2 >= minDist*minDist || d2 < 1e-6) continue;
            const dist = Math.sqrt(d2);
            const nx = dx / dist, ny = dy / dist, nz = dz / dist;
            // positional correction — push apart along contact normal
            const overlap = (minDist - dist) * 0.5;
            a.position.x -= nx * overlap;
            a.position.y -= ny * overlap;
            a.position.z -= nz * overlap;
            b.position.x += nx * overlap;
            b.position.y += ny * overlap;
            b.position.z += nz * overlap;
            // keep above floor after correction
            if (a.position.y < a.userData.restY) a.position.y = a.userData.restY;
            if (b.position.y < b.userData.restY) b.position.y = b.userData.restY;
            // relative velocity along normal
            const va = a.userData.vel, vb = b.userData.vel;
            const relVel = (vb.x - va.x) * nx + (vb.y - va.y) * ny + (vb.z - va.z) * nz;
            if (relVel < 0) {
              const restitution = 0.45;
              const j_n = -(1 + restitution) * relVel * 0.5; // equal mass
              va.x -= j_n * nx; va.y -= j_n * ny; va.z -= j_n * nz;
              vb.x += j_n * nx; vb.y += j_n * ny; vb.z += j_n * nz;
              // tangential spin kick from collision (tumble feel)
              const spin = 5 * Math.min(1, -relVel);
              a.userData.angVel.x += (Math.random() - 0.5) * spin;
              a.userData.angVel.y += (Math.random() - 0.5) * spin;
              a.userData.angVel.z += (Math.random() - 0.5) * spin;
              b.userData.angVel.x += (Math.random() - 0.5) * spin;
              b.userData.angVel.y += (Math.random() - 0.5) * spin;
              b.userData.angVel.z += (Math.random() - 0.5) * spin;
            }
          }
        }
      }

      // start settling when motion is nearly gone
      if (!st.settled && !st.settling) {
        const moving = meshes.some(m => m.userData.vel.length() > 0.1 || m.userData.angVel.length() > 0.1);
        if (!moving) {
          st.settling = true;
          meshes.forEach(m => {
            const r = m.rotation;
            m.userData.targetRot = {
              x: Math.round(r.x / (Math.PI/2)) * (Math.PI/2),
              y: Math.round(r.y / (Math.PI/2)) * (Math.PI/2),
              z: Math.round(r.z / (Math.PI/2)) * (Math.PI/2),
            };
          });
        }
      }

      // finish settling when eased close enough
      if (st.settling) {
        let done = true;
        for (const m of meshes) {
          const t = m.userData.targetRot;
          if (Math.abs(t.x - m.rotation.x) > 0.008 ||
              Math.abs(t.y - m.rotation.y) > 0.008 ||
              Math.abs(t.z - m.rotation.z) > 0.008 ||
              Math.abs(m.userData.restY - m.position.y) > 0.003) {
            done = false; break;
          }
        }
        if (done) {
          meshes.forEach(m => {
            const t = m.userData.targetRot;
            m.rotation.set(t.x, t.y, t.z);
            m.position.y = m.userData.restY;
          });
          st.settling = false;
          st.settled = true;
          if (onSettledRef.current) {
            const indices = meshes.map(faceUpIndex);
            onSettledRef.current(indices);
          }
        }
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    // resize observer
    const ro = new ResizeObserver(() => {
      const w2 = mount.clientWidth;
      const h2 = mount.clientHeight;
      if (w2 === 0 || h2 === 0) return;
      camera.aspect = w2 / h2;
      camera.fov = fitFov(camera.aspect);
      camera.updateProjectionMatrix();
      renderer.setSize(w2, h2);
    });
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.dispose();
      meshes.forEach(m => {
        m.geometry.dispose();
        m.material.forEach(mat => { mat.map?.dispose(); mat.dispose(); });
      });
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, [JSON.stringify(dice.map(d => ({faces: d.faces, palette: d.palette}))), accent, bg]);

  useImperativeHandle(ref, () => ({
    throw() {
      const st = stateRef.current;
      if (!st.meshes) return;
      st.settled = false;
      st.settling = false;
      st.meshes.forEach(m => {
        m.position.y = 2.5 + Math.random()*1.5;
        m.position.x = (Math.random()-0.5)*2;
        m.position.z = (Math.random()-0.5)*2;
        // Randomize starting rotation so we don't bias toward the last face
        m.rotation.set(
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
        );
        m.userData.vel.set((Math.random()-0.5)*5, Math.random()*1.5, (Math.random()-0.5)*5);
        m.userData.angVel.set(
          (Math.random()-0.5)*28,
          (Math.random()-0.5)*28,
          (Math.random()-0.5)*28,
        );
      });
    },
  }));

  return <div ref={mountRef} style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} />;
});

export default DiceScene;
