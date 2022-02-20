import * as THREE from "three";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	45,
	canvas.width / canvas.height,
	0.1,
	1000
);

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(canvas.width, canvas.height);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animate = () => {
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
	requestAnimationFrame(animate);
};

animate();
