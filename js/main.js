import * as CANNON from 'https://cdn.skypack.dev/cannon-es';

import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { TextureLoader } from 'three';

const canvasEl = document.querySelector('#canvas');
const scoreResult = document.querySelector('#score-result');
const rollBtn = document.querySelector('#roll-btn');
const nightModeBtn = document.querySelector('#night-mode-btn');

let renderer, scene, camera, diceMesh, physicsWorld;
const textureLoader = new TextureLoader();
let isNightMode = false;

const diceTextures1 = [
    'img/dice1_69.svg',
    'img/dice1_bj.svg',
    'img/dice1_cowgirl.svg',
    'img/dice1_doggy.svg',
    'img/dice1_eatout.svg',
    'img/dice1_legsinair.svg',
].map(loadTexture);

const diceTextures2 = [
    'img/dice2_bed.svg',
    'img/dice2_couch.svg',
    'img/dice2_counter.svg',
    'img/dice2_floor.svg',
    'img/dice2_kitchen.svg',
    'img/dice2_shower.svg',
].map(loadTexture);

// Remove the diceTextures3 array and replace it with a words array
const diceWords3 = ['slowly', 'quickly', 'gently', 'roughly', 'teasingly', 'intensely'];
const diceWordsMapped3 = ['gently', 'slowly', 'teasingly', 'intensely', 'quickly', 'roughly'];

const diceWords1 = ['Cowgirl', '69', 'Eat her out', 'Missionary', 'Blowjob', 'Doggy'];
const diceWords2 = ['on a counter', 'in bed', 'in the kitchen', 'in the shower', 'on a couch', 'on the floor'];

function loadTexture(url, index) {
    return textureLoader.load(
        url,
        (texture) => {
            console.log(`Texture ${index + 1} loaded successfully`);
            texture.colorSpace = THREE.SRGBColorSpace;
        },
        undefined,
        (err) => {
            console.error(`Error loading texture ${index + 1}:`, err);
        }
    );
}

const params = {
    numberOfDice: 3, // Change this to 3
    segments: 40,
    edgeRadius: .07,
    notchRadius: .12,
    notchDepth: .1,
};

const diceArray = [];

let diceResults = ['', '', '']; // Add a third empty string
let diceSettled = [false, false, false]; // Add a third false value
let nudgeTimeout;
let nudgeAttempts = [0, 0, 0]; // Update to three zeros
const MAX_NUDGE_ATTEMPTS = 3;
const NUDGE_INTERVAL = 2000; // 2 seconds
const INITIAL_SETTLE_TIME = 5000; // 5 seconds

initPhysics();
initScene();

window.addEventListener('resize', updateSceneSize);
window.addEventListener('dblclick', throwDice);
rollBtn.addEventListener('click', throwDice);
nightModeBtn.addEventListener('click', toggleNightMode);

function initScene() {

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: canvasEl
    });
    renderer.shadowMap.enabled = true
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 300)
    camera.position.set(0, 10, 5);
    camera.lookAt(0, 0, 0);

    updateSceneSize();

    const ambientLight = new THREE.AmbientLight(0xffffff, .5);
    scene.add(ambientLight);
    const topLight = new THREE.PointLight(0xffffff, .5);
    topLight.position.set(10, 15, 0);
    topLight.castShadow = true;
    topLight.shadow.mapSize.width = 2048;
    topLight.shadow.mapSize.height = 2048;
    topLight.shadow.camera.near = 5;
    topLight.shadow.camera.far = 400;
    scene.add(topLight);
    
    // Store lights for night mode toggle
    window.lights = { ambientLight, topLight };
    
    createFloor();
    const diceMesh1 = createDiceMesh(diceTextures1);
    const diceMesh2 = createDiceMesh(diceTextures2);
    const diceMesh3 = createTextDiceMesh(diceWords3);

    diceArray.push(createDice(diceMesh1, 0));
    diceArray.push(createDice(diceMesh2, 1));
    diceArray.push(createDice(diceMesh3, 2));

    diceArray.forEach(dice => addDiceEvents(dice, dice.index));

    throwDice();

    render();
}

