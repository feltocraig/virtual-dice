import * as CANNON from 'https://cdn.skypack.dev/cannon-es';

import * as THREE from 'three';
import { TextureLoader } from 'three';

const canvasEl = document.querySelector('#canvas');
const scoreResult = document.querySelector('#score-result');
const rollBtn = document.querySelector('#roll-btn');
const nightModeToggle = document.querySelector('#night-mode-toggle');

let renderer, scene, camera, diceMesh, physicsWorld;
const textureLoader = new TextureLoader();
let isNightMode = localStorage.getItem('nightMode') === 'true';

// Add this near the top of the file, with other global variables
let nudgeTimeout;
const dice3Checkbox = document.querySelector('#dice3-checkbox');
const dice4Checkbox = document.querySelector('#dice4-checkbox');
const dice5Checkbox = document.querySelector('#dice5-checkbox');

// Add these constants near the top of the file
const dice1Checkbox = document.querySelector('#dice1-checkbox');
const dice2Checkbox = document.querySelector('#dice2-checkbox');
const closeModalBtn = document.querySelector('#close-modal');

// Add this near the top of the file, with other global variables
let myShakeEvent;

// Add these constants near the top of the file
const mobileShakeModal = document.getElementById('mobile-shake-modal');
const gotItBtn = document.getElementById('got-it-btn');

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

// Add this new array for the fifth dice
const diceWords5 = ['Oral', 'Finger Clit', 'G-Spot', 'Butt play', 'Breast play', 'Spanking'];
const diceWordsMapped5 = ['Finger her g-spot', 'Eat her out', 'Play with her breasts', 'Spank her', 'Play with her clit', 'Play with her butt'];

//Cowgirl, Reverse Cowgirl, Spooning
const diceWords1 = ['Cowgirl', '69', 'Eat her out', 'Missionary', 'Blowjob', 'Doggy'];
const diceWords2 = ['on a counter', 'in bed', 'in the kitchen', 'in the bathroom', 'on a couch', 'on the floor'];

// Girl Related
// 1. Oral Sex 2. Clitoral Stimulation 3. G-Spot Stimulation 4. Anal Play 5. Breast Play
// 6. Spanking 7. Bondage 8. Role Play 9. Erotic Massage 10. Sensory Deprivation
// Girl Toys
// 1. Vibrator 2. Dildo 3. Nipple Clamps 4. Anal Plug 5. Strap-On 
// 6. Blindfold 7. Handcuffs 8. Bondage Tape 9. Feather Tickler 10. Whisper Stimulator
// 11. Clitoral Suction Toy 12. Spanking Paddle (flogger)

// Guy Related
// 1. Hand Job 2. Blow Job 3. Prostate Stimulation 4. Testicle Stimulation 5. Spanking
// 6. Bondage7. Role Play 8. Erotic Massage 9. Sensory Deprivation 10. Edging
// Guy Toys
// 1. Masturbator 2. Prostate Massager 3. Cock Ring 4. Testicle Stimulation Toy 5. Vibrating Penis Sleeve
// 6. Anal Plug 7. Spanking Paddle 8. Bondage Gear 9. Erotic Massage Oil 10. Edging Toy
// 11. Blindfold 12. Handcuffs 13. Feather Tickler

// 1. Foreplay Dice: This dice could include suggestions for different types of foreplay, such as kissing, touching, or teasing.
// 2. Role Play Dice: This dice could include suggestions for different types of role play scenarios, such as doctor and patient, teacher and student, or superhero and villain.
// 3. Fantasy Dice: This dice could include suggestions for different types of sexual fantasies, such as being tied up, having a threesome, or having sex in a public place.
// 4. Communication Dice: This dice could include suggestions for different types of communication during sex, such as dirty talk, moaning, or giving feedback.
// 5. Sensory Dice: This dice could include suggestions for different types of sensory experiences during sex, such as blindfolding, using ice or heat, or using flavored lube.


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
    numberOfDice: 5, // Change this to 5
    segments: 40,
    edgeRadius: .07,
    notchRadius: .12,
    notchDepth: .1,
};

const diceArray = [];
let diceResults = ['', '', '', '', '']; // Add a fifth empty string
let diceSettled = [false, false, false, false, false]; // Add a fifth false value
let nudgeAttempts = [0, 0, 0, 0, 0]; // Update to five zeros
const MAX_NUDGE_ATTEMPTS = 3;
const NUDGE_INTERVAL = 2000; // 2 seconds
const INITIAL_SETTLE_TIME = 5000; // 5 seconds

