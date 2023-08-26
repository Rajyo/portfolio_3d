import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "../index.css";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import moon1 from "../assets/pexels-pixabay-87611.jpg";


const ThreeCube2 = () => {
 const cubeRef1 = useRef(null);
 
 useEffect(() => {
  console.log("ThreeCube2")
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 600 / 500, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(600, 500);
  cubeRef1.current.appendChild(renderer.domElement);
  camera.position.setZ(30);
  
  const torus = new THREE.Mesh(
    new THREE.TorusKnotGeometry( 8, 0.5, 70, 10, 15, 1),    
    new THREE.MeshStandardMaterial({ color: 0xffff00, wireframe:true } ),
  )
  torus.position.set(0,0,0)
  scene.add(torus);
  
  const pointLight = new THREE.PointLight(0xF2B90D);
  pointLight.position.set(5, 5, 15);
  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(pointLight, ambientLight);

  const spaceTexture = new THREE.TextureLoader().load({background:"white"});
  scene.background = spaceTexture;

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true
  controls.dampingFactor = 0.05 
  controls.enableZoom = true
  controls.enabled = true
  
  
  function animate() {
    requestAnimationFrame(animate);
//    torus.rotation.x += 0.01;
  //  torus.rotation.y += 0.005;
     torus.rotation.z -= 0.01;
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

});
 
 return (
  <>
    <div
      className="three"
      ref={cubeRef1}
      style={{ position:"absolute"}}
    ></div>
  </>
);
}; 
export default React.memo(ThreeCube2);

