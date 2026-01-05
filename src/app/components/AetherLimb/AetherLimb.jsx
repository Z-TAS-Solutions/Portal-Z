"use client";

import { useEffect, useRef } from "react";
import {
  Vector3,
  PerspectiveCamera,
  WebGLRenderer,
  BufferGeometry,
  BufferAttribute,
  PointsMaterial,
  Points,
  Box3,
  Scene,
  Raycaster,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function AetherLimb() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let mouse = { x: 0, y: 0 };
    const maxRotation = 0.3;
    let tiltX = 0;
    let tiltY = 0;
    let particles = null;
    let positions = null;
    let fixedPositions = null;
    // let line = null;
    // let debugPoint = null;
    // let cone = null;
    const raycaster = new Raycaster();

    canvasRef.current.addEventListener("mousemove", (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      tiltY = mouse.y * maxRotation;
      tiltX = mouse.x * maxRotation;
    });

    const canvas = canvasRef.current;
    const width = canvas.parentElement.clientWidth;
    const height = canvas.parentElement.clientHeight;

    const scene = new Scene();

    const camera = new PerspectiveCamera(45, width / height, 0.1, 1000);

    const renderer = new WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(width, height, false);

    const loader = new GLTFLoader();

    loader.load(
      "Assets/VeinedHand.glb",
      function (gltf) {
        let handMesh;
        gltf.scene.traverse((child) => {
          if (child.isMesh) handMesh = child;
        });

        /* const edges = new THREE.EdgesGeometry(handMesh.geometry);
        line = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({ color: 0x90aaaa }),
        );

        const box = new THREE.Box3().setFromObject(line);
        const size = box.getSize(new Vector3());
        const center = box.getCenter(new Vector3());

        line.position.y = -center.y;

        camera.position.z = size.length() * 1.1;

        scene.add(line); */

        positions = new Float32Array(
          handMesh.geometry.attributes.position.array,
        );

        fixedPositions = new Float32Array(
          handMesh.geometry.attributes.position.array,
        );

        /* const positions = new Float32Array(5000 * 3);

        const sampler = new MeshSurfaceSampler(handMesh).build();
        const position = new Vector3();

        for (let i = 0; i < 5000; i++) {
          sampler.sample(position);
          positions[i * 3] = position.x;
          positions[i * 3 + 1] = position.y;
          positions[i * 3 + 2] = position.z;
        } */

        const particleGeometry = new BufferGeometry();
        particleGeometry.setAttribute(
          "position",
          new BufferAttribute(positions, 3),
        );

        const material = new PointsMaterial({
          size: 0.05,
          color: 0x90aaaa,
        });

        particles = new Points(particleGeometry, material);
        particles.scale.set(1, 1, 1);

        const box = new Box3().setFromObject(particles);
        const size = box.getSize(new Vector3());
        const center = box.getCenter(new Vector3());

        particles.position.y = -center.y;

        camera.position.z = size.length() * 1.1;

        scene.add(particles);

        /* const debugGeometry = new THREE.SphereGeometry(0.2, 16, 16);
        const debugMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        debugPoint = new THREE.Mesh(debugGeometry, debugMaterial);
        scene.add(debugPoint); */

        raycaster.params.Points.threshold = 0.4;
      },
      undefined,
      function (error) {
        console.error(error);
      },
    );

    function animate() {
      if (particles) {
        particles.rotation.x = -tiltY * 0.3;
        particles.rotation.y = tiltX;
        // particles.rotation.z = tiltY * 0.1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(particles);
        const activeIndices = new Set();
        if (intersects.length > 0) {
          intersects.forEach((hit) => activeIndices.add(hit.index));
        }

        for (let i = 0; i < positions.length; i += 3) {
          const idx = i / 3;

          let cx = positions[i];
          let cy = positions[i + 1];
          let cz = positions[i + 2];

          const hx = fixedPositions[i];
          const hy = fixedPositions[i + 1];
          const hz = fixedPositions[i + 2];

          if (activeIndices.has(idx)) {
            cx += (Math.random() - 0.5) * 1;
            cy += (Math.random() - 0.5) * 1;
          } else {
            cx += (hx - cx) * 0.01;
            cy += (hy - cy) * 0.01;
            cz += (hz - cz) * 0.01;
          }

          positions[i] = cx;
          positions[i + 1] = cy;
          positions[i + 2] = cz;

          /* const mouseWorld = new Vector3(mouse.x, mouse.y, 0.9);
          mouseWorld.unproject(camera);
          debugPoint.position.copy(mouseWorld); */
        }

        particles.geometry.attributes.position.needsUpdate = true;
      }

      /* if (line) {
        line.rotation.x += (tiltX - line.rotation.x) * 0.05;
        line.rotation.y += (tiltY - line.rotation.y) * 0.05;
        line.rotation.z = tiltY * 0.1;
      } */

      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
