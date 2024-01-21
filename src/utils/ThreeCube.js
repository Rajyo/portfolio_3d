import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "../index.css";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import moon2 from "../assets/moon2.png";
import moon1 from "../assets/moon.jpg";
import normal from "../assets/normal.jpg";
import normal3 from "../assets/R.jpg";
import normal4 from "../assets/pexels-frank-cone-3607542.jpg";


const ThreeCube = () => {
 const cubeRef = useRef(null);

 useEffect(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  cubeRef.current.appendChild(renderer.domElement);
  camera.position.setZ(30);

  window.addEventListener('resize', onWindowResize, false)
  function onWindowResize(){
    camera.aspect = window.innerWidth/window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
  }
  
  const moonTexture = new THREE.TextureLoader().load(`${moon1}`);
  const normalTexture = new THREE.TextureLoader().load(`${normal}`);
  const torus = new THREE.Mesh(
    new THREE.SphereGeometry(7, 62, 32),
    new THREE.MeshStandardMaterial({
      map: moonTexture,
      // normalMap: normalTexture
      lightMap: normalTexture,
      lightMapIntensity: 0.75
    }),
  )
  torus.position.set(9,0,0)
  scene.add(torus);
  
  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(5, 5, 15);
  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(pointLight, ambientLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true
  controls.dampingFactor = 0.05 
  controls.enableZoom = true
  controls.enabled = true
  
  
  function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;
    controls.update();
    render();
  }
  function render(){
    renderer.render(scene, camera);
  }

  animate();
});
 
 return (
  <>
    <div
      className="three sm:relative"
      ref={cubeRef}
    ></div>
  </>
);
}; 
export default ThreeCube;

