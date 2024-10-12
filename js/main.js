import * as CANNON from 'cannon-es';

import { 
    WebGLRenderer, 
    PerspectiveCamera, 
    Scene, 
    AmbientLight, 
    PointLight, 
    Mesh, 
    PlaneGeometry, 
    ShadowMaterial, 
    Vector3, 
    BoxGeometry, 
    MeshStandardMaterial, 
    CanvasTexture,
    Color,
    TextureLoader,
    DoubleSide
} from 'three';

const config = {
    diceCount: 6,
    checkboxes: Array.from({ length: 6 }, (_, i) => document.querySelector(`#dice${i+1}-checkbox`)),
    elements: {
        canvas: document.querySelector('#canvas'),
        scoreResult: document.querySelector('#score-result'),
        rollBtn: document.querySelector('#roll-btn'),
        nightModeToggle: document.querySelector('#night-mode-toggle'),
        timerContainer: document.querySelector('.timer-container'),
        timerDisplay: document.querySelector('.timer-display'),
        startTimerBtn: document.querySelector('#start-timer-btn'),
        resetTimerBtn: document.querySelector('#reset-timer-btn'),
        mobileShakeModal: document.getElementById('mobile-shake-modal'),
        gotItBtn: document.getElementById('got-it-btn'),
        muteBtn: document.getElementById('mute-btn'),
        settingsModal: document.getElementById('settings-modal'),
        settingsBtn: document.getElementById('settings-btn'),
        closeModalBtn: document.getElementById('close-modal'),
    },
    params: {
        numberOfDice: 6,
        segments: 40,
        edgeRadius: .07,
        notchRadius: .12,
        notchDepth: .1,
    },
    physics: {
        nudgeInterval: 2000,
        initialSettleTime: 5000,
        maxNudgeAttempts: 3,
    },
    state: {
        isNightMode: localStorage.getItem('nightMode') === 'true',
        isMuted: localStorage.getItem('isMuted') === 'true',
        diceResults: Array(6).fill(''),
        diceSettled: Array(6).fill(false),
        nudgeAttempts: Array(6).fill(0),
        isTimerRunning: false,
    }
};

let renderer, scene, camera, physicsWorld;
const textureLoader = new TextureLoader();

let nudgeTimeout;

let myShakeEvent;

let timerInterval;
let timerDuration;
let remainingTime;
let doneSound;

//Cowgirl, Reverse Cowgirl, Spooning
const coupleActivityWords = ['Cowgirl', '69', 'Eat her out', 'Missionary', 'Blowjob', 'Doggy'];
const activityDiceTextures = [
    'img/dice1_69.svg',
    'img/dice1_bj.svg',
    'img/dice1_cowgirl.svg',
    'img/dice1_doggy.svg',
    'img/dice1_eatout.svg',
    'img/dice1_legsinair.svg',
].map(loadTexture);

const locationWords = ['on a counter', 'in bed', 'in the kitchen', 'in the bathroom', 'on a couch', 'on the floor'];
const locationDiceTextures = [
    'img/dice2_bed.svg',
    'img/dice2_couch.svg',
    'img/dice2_counter.svg',
    'img/dice2_floor.svg',
    'img/dice2_kitchen.svg',
    'img/dice2_shower.svg',
].map(loadTexture);

const intensityWords = ['slowly', 'quickly', 'gently', 'roughly', 'teasingly', 'intensely'];
const intensityPhrases = ['gently', 'slowly', 'teasingly', 'intensely', 'quickly', 'roughly'];

const durationWords = ['30 secs', '60 secs', '90 secs', '30 secs', '60 secs', '90 secs'];
const durationPhrases = ['for 90 seconds', 'for 30 seconds', 'for 60 seconds', 'for 90 seconds', 'for 60 seconds', 'for 30 seconds'];

const femaleActivityWords = ['Oral', 'Finger Clit', 'G-Spot', 'Butt play', 'Breast play', 'Spanking'];
const femaleActivityPhrases = ['Finger her g-spot', 'Eat her out', 'Play with her breasts', 'Spank her', 'Play with her clit', 'Play with her butt'];

const maleActivityWords = ['Hand Job', 'Blow Job', 'Ball Play', 'Spanking', 'Erotic Massage', 'Tease'];
const maleActivityPhrases = ['Play with his balls', 'Give him a hand job', 'Give him an erotic massage', 'Sexually tease him', 'Blow him', 'Spank him'];

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
            // Check if colorSpace exists, otherwise fall back to encoding
            if (texture.colorSpace !== undefined) {
                texture.colorSpace = 'srgb';
            } else if (texture.encoding !== undefined) {
                texture.encoding = 3001; // THREE.sRGBEncoding
            }
        },
        undefined,
        (err) => {
            console.error(`Error loading texture ${index + 1}:`, err);
        }
    );
}