function initPhysics() {
    physicsWorld = new CANNON.World({
        allowSleep: true,
        gravity: new CANNON.Vec3(0, -50, 0),
    })
    physicsWorld.defaultContactMaterial.restitution = .3;
    physicsWorld.defaultContactMaterial.friction = 0.5; // Add friction

    // Add boundaries
    addBoundaries();
}

function addBoundaries() {
    const boundaryThickness = 1;
    const boundaryHeight = 10;

    // Create boundaries
    const leftWall = new CANNON.Body({
        type: CANNON.Body.STATIC,
        shape: new CANNON.Box(new CANNON.Vec3(boundaryThickness, boundaryHeight, 10)),
    });
    leftWall.position.set(-5, 0, 0);
    physicsWorld.addBody(leftWall);

    const rightWall = new CANNON.Body({
        type: CANNON.Body.STATIC,
        shape: new CANNON.Box(new CANNON.Vec3(boundaryThickness, boundaryHeight, 10)),
    });
    rightWall.position.set(5, 0, 0);
    physicsWorld.addBody(rightWall);

    const backWall = new CANNON.Body({
        type: CANNON.Body.STATIC,
        shape: new CANNON.Box(new CANNON.Vec3(10, boundaryHeight, boundaryThickness)),
    });
    backWall.position.set(0, 0, -5);
    physicsWorld.addBody(backWall);

    const frontWall = new CANNON.Body({
        type: CANNON.Body.STATIC,
        shape: new CANNON.Box(new CANNON.Vec3(10, boundaryHeight, boundaryThickness)),
    });
    frontWall.position.set(0, 0, 5);
    physicsWorld.addBody(frontWall);
}

function createFloor() {
    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(1000, 1000),
        new THREE.ShadowMaterial({
            opacity: .1
        })
    )
    floor.receiveShadow = true;
    floor.position.y = -7;
    floor.quaternion.setFromAxisAngle(new THREE.Vector3(-1, 0, 0), Math.PI * .5);
    scene.add(floor);

    const floorBody = new CANNON.Body({
        type: CANNON.Body.STATIC,
        shape: new CANNON.Plane(),
    });
    floorBody.position.copy(floor.position);
    floorBody.quaternion.copy(floor.quaternion);
    physicsWorld.addBody(floorBody);
}

function createDiceMesh(textures) {
    const boxGeometry = createBoxGeometry();
    const materials = textures.map((texture, index) => {
        return new THREE.MeshStandardMaterial({ 
            map: texture,
            transparent: true,
            side: THREE.DoubleSide,
            color: 0xffffff,
        });
    });
    
    const diceMesh = new THREE.Mesh(boxGeometry, materials);
    diceMesh.castShadow = true;
    
    return diceMesh;
}

function createBoxGeometry() {
    let boxGeometry = new THREE.BoxGeometry(1, 1, 1, params.segments, params.segments, params.segments);

    const positionAttr = boxGeometry.attributes.position;
    const subCubeHalfSize = .5 - params.edgeRadius;

    for (let i = 0; i < positionAttr.count; i++) {
        let position = new THREE.Vector3().fromBufferAttribute(positionAttr, i);

        const subCube = new THREE.Vector3(Math.sign(position.x), Math.sign(position.y), Math.sign(position.z)).multiplyScalar(subCubeHalfSize);
        const addition = new THREE.Vector3().subVectors(position, subCube);

        if (Math.abs(position.x) > subCubeHalfSize && Math.abs(position.y) > subCubeHalfSize && Math.abs(position.z) > subCubeHalfSize) {
            addition.normalize().multiplyScalar(params.edgeRadius);
            position = subCube.add(addition);
        } else if (Math.abs(position.x) > subCubeHalfSize && Math.abs(position.y) > subCubeHalfSize) {
            addition.z = 0;
            addition.normalize().multiplyScalar(params.edgeRadius);
            position.x = subCube.x + addition.x;
            position.y = subCube.y + addition.y;
        } else if (Math.abs(position.x) > subCubeHalfSize && Math.abs(position.z) > subCubeHalfSize) {
            addition.y = 0;
            addition.normalize().multiplyScalar(params.edgeRadius);
            position.x = subCube.x + addition.x;
            position.z = subCube.z + addition.z;
        } else if (Math.abs(position.y) > subCubeHalfSize && Math.abs(position.z) > subCubeHalfSize) {
            addition.x = 0;
            addition.normalize().multiplyScalar(params.edgeRadius);
            position.y = subCube.y + addition.y;
            position.z = subCube.z + addition.z;
        }

        positionAttr.setXYZ(i, position.x, position.y, position.z);
    }

    boxGeometry.computeVertexNormals();

    return boxGeometry;
}

