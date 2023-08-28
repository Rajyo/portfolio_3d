import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "../index.css";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import moon2 from "../assets/moon2.png";
import moon1 from "../assets/moon.jpg";
import normal from "../assets/normal.jpg";
import normal1 from "../assets/1pexels-adrien-olichon-2538107.jpg";
import normal3 from "../assets/R.jpg";


const ThreeCube = () => {
 const cubeRef = useRef(null);

 useEffect(() => {
  console.log("ThreeCube")
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  cubeRef.current.appendChild(renderer.domElement);
  camera.position.setZ(30);
  
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
  torus.position.set(10,0,0)
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

  const spaceTexture = new THREE.TextureLoader().load(`${normal3}`);
  scene.background = spaceTexture;
  
  
  function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;
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
      style={{ position:"absolute"}}
    ></div>
  </>
);
}; 
export default ThreeCube;


// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import "./index.css";
 
// const ThreeCube = () => {
//  const cubeRef = useRef(null);
//  useEffect(() => {
//    var scene = new THREE.Scene();
//    scene.background = new THREE.Color(0xffffff)
//    var camera = new THREE.PerspectiveCamera(
//     45,
//     cubeRef.current.clientWidth / cubeRef.current.clientWidth,
//     0.1,
//     1000
//   );
 
//   var renderer = new THREE.WebGLRenderer();
//   renderer.setSize(
//     cubeRef.current.clientWidth,
//     cubeRef.current.clientHeight
//   );
//    cubeRef.current.appendChild(renderer.domElement);
 
//    var geometry = new THREE.BoxGeometry();
//    var material = new THREE.MeshBasicMaterial({ color: 0xFF0000, });
//    var cube = new THREE.Mesh(geometry, material);
//    scene.add(cube);
 
//    camera.position.z = 5;
 
//    var animate = function () {
//      requestAnimationFrame(animate);
 
//      cube.rotation.x += 0.01;
//      cube.rotation.y += 0.01;
 
//      renderer.render(scene, camera);
//    };
 
//    animate();
//  }, [cubeRef]);
 
//  return (
//   <>
//     <div
//       className="three"
//       ref={cubeRef}
//       style={{ width: "100vw", height: "100vh", }}
//     ></div>
//   </>
// );
// }; 
// export default ThreeCube;



// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";

// const ThreeCube = () => {
//   const cubeRef = useRef(null);
//   useEffect(() => {
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera(
//       75,
//       cubeRef.current.clientWidth / cubeRef.current.clientWidth,
//       0.1,
//       1000
//     );

//     var renderer = new THREE.WebGLRenderer();
//     renderer.setSize(
//       cubeRef.current.clientWidth,
//       cubeRef.current.clientHeight
//     );
//     cubeRef.current.appendChild(renderer.domElement);

//     var geometry = new THREE.TorusGeometry(1, 14, 14);
//     var material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
//     var cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     camera.position.z = 5;

//     var animate = function () {
//       requestAnimationFrame(animate);

//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;

//       renderer.render(scene, camera);
//     };

//     animate();
//   }, []);

//   return (
//     <>
//       <div
//         ref={cubeRef}
//         style={{ width: "90%", height: "600px", margin: "40px" }}
//       ></div>
//     </>
//   );
// };

// export default ThreeCube;



// import '../index.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import moon from "./assets/moon.jpg";
// import normal from "./assets/normal.jpg";
// import space from "./assets/space.jpg";
// import img from "./assets/img.jpg";


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector('#bg'),
// });
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(30);



// const geometry = new THREE.SphereGeometry(3, 64, 64);
// // const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
// const material = new THREE.MeshStandardMaterial({ color: 0xFF6347, wireframe: true });
// const torus = new THREE.Mesh(geometry, material);
// scene.add(torus);

// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(5, 5, 5);
// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(pointLight, ambientLight);

// // const lightHelper = new THREE.PointLightHelper(pointLight);
// // const gridHelper = new THREE.GridHelper(200, 50);
// // scene.add(lightHelper, gridHelper);

// const controls = new OrbitControls(camera, renderer.domElement);


// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
//   const star = new THREE.Mesh(geometry, material);

//   const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
//   star.position.set(x, y, z);
//   scene.add(star);
// }
// Array(200).fill().forEach(addStar);

// const spaceTexture = new THREE.TextureLoader().load({space});
// scene.background = spaceTexture;


// const profileTexture = new THREE.TextureLoader().load({img});
// const profile = new THREE.Mesh(
//   new THREE.BoxGeometry(3, 3, 3),
//   new THREE.MeshBasicMaterial({ map: profileTexture }),
// );
// scene.add(profile);

// const moonTexture = new THREE.TextureLoader().load({moon});
// const normalTexture = new THREE.TextureLoader().load({normal});
// const moon = new THREE.Mesh(
//   new THREE.SphereGeometry(3, 32, 32),
//   new THREE.MeshStandardMaterial({
//     map: moonTexture,
//     normalMap: normalTexture
//   }),
// )
// scene.add(moon);
// // moon.position.z = 30;
// // moon.position.setX(-10);

// function moonCamera() {
//   const t = document.body.getBoundingClientRect().top;
//   moon.rotation.x += 0.05;
//   moon.rotation.y += 0.075;
//   moon.rotation.z += 0.05;

//   profile.rotation.y += 0.01;
//   profile.rotation.z += 0.01;

//   camera.position.z = t * -0.01;
//   camera.position.x = t * -0.002;
//   camera.position.y = t * -0.002;
// }
// document.body.onscroll = moonCamera;


// function animate() {
//   requestAnimationFrame(animate);

//   torus.rotation.x += 0.01;
//   torus.rotation.y += 0.005;
//   torus.rotation.z += 0.01;

//   controls.update();

//   renderer.render(scene, camera);
// }

// animate();
