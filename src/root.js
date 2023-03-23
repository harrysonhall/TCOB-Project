import './home.css';





// import "./test.css"
// import * as THREE from 'three';
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// const canvas = document.querySelector('#webgl');
// const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight);
// const scene = new THREE.Scene();
// const renderer = new THREE.WebGL1Renderer({ canvas: canvas, antialias: true });
// const controls = new OrbitControls(camera, canvas);
// console.log(canvas)

// const drink_section = document.querySelector('#drink-section');
// console.log(drink_section.clientHeight)


// // Window Sizes
// const sizes = {
// 	width: drink_section.clientWidth,
// 	height: drink_section.clientHeight,
// };

// // // Renderer
// renderer.outputEncoding = THREE.sRGBEncoding
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

// // // Camera & Orbit Controls
// controls.enableDamping = true;
// camera.position.set(-25,25,-25)
// 	scene.add(camera);

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// 	window.addEventListener("resize", () => {
// 		sizes.width = drink_section.clientWidth;
// 		sizes.height = drink_section.clientHeight;

// 		camera.aspect = sizes.width / sizes.height;
// 		camera.updateProjectionMatrix();

// 		renderer.setSize(sizes.width, sizes.height);
// 		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// 	});



// const tick = (time) => {
		
// 		renderer.render(scene, camera);
// 		controls.update();
// 		window.requestAnimationFrame(tick);
			
// }

// tick();