function createDice(diceMesh, index) {
    const mesh = diceMesh.clone();
    scene.add(mesh);

    const body = new CANNON.Body({
        mass: 1,
        shape: new CANNON.Box(new CANNON.Vec3(.5, .5, .5)),
        sleepTimeLimit: .1,
        angularDamping: 0.3, // Add angular damping
        linearDamping: 0.3   // Add linear damping
    });
    physicsWorld.addBody(body);

    return {mesh, body, index};
}

function addDiceEvents(dice, index) {
    dice.body.addEventListener('sleep', (e) => {
        if (!diceSettled[index]) {
            const score = getDiceScore(e.target);
            if (score !== null) {
                setDiceResult(score, index);
            }
        }
    });
}

function getDiceScore(diceBody) {
    const euler = new CANNON.Vec3();
    diceBody.quaternion.toEuler(euler);

    const eps = .1;
    let isZero = (angle) => Math.abs(angle) < eps;
    let isHalfPi = (angle) => Math.abs(angle - .5 * Math.PI) < eps;
    let isMinusHalfPi = (angle) => Math.abs(.5 * Math.PI + angle) < eps;
    let isPiOrMinusPi = (angle) => (Math.abs(Math.PI - angle) < eps || Math.abs(Math.PI + angle) < eps);

    if (isZero(euler.z)) {
        if (isZero(euler.x)) return 1;
        if (isHalfPi(euler.x)) return 4;
        if (isMinusHalfPi(euler.x)) return 3;
        if (isPiOrMinusPi(euler.x)) return 6;
    } else if (isHalfPi(euler.z)) {
        return 2;
    } else if (isMinusHalfPi(euler.z)) {
        return 5;
    }
    return null; // Dice is on an edge or corner
}

function setDiceResult(score, index) {
    const words = index === 0 ? diceWords1 : (index === 1 ? diceWords2 : diceWordsMapped3);
    diceResults[index] = words[score - 1] || '';
    diceSettled[index] = true;
    updateScoreDisplay();
}

function updateScoreDisplay() {
    scoreResult.innerHTML = diceResults.join(' ');
    console.log(`Updated score: "${scoreResult.innerHTML}"`);
    if (diceSettled.every(Boolean)) {
        console.log("All dice have settled.");
        clearTimeout(nudgeTimeout);
    }
}

