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

// Add this near the top of the file, with other global variables
let nudgeTimeout;
const dice3Checkbox = document.querySelector('#dice3-checkbox');
const dice4Checkbox = document.querySelector('#dice4-checkbox');

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

// Add this new array for the time durations
const diceWords4 = ['30 secs', '60 secs', '90 secs', '30 secs', '60 secs', '90 secs'];
const diceWordsMapped4 = ['for 90 seconds', 'for 30 seconds', 'for 60 seconds', 'for 90 seconds', 'for 60 seconds', 'for 30 seconds'];

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
    numberOfDice: 4, // Change this to 4
    segments: 40,
    edgeRadius: .07,
    notchRadius: .12,
    notchDepth: .1,
};

const diceArray = [];
let diceResults = ['', '', '', '']; // Add a fourth empty string
let diceSettled = [false, false, false, false]; // Add a fourth false value
let nudgeAttempts = [0, 0, 0, 0]; // Update to four zeros
const MAX_NUDGE_ATTEMPTS = 3;
const NUDGE_INTERVAL = 2000; // 2 seconds
const INITIAL_SETTLE_TIME = 5000; // 5 seconds

initPhysics();
initScene();

window.addEventListener('resize', updateSceneSize);
window.addEventListener('dblclick', throwDice);
rollBtn.addEventListener('click', throwDice);
nightModeBtn.addEventListener('click', toggleNightMode);

// Get the modal elements
const modal = document.getElementById('settings-modal');
const settingsBtn = document.getElementById('settings-btn');
const closeBtn = document.getElementById('close-modal');

// Open the modal when the settings button is clicked
settingsBtn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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
    const diceMesh3 = createTextDiceMesh(diceWords3, '#B4A6AB');
    const diceMesh4 = createTextDiceMesh(diceWords4, '#E3E2A0');

    diceArray.push(createDice(diceMesh1, 0));
    diceArray.push(createDice(diceMesh2, 1));
    diceArray.push(createDice(diceMesh3, 2));
    diceArray.push(createDice(diceMesh4, 3)); // Add this line

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
    const words = index === 0 ? diceWords1 : 
                  (index === 1 ? diceWords2 : 
                  (index === 2 ? diceWordsMapped3 : diceWordsMapped4));
    diceResults[index] = words[score - 1] || '';
    diceSettled[index] = true;
    updateScoreDisplay();
}

function updateScoreDisplay() {
    const activeResults = diceResults.filter((result, index) => 
        index < 2 || (index === 2 && dice3Checkbox.checked) || (index === 3 && dice4Checkbox.checked)
    );
    scoreResult.innerHTML = activeResults.join(' ');
    console.log(`Updated score: "${scoreResult.innerHTML}"`);
    if (diceSettled.every((settled, index) => 
        settled || index >= 2 && !dice3Checkbox.checked && !dice4Checkbox.checked
    )) {
        console.log("All active dice have settled.");
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
    diceResults = ['', '', '', '']; 
    diceSettled = [false, false, false, false]; 
    nudgeAttempts = [0, 0, 0, 0]; 

    diceArray.forEach((d, dIdx) => {
        // Only process the dice if it's one of the first two, or if its checkbox is checked
        if (dIdx < 2 || (dIdx === 2 && dice3Checkbox.checked) || (dIdx === 3 && dice4Checkbox.checked)) {
            d.body.velocity.setZero();
            d.body.angularVelocity.setZero();

            // Adjust the starting position of the dice
            d.body.position = new CANNON.Vec3(2, dIdx * 0.5 + 3, 0);
            d.mesh.position.copy(d.body.position);

            d.mesh.rotation.set(2 * Math.PI * Math.random(), 0, 2 * Math.PI * Math.random())
            d.body.quaternion.copy(d.mesh.quaternion);

            // Adjust the force applied to the dice
            const force = 3 + 2 * Math.random();
            const upwardForce = 2 + Math.random();
            d.body.applyImpulse(
                new CANNON.Vec3(-force, upwardForce, (Math.random() - 0.5) * 0.5),
                new CANNON.Vec3(0, 0, .02)
            );

            const torque = new CANNON.Vec3(
                (Math.random() - 0.5) * 1.5,
                (Math.random() - 0.5) * 1.5,
                (Math.random() - 0.5) * 1.5
            );
            d.body.torque.set(torque.x, torque.y, torque.z);

            d.body.allowSleep = true;
            d.mesh.visible = true;  // Make sure the dice is visible
        } else {
            // If the dice is not being used, hide it and set its position out of view
            d.body.position.set(0, -100, 0);  // Move it far below the scene
            d.mesh.position.copy(d.body.position);
            d.body.velocity.setZero();
            d.body.angularVelocity.setZero();
            d.mesh.visible = false;  // Hide the dice
            diceSettled[dIdx] = true;  // Consider it "settled" so we don't wait for it
        }
    });

    // Clear any existing timeout before setting a new one
    if (nudgeTimeout) {
        clearTimeout(nudgeTimeout);
    }
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

// Modify the createTextDiceMesh function to accept a background color
function createTextDiceMesh(words, backgroundColor) {
    const boxGeometry = createBoxGeometry();
    const materials = words.map(word => {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const context = canvas.getContext('2d');
        context.fillStyle = backgroundColor || '#ffffff'; // Use the provided background color or default to white
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