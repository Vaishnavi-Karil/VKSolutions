import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 30;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Floating Dust Particles
    const particleCount = 80;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const speeds = [];

    for (let i = 0; i < particleCount; i++) {
      // Random coordinates spanning a large box
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      speeds.push({
        x: (Math.random() - 0.5) * 0.01,
        y: -Math.random() * 0.02 - 0.005, // Slowly drift downwards
        z: (Math.random() - 0.5) * 0.005
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xc4c0ff, // Primary theme color
      size: 0.12,
      transparent: true,
      opacity: 0.3,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 5. Scroll Interaction
    let targetScrollY = 0;
    let currentScrollY = 0;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 6. Animation loop
    let animationFrameId;
    const posAttr = geometry.attributes.position;

    const animate = () => {
      // Smoothly interpolate scroll for camera movement
      currentScrollY += (targetScrollY - currentScrollY) * 0.05;
      camera.position.y = -currentScrollY * 0.005;

      // Update particle positions
      const array = posAttr.array;
      for (let i = 0; i < particleCount; i++) {
        array[i * 3] += speeds[i].x;
        array[i * 3 + 1] += speeds[i].y;
        array[i * 3 + 2] += speeds[i].z;

        // Reset particle if it drifts off the bottom screen
        if (array[i * 3 + 1] < -25) {
          array[i * 3 + 1] = 25;
          array[i * 3] = (Math.random() - 0.5) * 50;
        }
      }
      posAttr.needsUpdate = true;

      // Rotate particle group slightly
      particles.rotation.y += 0.0003;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 7. Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        pointerEvents: 'none', 
        zIndex: -1,
        display: 'block'
      }} 
    />
  );
}
