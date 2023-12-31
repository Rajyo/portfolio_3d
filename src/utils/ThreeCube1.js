import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "../index.css";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import moon1 from "../assets/pexels-pixabay-87611.jpg";
import moon2 from "../assets/315347.jpg";
import space2 from "../assets/yellow_wave_abstract-1280x800.jpg";
//import space2 from "../assets/pexels-snapwire-37728.jpg";


const ThreeCube1 = () => {
 const cubeRef = useRef(null);
 
 useEffect(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({alpha:true});
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
  // const normalTexture = new THREE.TextureLoader().load(`${normal}`);
  const torus = new THREE.Mesh(
    new THREE.SphereGeometry(7, 62, 32),
    new THREE.MeshStandardMaterial({
      map: moonTexture,
      // normalMap: normalTexture
      // lightMap: normalTexture,
    }),
  )
  torus.position.set(9,0,0)
  scene.add(torus);

  const moonTexture1 = new THREE.TextureLoader().load(`${moon2}`);
  const torus1 = new THREE.Mesh(
    new THREE.TorusKnotGeometry( 5, 0.5, 70, 10, 15, 0.1),    
    new THREE.MeshStandardMaterial({ map: moonTexture1,} ),
  )
  torus1.position.set(9.2,0,0)
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

  // const spaceTexture = new THREE.TextureLoader().load(`${space2}`);
  // scene.background = spaceTexture;
  
  
  function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x -= 0.01;
    torus.rotation.y -= 0.005;
    torus.rotation.z -= 0.01;
    torus1.rotation.z -= 0.01;
    controls.update();
    render()
  }

  function render(){
    renderer.render(scene, camera);
  }

  animate();

});
 
 return (
  <>
    <div
      className="three relative"
      ref={cubeRef}
    ></div>
  </>
);
}; 
export default React.memo(ThreeCube1);