function render() {
    physicsWorld.fixedStep();

    for (const dice of diceArray) {
        dice.mesh.position.copy(dice.body.position)
        dice.mesh.quaternion.copy(dice.body.quaternion)
    }

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

function updateSceneSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function throwDice() {
    scoreResult.innerHTML = '';
    diceResults = ['', '', '']; // Update to three empty strings
    diceSettled = [false, false, false]; // Update to three false values
    nudgeAttempts = [0, 0, 0]; // Update to three zeros

    diceArray.forEach((d, dIdx) => {
        d.body.velocity.setZero();
        d.body.angularVelocity.setZero();

        // Adjust the starting position of the dice
        d.body.position = new CANNON.Vec3(2, dIdx * 0.5 + 3, 0);
        d.mesh.position.copy(d.body.position);

        d.mesh.rotation.set(2 * Math.PI * Math.random(), 0, 2 * Math.PI * Math.random())
        d.body.quaternion.copy(d.mesh.quaternion);

        // Adjust the force applied to the dice
        const force = 3 + 2 * Math.random(); // Slightly reduced randomness
        const upwardForce = 2 + Math.random(); // Reduced upward force
        d.body.applyImpulse(
            new CANNON.Vec3(-force, upwardForce, (Math.random() - 0.5) * 0.5), // Reduced z-direction force
            new CANNON.Vec3(0, 0, .02)
        );

        // Add some random torque for more interesting spins, but with less intensity
        const torque = new CANNON.Vec3(
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 1.5
        );
        d.body.torque.set(torque.x, torque.y, torque.z);

        d.body.allowSleep = true;
    });

    clearTimeout(nudgeTimeout);
    nudgeTimeout = setTimeout(() => checkDiceSettled(), INITIAL_SETTLE_TIME);
}

function checkDiceSettled() {
    diceArray.forEach((dice, index) => {
        if (!diceSettled[index]) {
            if (nudgeAttempts[index] < MAX_NUDGE_ATTEMPTS) {
                console.log(`Nudging dice ${index + 1}. Attempt: ${nudgeAttempts[index] + 1}`);
                nudgeDice(dice);
                nudgeAttempts[index]++;
                setTimeout(() => checkSingleDice(index), NUDGE_INTERVAL);
            } else {
                console.log(`Forcing result for dice ${index + 1}`);
                forceSettleDice(dice, index);
            }
        }
    });
}

function checkSingleDice(index) {
    if (!diceSettled[index]) {
        const score = getDiceScore(diceArray[index].body);
        if (score !== null) {
            setDiceResult(score, index);
        } else {
            checkDiceSettled();
        }
    }
}

function nudgeDice(dice) {
    const nudgeForce = 5 + Math.random() * 5;
    const randomDirection = new CANNON.Vec3(
        (Math.random() - 0.5) * 2,
        Math.abs(Math.random()),
        (Math.random() - 0.5) * 2
    ).unit();

    dice.body.applyImpulse(
        randomDirection.scale(nudgeForce, randomDirection),
        dice.body.position
    );

    dice.body.allowSleep = false;
    setTimeout(() => { dice.body.allowSleep = true; }, 100);
}

function forceSettleDice(dice, index) {
    const forcedScore = Math.floor(Math.random() * 6) + 1;
    setDiceResult(forcedScore, index);
    updateDiceMeshRotation(dice, forcedScore);
}

function updateDiceMeshRotation(dice, score) {
    // Set the rotation of the dice mesh based on the score
    // This is a simplified version; you might need to adjust these rotations
    switch(score) {
        case 1: dice.mesh.rotation.set(0, 0, 0); break;
        case 2: dice.mesh.rotation.set(0, 0, Math.PI / 2); break;
        case 3: dice.mesh.rotation.set(-Math.PI / 2, 0, 0); break;
        case 4: dice.mesh.rotation.set(Math.PI / 2, 0, 0); break;
        case 5: dice.mesh.rotation.set(0, 0, -Math.PI / 2); break;
        case 6: dice.mesh.rotation.set(Math.PI, 0, 0); break;
    }
    dice.body.quaternion.copy(dice.mesh.quaternion);
}

// Add this function to your render loop or call it after scene initialization
function checkDiceMaterials() {
    diceArray.forEach((dice, index) => {
        console.log(`Dice ${index + 1} materials:`, dice.mesh.material);
    });
}

// Call this function after your dice are created
checkDiceMaterials();

function toggleNightMode() {
    isNightMode = !isNightMode;
    
    if (isNightMode) {
        document.body.classList.add('night-mode');
        window.lights.ambientLight.intensity = 0.3;
        window.lights.topLight.intensity = 0.4;
        scene.background = new THREE.Color(0x202030);  // Dark blue-gray background
    } else {
        document.body.classList.remove('night-mode');
        window.lights.ambientLight.intensity = 0.5;
        window.lights.topLight.intensity = 0.5;
        scene.background = null;
    }
}

// Add this new function to create a text-based dice mesh
function createTextDiceMesh(words) {
    const boxGeometry = createBoxGeometry();
    const materials = words.map(word => {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const context = canvas.getContext('2d');
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, 128, 128);
        context.font = 'bold 24px Arial';
        context.fillStyle = '#000000';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(word, 64, 64);
        
        const texture = new THREE.CanvasTexture(canvas);
        return new THREE.MeshStandardMaterial({ 
            map: texture,
            transparent: true,
            side: THREE.DoubleSide,
        });
    });
    
    const diceMesh = new THREE.Mesh(boxGeometry, materials);
    diceMesh.castShadow = true;
    
    return diceMesh;
}