import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "../index.css";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import moon1 from "../assets/pexels-pixabay-87611.jpg";
import normal from "../assets/normal.jpg";
import space2 from "../assets/yellow_wave_abstract-1280x800.jpg";
import moon2 from "../assets/315347.jpg";


const ThreeCube = () => {
 const cubeRef = useRef(null);
 
 useEffect(() => {
  console.log("ThreeCube1")
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  cubeRef.current.appendChild(renderer.domElement);
  camera.position.setZ(30);
  
  const moonTexture = new THREE.TextureLoader().load(`${moon1}`);
  // const normalTexture = new THREE.TextureLoader().load(`${normal}`);
  const torus = new THREE.Mesh(
    new THREE.SphereGeometry(7, 62, 32),
    new THREE.MeshStandardMaterial({
      map: moonTexture,
      // normalMap: normalTexture
      // lightMap: normalTexture,
    }),
  )
  torus.position.set(10,0,0)
  scene.add(torus);

  const moonTexture1 = new THREE.TextureLoader().load(`${moon2}`);
  const torus1 = new THREE.Mesh(
    new THREE.TorusKnotGeometry( 5, 0.5, 70, 10, 15, 0.1),    
    new THREE.MeshStandardMaterial({ map: moonTexture1,} ),
  )
  torus1.position.set(10,0,0)
  scene.add(torus1);
  
  const pointLight = new THREE.PointLight(0xF2B90D);
  pointLight.position.set(5, 5, 5);
  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(pointLight, ambientLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true
  controls.dampingFactor = 0.05 
  controls.enableZoom = true
  controls.enabled = true

  const spaceTexture = new THREE.TextureLoader().load(`${space2}`);
  scene.background = spaceTexture;
  
  
  function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x -= 0.01;
    torus.rotation.y -= 0.005;
    torus.rotation.z -= 0.01;
    torus1.rotation.z -= 0.01;
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

});
 
 return (
  <>
    <div
      className="three"
      ref={cubeRef}
      style={{ position:"absolute",}}
    ></div>
  </>
);
}; 
export default ThreeCube;