let diceArray = [];

initPhysics();
initScene();

window.addEventListener('resize', updateSceneSize);

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

    // Add event listeners for rollBtn and nightModeToggle
    config.elements.rollBtn.addEventListener('click', throwDice);
    config.elements.nightModeToggle.addEventListener('change', toggleNightMode);

    // Set the initial state of the night mode toggle
    config.elements.nightModeToggle.checked = config.state.isNightMode;
    applyNightMode();

    // Load settings
    loadSettings();

    // Initialize the timer button
    config.elements.startTimerBtn.addEventListener('click', toggleTimer);
    config.elements.resetTimerBtn.addEventListener('click', resetTimer);

    // Initialize the timer buttons
    initializeTimerButtons();

    // Load the done sound
    doneSound = new Audio('sounds/done.mp3');

    // Initialize the mute button
    initializeMuteButton();
});

// Function to save settings to local storage
function saveSettings() {
    const settings = {
        dice1: config.checkboxes[0].checked,
        dice2: config.checkboxes[1].checked,
        dice3: config.checkboxes[2].checked,
        dice4: config.checkboxes[3].checked,
        dice5: config.checkboxes[4].checked,
        dice6: config.checkboxes[5].checked,
        nightMode: config.elements.nightModeToggle.checked
    };
    localStorage.setItem('diceSettings', JSON.stringify(settings));
}

// Function to load settings from local storage
function loadSettings() {
    const savedSettings = localStorage.getItem('diceSettings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        config.checkboxes[0].checked = settings.dice1;
        config.checkboxes[1].checked = settings.dice2;
        config.checkboxes[2].checked = settings.dice3;
        config.checkboxes[3].checked = settings.dice4;
        config.checkboxes[4].checked = settings.dice5;
        config.checkboxes[5].checked = settings.dice6;
        config.elements.nightModeToggle.checked = settings.nightMode;
        
        // Apply night mode
        config.state.isNightMode = settings.nightMode;
        applyNightMode();
    }
    
    // Hide the timer container when loading settings
    config.elements.timerContainer.style.display = 'none';
    
    updateDiceVisibility();
}

function createDiceMeshes() {
    return [
        createDiceMesh(activityDiceTextures),
        createDiceMesh(locationDiceTextures),
        createTextDiceMesh(intensityWords, '#B4A6AB'),
        createTextDiceMesh(durationWords, '#E3E2A0'),
        createTextDiceMesh(femaleActivityWords, '#A0E3E2'),
        createTextDiceMesh(maleActivityWords, '#A0E3C2')
    ];
}

function initScene() {

    renderer = new WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: config.elements.canvas
    });
    renderer.shadowMap.enabled = true
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    scene = new Scene();

    camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 300)
    camera.position.set(0, 10, 5);
    camera.lookAt(new Vector3(0, 0, 0));

    updateSceneSize();

    const ambientLight = new AmbientLight(0xffffff, .5);
    scene.add(ambientLight);
    const topLight = new PointLight(0xffffff, .5);
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
    const diceMeshes = createDiceMeshes();
    diceArray = diceMeshes.map((mesh, index) => createDice(mesh, index));
    diceArray.forEach(dice => addDiceEvents(dice, dice.index));

    updateDiceVisibility();

    render();

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
    const floor = new Mesh(
        new PlaneGeometry(1000, 1000),
        new ShadowMaterial({
            opacity: .1
        })
    )
    floor.receiveShadow = true;
    floor.position.y = -7;
    floor.quaternion.setFromAxisAngle(new Vector3(-1, 0, 0), Math.PI * .5);
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
        return new MeshStandardMaterial({ 
            map: texture,
            transparent: true,
            side: DoubleSide,
            color: 0xffffff,
        });
    });
    
    const diceMesh = new Mesh(boxGeometry, materials);
    diceMesh.castShadow = true;
    
    return diceMesh;
}