initPhysics();
initScene();

window.addEventListener('resize', updateSceneSize);
rollBtn.addEventListener('click', throwDice);
nightModeToggle.addEventListener('change', toggleNightMode);

// Add this new event listener for the 'visibilitychange' event
document.addEventListener('visibilitychange', handleVisibilityChange);

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

document.addEventListener('DOMContentLoaded', () => {
    const dice1Checkbox = document.getElementById('dice1-checkbox');
    const dice5Checkbox = document.getElementById('dice5-checkbox');

    function updateCheckboxes(checkedBox, uncheckedBox) {
        checkedBox.checked = true;
        uncheckedBox.checked = false;
    }

    dice1Checkbox.addEventListener('change', () => {
        updateCheckboxes(dice1Checkbox, dice5Checkbox);
    });

    dice5Checkbox.addEventListener('change', () => {
        updateCheckboxes(dice5Checkbox, dice1Checkbox);
    });

    // Add this line to show the mobile shake modal
    showMobileShakeModal();

    // Set the initial state of the night mode toggle
    nightModeToggle.checked = isNightMode;
    applyNightMode();

    // Load settings
    loadSettings();
});

// Function to save settings to local storage
function saveSettings() {
    const settings = {
        dice1: dice1Checkbox.checked,
        dice2: dice2Checkbox.checked,
        dice3: dice3Checkbox.checked,
        dice4: dice4Checkbox.checked,
        dice5: dice5Checkbox.checked,
        nightMode: nightModeToggle.checked
    };
    localStorage.setItem('diceSettings', JSON.stringify(settings));
}

// Function to load settings from local storage
function loadSettings() {
    const savedSettings = localStorage.getItem('diceSettings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        dice1Checkbox.checked = settings.dice1;
        dice2Checkbox.checked = settings.dice2;
        dice3Checkbox.checked = settings.dice3;
        dice4Checkbox.checked = settings.dice4;
        dice5Checkbox.checked = settings.dice5;
        nightModeToggle.checked = settings.nightMode;
        
        // Apply night mode
        isNightMode = settings.nightMode;
        applyNightMode();
    }
    
    // Update dice visibility and position
    updateDiceVisibility();
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
    const diceMesh5 = createTextDiceMesh(diceWords5, '#A0E3E2');

    diceArray.push(createDice(diceMesh1, 0));
    diceArray.push(createDice(diceMesh2, 1));
    diceArray.push(createDice(diceMesh3, 2));
    diceArray.push(createDice(diceMesh4, 3));
    diceArray.push(createDice(diceMesh5, 4));

    diceArray.forEach(dice => addDiceEvents(dice, dice.index));

    updateDiceVisibility();

    render();

    // Add this at the end of the initScene function
    initShakeEvent();
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
                  (index === 2 ? diceWordsMapped3 : 
                  (index === 3 ? diceWordsMapped4 : diceWordsMapped5)));
    diceResults[index] = words[score - 1] || '';
    diceSettled[index] = true;
    updateScoreDisplay();
}

