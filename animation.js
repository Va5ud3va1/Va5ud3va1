 animation.js

 Set up scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth  window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(200, 200);  Set size of the renderer
document.getElementById('profile-icon').appendChild(renderer.domElement);

 Load 3D model
const loader = new THREE.GLTFLoader();
loader.load('fortnite_character.glb', function (gltf) {
  const model = gltf.scene;
  scene.add(model);

   Center model
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  model.position.sub(center);
});

camera.position.z = 5;

 Animation function
function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();
