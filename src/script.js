// Saman Tofighian
import * as three from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
const Sc = new three.Scene();
let model = null;
const draco = new DRACOLoader();
draco.setDecoderPath("/draco/");
const gltf = new GLTFLoader();
gltf.setDRACOLoader(draco);
gltf.load("/models/air_jordan_1.glb", (jordan) => {
  model = jordan.scene;
  Sc.add(model);
  model.position.y = -0.5;
  let n = 0.2;
  model.scale.set(n, n, n);
  model.rotation.y = -Math.PI / 2;
  const btn1 = document.querySelector(".btn1");
  btn1.addEventListener("click", () => {
    model.children[0].children[0].children[0].children[0].children[0].material.color.set(
      "#28d"
    );
    document.body.style.backgroundColor = "#28d";
  });
  const btn2 = document.querySelector(".btn2");
  btn2.addEventListener("click", () => {
    model.children[0].children[0].children[0].children[0].children[0].material.color.set(
      "crimson"
    );
    document.body.style.backgroundColor = "crimson";
  });
  const btn3 = document.querySelector(".btn3");
  btn3.addEventListener("click", () => {
    model.children[0].children[0].children[0].children[0].children[0].material.color.set(
      "green"
    );
    document.body.style.backgroundColor = "green";
  });
  const btn4 = document.querySelector(".btn4");
  btn4.addEventListener("click", () => {
    model.children[0].children[0].children[0].children[0].children[0].material.color.set(
      "gray"
    );
    document.body.style.backgroundColor = "#ccc";
  });
  const btn5 = document.querySelector(".btn5");
  btn5.addEventListener("click", () => {
    model.children[0].children[0].children[0].children[0].children[0].material.color.set(
      "purple"
    );
    document.body.style.backgroundColor = "purple";
  });

  // window click
  window.addEventListener("keydown", (e) => {
    if (e.keyCode == 49) {
      model.children[0].children[0].children[0].children[0].children[0].material.color.set(
        "#28d"
      );
      document.body.style.backgroundColor = "#28d";
    }
    if (e.keyCode == 50) {
      model.children[0].children[0].children[0].children[0].children[0].material.color.set(
        "crimson"
      );
      document.body.style.backgroundColor = "crimson";
    }
    if (e.keyCode == 51) {
      model.children[0].children[0].children[0].children[0].children[0].material.color.set(
        "green"
      );
      document.body.style.backgroundColor = "green";
    }
    if (e.keyCode == 52) {
      model.children[0].children[0].children[0].children[0].children[0].material.color.set(
        "gray"
      );
      document.body.style.backgroundColor = "#ccc";
    }
    if (e.keyCode == 53) {
      model.children[0].children[0].children[0].children[0].children[0].material.color.set(
        "purple"
      );
      document.body.style.backgroundColor = "purple";
    }
  });
});

const size = {
  width: innerWidth,
  height: innerHeight,
};
const camera = new three.PerspectiveCamera(75, size.width / size.height);
camera.position.set(0, 0, 7);
Sc.add(camera);
const aml = new three.AmbientLight("#fff", 1);
const direct1 = new three.DirectionalLight("#fff", 2);
direct1.position.set(0, 0, -1);
const direct2 = new three.DirectionalLight("#fff", 2);
direct2.position.set(0, 0, 1);
const direct3 = new three.DirectionalLight("#fff", 2);
direct3.position.set(0, -1, 0);
const direct4 = new three.DirectionalLight("#fff", 2);
direct4.position.set(0, 1, 0);
const direct5 = new three.DirectionalLight("#fff", 2);
direct5.position.set(-1, 0, 0);
const direct6 = new three.DirectionalLight("#fff", 2);
direct6.position.set(1, 0, 0);
let lightColor = 0xffffff;
setInterval(() => {
  lightColor = Math.random() * 0xffffff;
  direct1.color.setHex(lightColor);
  direct2.color.setHex(lightColor);
}, 2000);
Sc.add(aml, direct1, direct2, direct3, direct4, direct5, direct6);
const canvas = document.getElementById("web");
const renderer = new three.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
});
renderer.setSize(size.width, size.height);
renderer.toneMapping = three.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.6;
const orbit = new OrbitControls(camera, canvas);
orbit.enableDamping = true;
orbit.minDistance = 6;
orbit.maxDistance = 8;
let time = new three.Clock();
const animation = () => {
  let elapsed = time.getElapsedTime();
  orbit.update();
  renderer.render(Sc, camera);
  requestAnimationFrame(animation);
  if (model) {
    model.rotation.y = elapsed / 5;
  }
};
animation();
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") camera.position.y += 0.2;
  if (e.key === "ArrowDown") camera.position.y -= 0.2;
  if (e.key === "ArrowLeft") camera.position.x -= 0.2;
  if (e.key === "ArrowRight") camera.position.x += 0.2;
});
window.addEventListener("resize", () => {
  size.width = innerWidth;
  size.height = innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});
// Saman Tofighian