function createBoxGeometry() {
    let boxGeometry = new BoxGeometry(1, 1, 1, config.params.segments, config.params.segments, config.params.segments);

    const positionAttr = boxGeometry.attributes.position;
    const subCubeHalfSize = .5 - config.params.edgeRadius;

    for (let i = 0; i < positionAttr.count; i++) {
        let position = new Vector3().fromBufferAttribute(positionAttr, i);

        const subCube = new Vector3(Math.sign(position.x), Math.sign(position.y), Math.sign(position.z)).multiplyScalar(subCubeHalfSize);
        const addition = new Vector3().subVectors(position, subCube);

        if (Math.abs(position.x) > subCubeHalfSize && Math.abs(position.y) > subCubeHalfSize && Math.abs(position.z) > subCubeHalfSize) {
            addition.normalize().multiplyScalar(config.params.edgeRadius);
            position = subCube.add(addition);
        } else if (Math.abs(position.x) > subCubeHalfSize && Math.abs(position.y) > subCubeHalfSize) {
            addition.z = 0;
            addition.normalize().multiplyScalar(config.params.edgeRadius);
            position.x = subCube.x + addition.x;
            position.y = subCube.y + addition.y;
        } else if (Math.abs(position.x) > subCubeHalfSize && Math.abs(position.z) > subCubeHalfSize) {
            addition.y = 0;
            addition.normalize().multiplyScalar(config.params.edgeRadius);
            position.x = subCube.x + addition.x;
            position.z = subCube.z + addition.z;
        } else if (Math.abs(position.y) > subCubeHalfSize && Math.abs(position.z) > subCubeHalfSize) {
            addition.x = 0;
            addition.normalize().multiplyScalar(config.params.edgeRadius);
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
        if (!config.state.diceSettled[index]) {
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
    const words = index === 0 ? coupleActivityWords : 
                  (index === 1 ? locationWords : 
                  (index === 2 ? intensityPhrases : 
                  (index === 3 ? durationPhrases : 
                  (index === 4 ? femaleActivityPhrases : maleActivityPhrases))));
    config.state.diceResults[index] = words[score - 1] || '';
    config.state.diceSettled[index] = true;
    updateScoreDisplay();

    // Check if the timer dice is active and set
    if (index === 3 && config.checkboxes[3].checked) {
        const timerValue = durationPhrases[score - 1];
        const match = timerValue.match(/\d+/);
        timerDuration = match ? parseInt(match[0]) : 30;
        remainingTime = timerDuration;
        config.elements.timerContainer.style.display = 'block';
        updateTimerDisplay(remainingTime);
        updateTimerProgress(remainingTime, timerDuration);
        config.elements.startTimerBtn.disabled = false;
        config.elements.resetTimerBtn.disabled = true;
    }
}

function updateScoreDisplay() {
    const activeResults = [
        config.checkboxes[0].checked ? config.state.diceResults[0] : '',
        config.checkboxes[4].checked ? config.state.diceResults[4] : '',
        config.checkboxes[5].checked ? config.state.diceResults[5] : '',
        config.checkboxes[1].checked ? config.state.diceResults[1] : '',
        config.checkboxes[2].checked ? config.state.diceResults[2] : '',
        config.checkboxes[3].checked ? config.state.diceResults[3] : '',
    ].filter(result => result !== '');

    const newScore = activeResults.join(' ');
    if (config.elements.scoreResult.innerHTML !== newScore) {
        config.elements.scoreResult.innerHTML = newScore;
        console.log(`Updated score: "${newScore}"`);
    }

    const allSettled = config.state.diceSettled.every((settled, index) => settled || !config.checkboxes[index].checked);
    if (allSettled) {
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

function resetDice(dice, index) {
    if (config.checkboxes[index].checked) {
        dice.body.velocity.setZero();
        dice.body.angularVelocity.setZero();
        dice.body.position = new CANNON.Vec3(2, index * 0.5 + 3, 0);
        dice.mesh.position.copy(dice.body.position);
        dice.mesh.rotation.set(2 * Math.PI * Math.random(), 0, 2 * Math.PI * Math.random());
        dice.body.quaternion.copy(dice.mesh.quaternion);

        const force = 3 + 2 * Math.random();
        const upwardForce = 2 + Math.random();
        dice.body.applyImpulse(
            new CANNON.Vec3(-force, upwardForce, (Math.random() - 0.5) * 0.5),
            new CANNON.Vec3(0, 0, .02)
        );

        const torque = new CANNON.Vec3(
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 1.5
        );
        dice.body.torque.set(torque.x, torque.y, torque.z);

        dice.body.allowSleep = true;
        dice.mesh.visible = true;
    } else {
        dice.body.position.set(0, -100, 0);
        dice.mesh.position.copy(dice.body.position);
        dice.body.velocity.setZero();
        dice.body.angularVelocity.setZero();
        dice.mesh.visible = false;
        config.state.diceSettled[index] = true;
    }
}

function throwDice() {
    config.elements.scoreResult.innerHTML = '';
    config.state.diceResults.fill('');
    config.state.diceSettled.fill(false);
    config.state.nudgeAttempts.fill(0);

    // Reset timer state
    clearInterval(timerInterval);
    config.state.isTimerRunning = false;
    config.elements.startTimerBtn.innerHTML = '<i class="fas fa-play"></i>';
    config.elements.startTimerBtn.setAttribute('aria-label', 'Start');
    config.elements.startTimerBtn.disabled = false;
    config.elements.resetTimerBtn.disabled = true;

    diceArray.forEach(resetDice);

    if (nudgeTimeout) {
        clearTimeout(nudgeTimeout);
    }
    nudgeTimeout = setTimeout(() => checkDiceSettled(), config.physics.initialSettleTime);

    // Reset and hide the timer
    clearInterval(timerInterval);
    config.elements.timerContainer.style.display = 'none';
    config.elements.startTimerBtn.disabled = false;
}

function checkDiceSettled() {
    diceArray.forEach((dice, index) => {
        if (!config.state.diceSettled[index]) {
            if (config.state.nudgeAttempts[index] < config.physics.maxNudgeAttempts) {
                console.log(`Nudging dice ${index + 1}. Attempt: ${config.state.nudgeAttempts[index] + 1}`);
                nudgeDice(dice);
                config.state.nudgeAttempts[index]++;
                setTimeout(() => checkSingleDice(index), config.physics.nudgeInterval);
            } else {
                console.log(`Forcing result for dice ${index + 1}`);
                forceSettleDice(dice, index);
            }
        }
    });
}

function checkSingleDice(index) {
    if (!config.state.diceSettled[index]) {
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

function applyNightMode() {
    if (config.state.isNightMode) {
        document.documentElement.classList.add('night-mode');
    } else {
        document.documentElement.classList.remove('night-mode');
    }
    
    if (scene) {
        scene.background = config.state.isNightMode ? new Color(0x202030) : null;
    }
    if (window.lights) {
        window.lights.ambientLight.intensity = config.state.isNightMode ? 0.3 : 0.5;
        window.lights.topLight.intensity = config.state.isNightMode ? 0.4 : 0.5;
    }
}

function toggleNightMode() {
    config.state.isNightMode = config.elements.nightModeToggle.checked;
    localStorage.setItem('nightMode', config.state.isNightMode);
    applyNightMode();
}

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
        
        const texture = new CanvasTexture(canvas);
        return new MeshStandardMaterial({ 
            map: texture,
            transparent: true,
            side: DoubleSide,
        });
    });
    
    const diceMesh = new Mesh(boxGeometry, materials);
    diceMesh.castShadow = true;
    
    return diceMesh;
}

function updateDiceVisibility() {
    diceArray.forEach((dice, index) => {
        const isVisible = config.checkboxes[index].checked;
        dice.mesh.visible = isVisible;
        dice.body.position.set(isVisible ? dice.body.position.x : 0, isVisible ? dice.body.position.y : -100, isVisible ? dice.body.position.z : 0);
        dice.mesh.position.copy(dice.body.position);
    });

    config.elements.timerContainer.style.display = config.checkboxes[3].checked ? 'block' : 'none';

    positionDiceOnFloor();
}

function positionDiceOnFloor() {
    const faceRotations = [
        new CANNON.Quaternion(),
        new CANNON.Quaternion().setFromEuler(0, 0, Math.PI / 2),
        new CANNON.Quaternion().setFromEuler(-Math.PI / 2, 0, 0),
        new CANNON.Quaternion().setFromEuler(Math.PI / 2, 0, 0),
        new CANNON.Quaternion().setFromEuler(0, 0, -Math.PI / 2),
        new CANNON.Quaternion().setFromEuler(Math.PI, 0, 0)
    ];

    let visibleDiceCount = 0;

    diceArray.forEach((dice, index) => {
        if (dice.mesh.visible) {
            const x = (visibleDiceCount - 2) * 1.2;
            const y = -6.5;
            const z = 0;

            dice.body.position.set(x, y, z);
            dice.body.quaternion.copy(faceRotations[Math.floor(Math.random() * 6)]);
            dice.body.velocity.set(0, 0, 0);
            dice.body.angularVelocity.set(0, 0, 0);

            dice.mesh.position.copy(dice.body.position);
            dice.mesh.quaternion.copy(dice.body.quaternion);

            visibleDiceCount++;
        }

        const score = dice.mesh.visible ? getDiceScore(dice.body) : null;
        config.state.diceResults[index] = score !== null ? getDiceWord(index, score) : '';
        config.state.diceSettled[index] = !dice.mesh.visible || score !== null;
    });

    updateScoreDisplay();
}

function getDiceWord(diceIndex, score) {
    const words = [coupleActivityWords, locationWords, intensityPhrases, durationPhrases, femaleActivityPhrases, maleActivityPhrases][diceIndex];
    return words[score - 1] || '';
}

function initShakeEvent() {
    myShakeEvent = new Shake({
        threshold: 15,
        timeout: 1000
    });

    myShakeEvent.start();

    window.addEventListener('shake', shakeEventDidOccur, false);
}

function shakeEventDidOccur() {
    throwDice();
}

function handleVisibilityChange() {
    if (document.hidden) {
        myShakeEvent.stop();
    } else {
        myShakeEvent.start();
    }
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function showMobileShakeModal() {
    if (isMobileDevice() && !localStorage.getItem('shakeModalShown')) {
        config.elements.mobileShakeModal.style.display = 'block';
    }
}

config.elements.gotItBtn.addEventListener('click', () => {
    config.elements.mobileShakeModal.style.display = 'none';
    localStorage.setItem('shakeModalShown', 'true');
});

config.elements.closeModalBtn.addEventListener('click', () => {
    saveSettings();
    config.elements.settingsModal.style.display = "none";
    updateDiceVisibility();
});

config.checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        if ([0, 4, 5].includes(index)) {
            [0, 4, 5].forEach(i => {
                if (i !== index) config.checkboxes[i].checked = false;
            });
            if (!checkbox.checked && ![0, 4, 5].some(i => config.checkboxes[i].checked)) {
                checkbox.checked = true;
            }
        }
        saveSettings();
        updateDiceVisibility();
    });
});

function toggleTimer() {
    if (!config.state.isTimerRunning) {
        if (remainingTime === undefined) {
            remainingTime = timerDuration;
        }
        startTimer();
    } else {
        pauseTimer();
    }
}

function startTimer() {
    config.state.isTimerRunning = true;
    config.elements.startTimerBtn.innerHTML = '<i class="fas fa-pause"></i>';
    config.elements.startTimerBtn.setAttribute('aria-label', 'Pause');
    config.elements.resetTimerBtn.disabled = false;

    timerInterval = setInterval(() => {
        remainingTime--;
        updateTimerDisplay(remainingTime);
        updateTimerProgress(remainingTime, timerDuration);
        
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            config.state.isTimerRunning = false;
            config.elements.startTimerBtn.innerHTML = '<i class="fas fa-play"></i>';
            config.elements.startTimerBtn.setAttribute('aria-label', 'Start');
            config.elements.startTimerBtn.disabled = true;
            
            // Play the done sound only if not muted
            if (!config.state.isMuted) {
                doneSound.play().catch(error => console.error('Error playing sound:', error));
            }
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    config.state.isTimerRunning = false;
    config.elements.startTimerBtn.innerHTML = '<i class="fas fa-play"></i>';
    config.elements.startTimerBtn.setAttribute('aria-label', 'Resume');
}

function resetTimer() {
    clearInterval(timerInterval);
    config.state.isTimerRunning = false;
    remainingTime = timerDuration;
    updateTimerDisplay(remainingTime);
    updateTimerProgress(remainingTime, timerDuration);
    config.elements.startTimerBtn.innerHTML = '<i class="fas fa-play"></i>';
    config.elements.startTimerBtn.setAttribute('aria-label', 'Start');
    config.elements.startTimerBtn.disabled = false;
    config.elements.resetTimerBtn.disabled = true;
}

function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    config.elements.timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateTimerProgress(remaining, total) {
    const progress = (remaining / total) * 100;
    const timerProgress = document.querySelector('.timer-progress');
    requestAnimationFrame(() => {
        timerProgress.style.transform = `translateX(${progress - 100}%)`;
    });
}

function initializeTimerButtons() {
    config.elements.startTimerBtn.innerHTML = '<i class="fas fa-play"></i>';
    config.elements.startTimerBtn.setAttribute('aria-label', 'Start');
    config.elements.resetTimerBtn.innerHTML = '<i class="fas fa-redo"></i>';
    config.elements.resetTimerBtn.setAttribute('aria-label', 'Reset');
}

function initializeMuteButton() {
    config.elements.muteBtn.addEventListener('click', toggleMute);
    config.state.isMuted = localStorage.getItem('isMuted') === 'true';
    updateMuteButtonIcon();
}

function toggleMute() {
    config.state.isMuted = !config.state.isMuted;
    localStorage.setItem('isMuted', config.state.isMuted);
    updateMuteButtonIcon();
}

function updateMuteButtonIcon() {
    config.elements.muteBtn.innerHTML = config.state.isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
    config.elements.muteBtn.setAttribute('aria-label', config.state.isMuted ? 'Unmute' : 'Mute');
}