function updateScoreDisplay() {
    const activeResults = [
        dice1Checkbox.checked ? diceResults[0] : '',
        dice5Checkbox.checked ? diceResults[4] : '',
        dice2Checkbox.checked ? diceResults[1] : '',
        dice3Checkbox.checked ? diceResults[2] : '',
        dice4Checkbox.checked ? diceResults[3] : ''
    ].filter(result => result !== '');

    const newScore = activeResults.join(' ');
    if (scoreResult.innerHTML !== newScore) {
        scoreResult.innerHTML = newScore;
        console.log(`Updated score: "${newScore}"`);
    }

    if (diceSettled.every((settled, index) => 
        settled || 
        (index === 0 && !dice1Checkbox.checked) ||
        (index === 1 && !dice2Checkbox.checked) ||
        (index === 2 && !dice3Checkbox.checked) || 
        (index === 3 && !dice4Checkbox.checked) ||
        (index === 4 && !dice5Checkbox.checked)
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
    diceResults = ['', '', '', '', '']; 
    diceSettled = [false, false, false, false, false]; 
    nudgeAttempts = [0, 0, 0, 0, 0]; 

    diceArray.forEach((d, dIdx) => {
        if ((dIdx === 0 && dice1Checkbox.checked) ||
            (dIdx === 1 && dice2Checkbox.checked) ||
            (dIdx === 2 && dice3Checkbox.checked) || 
            (dIdx === 3 && dice4Checkbox.checked) ||
            (dIdx === 4 && dice5Checkbox.checked)) {
            d.body.velocity.setZero();
            d.body.angularVelocity.setZero();

            d.body.position = new CANNON.Vec3(2, dIdx * 0.5 + 3, 0);
            d.mesh.position.copy(d.body.position);

            d.mesh.rotation.set(2 * Math.PI * Math.random(), 0, 2 * Math.PI * Math.random())
            d.body.quaternion.copy(d.mesh.quaternion);

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
            d.mesh.visible = true;
        } else {
            d.body.position.set(0, -100, 0);
            d.mesh.position.copy(d.body.position);
            d.body.velocity.setZero();
            d.body.angularVelocity.setZero();
            d.mesh.visible = false;
            diceSettled[dIdx] = true;
        }
    });

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

function applyNightMode() {
    if (isNightMode) {
        document.documentElement.classList.add('night-mode');
    } else {
        document.documentElement.classList.remove('night-mode');
    }
    
    // Update Three.js scene if necessary
    if (scene) {
        scene.background = isNightMode ? new THREE.Color(0x202030) : null;
    }
    if (window.lights) {
        window.lights.ambientLight.intensity = isNightMode ? 0.3 : 0.5;
        window.lights.topLight.intensity = isNightMode ? 0.4 : 0.5;
    }
}

function toggleNightMode() {
    isNightMode = nightModeToggle.checked;
    localStorage.setItem('nightMode', isNightMode);
    applyNightMode();
}

// In your initialization code
document.addEventListener('DOMContentLoaded', () => {
    // ... other initialization code ...
    
    // Load night mode setting
    isNightMode = localStorage.getItem('nightMode') === 'true';
    nightModeToggle.checked = isNightMode;
    applyNightMode();
    
    // ... rest of your initialization code ...
});

// Modify the createTextDiceMesh function to accept a background color
function createTextDiceMesh(words, backgroundColor) {
    const boxGeometry = createBoxGeometry();
    const materials = words.map(word => {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const context = canvas.getContext('2d');
        context.fillStyle = backgroundColor || '#ffffff';
        context.fillRect(0, 0, 128, 128);

        // Set initial font size and parameters
        let fontSize = 24;
        const maxWidth = 120;
        const lineHeight = 1.2;
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        // Function to wrap text
        function wrapText(context, text, x, y, maxWidth, lineHeight) {
            const words = text.split(' ');
            let line = '';
            const lines = [];

            for (let n = 0; n < words.length; n++) {
                const testLine = line + words[n] + ' ';
                const metrics = context.measureText(testLine);
                const testWidth = metrics.width;
                if (testWidth > maxWidth && n > 0) {
                    lines.push(line);
                    line = words[n] + ' ';
                } else {
                    line = testLine;
                }
            }
            lines.push(line);

            return lines;
        }

        // Reduce font size until text fits
        let lines;
        do {
            context.font = `bold ${fontSize}px Arial`;
            lines = wrapText(context, word, 64, 64, maxWidth, lineHeight);
            fontSize--;
        } while (lines.length * fontSize * lineHeight > 120 && fontSize > 10);

        // Draw the wrapped text
        const totalHeight = lines.length * fontSize * lineHeight;
        let startY = (128 - totalHeight) / 2 + fontSize / 2;

        context.fillStyle = '#000000';
        lines.forEach((line, index) => {
            context.fillText(line.trim(), 64, startY + index * fontSize * lineHeight);
        });
        
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

// Add this new function
function updateDiceVisibility() {
    diceArray.forEach((dice, index) => {
        const isVisible = (index === 0 && dice1Checkbox.checked) ||
                          (index === 1 && dice2Checkbox.checked) ||
                          (index === 2 && dice3Checkbox.checked) ||
                          (index === 3 && dice4Checkbox.checked) ||
                          (index === 4 && dice5Checkbox.checked);
        
        dice.mesh.visible = isVisible;
        if (!isVisible) {
            dice.body.position.set(0, -100, 0); // Move invisible dice out of view
            dice.mesh.position.copy(dice.body.position);
        }
    });
    positionDiceOnFloor();
}

// Modify the positionDiceOnFloor function
function positionDiceOnFloor() {
    const faceRotations = [
        new CANNON.Quaternion(), // Face 1 up
        new CANNON.Quaternion().setFromEuler(0, 0, Math.PI / 2), // Face 2 up
        new CANNON.Quaternion().setFromEuler(-Math.PI / 2, 0, 0), // Face 3 up
        new CANNON.Quaternion().setFromEuler(Math.PI / 2, 0, 0), // Face 4 up
        new CANNON.Quaternion().setFromEuler(0, 0, -Math.PI / 2), // Face 5 up
        new CANNON.Quaternion().setFromEuler(Math.PI, 0, 0) // Face 6 up
    ];

    let visibleDiceCount = 0;

    diceArray.forEach((dice, index) => {
        const isVisible = (index === 0 && dice1Checkbox.checked) ||
                          (index === 1 && dice2Checkbox.checked) ||
                          (index === 2 && dice3Checkbox.checked) ||
                          (index === 3 && dice4Checkbox.checked) ||
                          (index === 4 && dice5Checkbox.checked);
        
        dice.mesh.visible = isVisible;
        
        if (isVisible) {
            const x = (visibleDiceCount - 2) * 1.2; // Spread visible dice horizontally
            const y = -6.5; // Position just above the floor
            const z = 0;

            dice.body.position.set(x, y, z);
            
            // Choose a random face to be up
            const randomFace = Math.floor(Math.random() * 6);
            dice.body.quaternion.copy(faceRotations[randomFace]);

            dice.body.velocity.set(0, 0, 0);
            dice.body.angularVelocity.set(0, 0, 0);

            dice.mesh.position.copy(dice.body.position);
            dice.mesh.quaternion.copy(dice.body.quaternion);

            visibleDiceCount++;
        } else {
            dice.body.position.set(0, -100, 0); // Move invisible dice out of view
            dice.mesh.position.copy(dice.body.position);
        }
    });

    // Update the score display
    diceArray.forEach((dice, index) => {
        if (dice.mesh.visible) {
            const score = getDiceScore(dice.body);
            if (score !== null) {
                setDiceResult(score, index);
            }
        } else {
            diceResults[index] = '';
            diceSettled[index] = true;
        }
    });

    updateScoreDisplay();
}

// Add this new function
function initShakeEvent() {
    myShakeEvent = new Shake({
        threshold: 15,
        timeout: 1000
    });

    myShakeEvent.start();

    window.addEventListener('shake', shakeEventDidOccur, false);
}

// Add this new function
function shakeEventDidOccur() {
    throwDice();
}

// Add this new function to handle visibility changes
function handleVisibilityChange() {
    if (document.hidden) {
        myShakeEvent.stop();
    } else {
        myShakeEvent.start();
    }
}

// Add this function to check if the device is mobile
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Add this function to show the mobile shake modal
function showMobileShakeModal() {
    if (isMobileDevice() && !localStorage.getItem('shakeModalShown')) {
        mobileShakeModal.style.display = 'block';
    }
}

// Add this event listener for the "Got it" button
gotItBtn.addEventListener('click', () => {
    mobileShakeModal.style.display = 'none';
    localStorage.setItem('shakeModalShown', 'true');
});

// Add event listener for the close modal button
closeModalBtn.addEventListener('click', () => {
    saveSettings();
    modal.style.display = "none";
    updateDiceVisibility();
});

// Modify the event listeners for checkbox changes
[dice1Checkbox, dice2Checkbox, dice3Checkbox, dice4Checkbox, dice5Checkbox].forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox === dice1Checkbox || checkbox === dice5Checkbox) {
            // Ensure only one of dice1 and dice5 is checked
            if (checkbox.checked) {
                if (checkbox === dice1Checkbox) {
                    dice5Checkbox.checked = false;
                } else {
                    dice1Checkbox.checked = false;
                }
            } else {
                // If unchecking, ensure at least one is checked
                if (checkbox === dice1Checkbox) {
                    dice5Checkbox.checked = true;
                } else {
                    dice1Checkbox.checked = true;
                }
            }
        }
        saveSettings();
        updateDiceVisibility();
    });
});