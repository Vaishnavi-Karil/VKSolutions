import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function NetworkAnimation() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    // Get parent dimensions
    const width = containerRef.current.clientWidth || 400;
    const height = containerRef.current.clientHeight || 400;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 12;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true // Transparent background
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Object Group
    const networkGroup = new THREE.Group();

    // Outer Network Sphere (Icosahedron wireframe)
    const outerGeo = new THREE.IcosahedronGeometry(4.2, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xc4c0ff, // Primary light-purple
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    networkGroup.add(outerMesh);

    // Inner Glowing Core (Icosahedron wireframe with less detail)
    const coreGeo = new THREE.IcosahedronGeometry(2.2, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xffb785, // Tertiary orange/peach
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    networkGroup.add(coreMesh);

    // Node Vertices (Points on the outer sphere)
    const pointsGeo = new THREE.IcosahedronGeometry(4.2, 2);
    // Draw points at every vertex
    const pointsMat = new THREE.PointsMaterial({
      color: 0xc4c0ff,
      size: 0.12,
      transparent: true,
      opacity: 0.85
    });
    const outerNodes = new THREE.Points(pointsGeo, pointsMat);
    networkGroup.add(outerNodes);

    // Floating orbital dust particles
    const particleCount = 60;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Distribute particles in a spherical shell around the network globe
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 5.0 + Math.random() * 2.0; // Radius between 5 and 7

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      scales[i] = Math.random();
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xc3c0ff,
      size: 0.06,
      transparent: true,
      opacity: 0.4
    });
    const particleCloud = new THREE.Points(particleGeo, particleMat);
    networkGroup.add(particleCloud);

    scene.add(networkGroup);

    // 5. Mouse Interaction Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      // Map mouse coordinates to -1 to 1 range
      mouseX = (x / rect.width) * 2 - 1;
      mouseY = -(y / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 6. Animation Loop
    let animationFrameId;

    const animate = () => {
      // Slow constant base rotation
      outerMesh.rotation.y += 0.0012;
      outerMesh.rotation.x += 0.0006;

      coreMesh.rotation.y -= 0.0025;
      coreMesh.rotation.x -= 0.0012;

      outerNodes.rotation.y += 0.0012;
      outerNodes.rotation.x += 0.0006;

      particleCloud.rotation.y += 0.0008;

      // Inertial mouse rotation lag
      targetX = mouseX * 0.4;
      targetY = mouseY * 0.4;

      networkGroup.rotation.y += (targetX - networkGroup.rotation.y) * 0.05;
      networkGroup.rotation.x += (-targetY - networkGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 7. Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(containerRef.current);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      
      // Dispose WebGL Geometries and Materials to avoid memory leaks
      outerGeo.dispose();
      outerMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        zIndex: 5
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}
