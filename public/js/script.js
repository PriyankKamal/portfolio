// console.log("hello")

import * as THREE from "three"
const target = document.querySelector(".webgl-elem")

const scene = new THREE.Scene()

const geo1 = new THREE.SphereGeometry(0.5,32,32)
const material1 = new THREE.MeshBasicMaterial({color:"orange"})

const sphere1 = new THREE.Mesh(geo1,material1);
scene.add(sphere1)

const size = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(65,size.width/size.height,1,1000);
scene.add(camera)
camera.position.z = 5

const renderer = new THREE.WebGLRenderer({canvas:target});
renderer.setSize(size.width,size.height)
renderer.render(scene,camera)