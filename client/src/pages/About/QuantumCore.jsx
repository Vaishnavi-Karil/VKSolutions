import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function QuantumCore() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const width = containerRef.current.clientWidth || 400;
    const height = containerRef.current.clientHeight || 300;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Group
    const coreGroup = new THREE.Group();

    // Outer Gyro Torus Ring
    const ringGeo = new THREE.TorusGeometry(3.0, 0.08, 8, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffb785, // Tertiary peach
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    coreGroup.add(ringMesh);

    // Inner Gyro Torus Ring (Perpendicular)
    const ringGeo2 = new THREE.TorusGeometry(2.7, 0.05, 8, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xc3c0ff, // Secondary purple
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = Math.PI / 2;
    coreGroup.add(ringMesh2);

    // Center Core (Torus Knot representing quantum logic)
    const knotGeo = new THREE.TorusKnotGeometry(1.4, 0.45, 100, 12, 2, 3);
    const knotMat = new THREE.MeshBasicMaterial({
      color: 0xc4c0ff, // Primary light-purple
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    coreGroup.add(knotMesh);

    scene.add(coreGroup);

    // 5. Mouse tracking for tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX = (x / rect.width) * 2 - 1;
      mouseY = -(y / rect.height) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 6. Animation loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Individual rotations
      knotMesh.rotation.y = elapsed * 0.4;
      knotMesh.rotation.z = elapsed * 0.15;
      
      ringMesh.rotation.y = elapsed * 0.2;
      ringMesh.rotation.x = elapsed * 0.1;

      ringMesh2.rotation.y = -elapsed * 0.3;
      ringMesh2.rotation.z = -elapsed * 0.1;

      // Group drift/float math
      coreGroup.position.y = Math.sin(elapsed) * 0.15;

      // Mouse interactive tilt
      targetX = mouseX * 0.3;
      targetY = mouseY * 0.3;
      coreGroup.rotation.y += (targetX - coreGroup.rotation.y) * 0.05;
      coreGroup.rotation.x += (-targetY - coreGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 7. Resize handler
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
      
      ringGeo.dispose();
      ringMat.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      knotGeo.dispose();
      knotMat.dispose();
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
