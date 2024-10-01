import * as CANNON from 'https://cdn.skypack.dev/cannon-es';

import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { TextureLoader } from 'three';

const canvasEl = document.querySelector('#canvas');
const scoreResult = document.querySelector('#score-result');
const rollBtn = document.querySelector('#roll-btn');

let renderer, scene, camera, diceMesh, physicsWorld;
const textureLoader = new TextureLoader();

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

const diceWords1 = ['cowgirl', '69', 'eat out', 'legs in air', 'blow job', 'doggy'];
const diceWords2 = ['counter', 'bed', 'kitchen', 'shower', 'couch', 'floor'];

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
    numberOfDice: 2,
    segments: 40,
    edgeRadius: .07,
    notchRadius: .12,
    notchDepth: .1,
};

const diceArray = [];

initPhysics();
initScene();

window.addEventListener('resize', updateSceneSize);
window.addEventListener('dblclick', throwDice);
rollBtn.addEventListener('click', throwDice);

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
    
    createFloor();
    const diceMesh1 = createDiceMesh(diceTextures1);
    const diceMesh2 = createDiceMesh(diceTextures2);

    diceArray.push(createDice(diceMesh1, 0));
    diceArray.push(createDice(diceMesh2, 1));

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
        sleepTimeLimit: .1
    });
    physicsWorld.addBody(body);

    return {mesh, body, index};
}

function addDiceEvents(dice, diceIndex) {
    dice.body.addEventListener('sleep', (e) => {
        dice.body.allowSleep = false;

        const euler = new CANNON.Vec3();
        e.target.quaternion.toEuler(euler);

        const eps = .1;
        let isZero = (angle) => Math.abs(angle) < eps;
        let isHalfPi = (angle) => Math.abs(angle - .5 * Math.PI) < eps;
        let isMinusHalfPi = (angle) => Math.abs(.5 * Math.PI + angle) < eps;
        let isPiOrMinusPi = (angle) => (Math.abs(Math.PI - angle) < eps || Math.abs(Math.PI + angle) < eps);

        let score;

        if (isZero(euler.z)) {
            if (isZero(euler.x)) {
                score = 1;
            } else if (isHalfPi(euler.x)) {
                score = 4;
            } else if (isMinusHalfPi(euler.x)) {
                score = 3;
            } else if (isPiOrMinusPi(euler.x)) {
                score = 6;
            } else {
                // landed on edge => wait to fall on side and fire the event again
                dice.body.allowSleep = true;
                return;
            }
        } else if (isHalfPi(euler.z)) {
            score = 2;
        } else if (isMinusHalfPi(euler.z)) {
            score = 5;
        } else {
            // landed on edge => wait to fall on side and fire the event again
            dice.body.allowSleep = true;
            return;
        }

        showRollResults(score, diceIndex);
    });
}

function showRollResults(score, diceIndex) {
    const words = diceIndex === 0 ? diceWords1 : diceWords2;
    const result = words[score - 1];

    if (scoreResult.innerHTML === '') {
        scoreResult.innerHTML = result;
    } else {
        scoreResult.innerHTML += ' + ' + result;
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

    diceArray.forEach((d, dIdx) => {
        d.body.velocity.setZero();
        d.body.angularVelocity.setZero();

        // Adjust the starting position of the dice
        d.body.position = new CANNON.Vec3(2, dIdx * 0.5 + 3, 0);
        d.mesh.position.copy(d.body.position);

        d.mesh.rotation.set(2 * Math.PI * Math.random(), 0, 2 * Math.PI * Math.random())
        d.body.quaternion.copy(d.mesh.quaternion);

        // Adjust the force applied to the dice
        const force = 3 + 3 * Math.random(); // Increased base force and randomness
        const upwardForce = 2 + 2 * Math.random(); // Add an upward component
        d.body.applyImpulse(
            new CANNON.Vec3(-force, upwardForce, Math.random() - 0.5), // Add some random z-direction force
            new CANNON.Vec3(0, 0, .02)
        );

        // Add some random torque for more interesting spins
        const torque = new CANNON.Vec3(
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
        );
        d.body.torque.set(torque.x, torque.y, torque.z);

        d.body.allowSleep = true;
    });
}

// Add this function to your render loop or call it after scene initialization
function checkDiceMaterials() {
    diceArray.forEach((dice, index) => {
        console.log(`Dice ${index + 1} materials:`, dice.mesh.material);
    });
}

// Call this function after your dice are created
checkDiceMaterials();