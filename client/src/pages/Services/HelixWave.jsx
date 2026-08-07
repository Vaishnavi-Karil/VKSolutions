import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HelixWave() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const width = containerRef.current.clientWidth || 400;
    const height = containerRef.current.clientHeight || 400;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.z = 12;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Helix Group
    const helixGroup = new THREE.Group();

    const pointsCount = 45;
    const radius = 1.8;
    const heightSpan = 5.0;

    const positions1 = [];
    const positions2 = [];
    const linePairs = [];

    // Generate Double Helix coordinates
    for (let i = 0; i < pointsCount; i++) {
      const t = (i / pointsCount) * Math.PI * 4; // 2 full rotations
      const y = (i / pointsCount) * heightSpan - heightSpan / 2;

      // Strand 1
      const x1 = Math.sin(t) * radius;
      const z1 = Math.cos(t) * radius;
      positions1.push(x1, y, z1);

      // Strand 2 (offset by PI)
      const x2 = Math.sin(t + Math.PI) * radius;
      const z2 = Math.cos(t + Math.PI) * radius;
      positions2.push(x2, y, z2);

      // Crossbars (lines connecting strand 1 and strand 2)
      // Only draw connecting lines every 2 steps to avoid clutter
      if (i % 2 === 0) {
        linePairs.push(x1, y, z1);
        linePairs.push(x2, y, z2);
      }
    }

    // Geometries & Materials
    const strand1Geo = new THREE.BufferGeometry();
    strand1Geo.setAttribute('position', new THREE.Float32BufferAttribute(positions1, 3));
    const strand1Mat = new THREE.PointsMaterial({
      color: 0xc4c0ff, // Primary light purple
      size: 0.15,
      transparent: true,
      opacity: 0.9
    });
    const strand1Points = new THREE.Points(strand1Geo, strand1Mat);
    helixGroup.add(strand1Points);

    const strand2Geo = new THREE.BufferGeometry();
    strand2Geo.setAttribute('position', new THREE.Float32BufferAttribute(positions2, 3));
    const strand2Mat = new THREE.PointsMaterial({
      color: 0xffb785, // Tertiary orange/peach
      size: 0.15,
      transparent: true,
      opacity: 0.9
    });
    const strand2Points = new THREE.Points(strand2Geo, strand2Mat);
    helixGroup.add(strand2Points);

    // Connecting lines geometry
    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePairs, 3));
    const linesMat = new THREE.LineBasicMaterial({
      color: 0xc3c0ff,
      transparent: true,
      opacity: 0.3
    });
    const connectorLines = new THREE.LineSegments(linesGeo, linesMat);
    helixGroup.add(connectorLines);

    // Orbiting database node clouds
    const nodesCount = 15;
    const nodePositions = [];
    for (let i = 0; i < nodesCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.4 + Math.random() * 0.8;

      nodePositions.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }
    const nodesGeo = new THREE.BufferGeometry();
    nodesGeo.setAttribute('position', new THREE.Float32BufferAttribute(nodePositions, 3));
    const nodesMat = new THREE.PointsMaterial({
      color: 0x00e5ff, // Cyan logic points
      size: 0.08,
      transparent: true,
      opacity: 0.5
    });
    const nodesPoints = new THREE.Points(nodesGeo, nodesMat);
    helixGroup.add(nodesPoints);

    scene.add(helixGroup);

    // 5. Mouse Interaction Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / rect.width) * 2 - 1;
      mouseY = -(y / rect.height) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 6. Animation loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Continuous rotation
      helixGroup.rotation.y = elapsed * 0.25;
      
      // Floating sinusoidal oscillation on each strand points
      const p1Attr = strand1Geo.attributes.position;
      const p2Attr = strand2Geo.attributes.position;
      const lineAttr = linesGeo.attributes.position;

      // Deform helix mathematically with waves
      for (let i = 0; i < pointsCount; i++) {
        const tVal = (i / pointsCount) * Math.PI * 4;
        const wave = Math.sin(tVal + elapsed * 2) * 0.15;
        
        // Offset radius dynamically
        const dynamicRadius = radius + wave;
        
        // Update strand 1
        p1Attr.setX(i, Math.sin(tVal) * dynamicRadius);
        p1Attr.setZ(i, Math.cos(tVal) * dynamicRadius);

        // Update strand 2
        p2Attr.setX(i, Math.sin(tVal + Math.PI) * dynamicRadius);
        p2Attr.setZ(i, Math.cos(tVal + Math.PI) * dynamicRadius);
      }
      p1Attr.needsUpdate = true;
      p2Attr.needsUpdate = true;

      // Update connector lines endpoints as well
      let crossIdx = 0;
      for (let i = 0; i < pointsCount; i++) {
        if (i % 2 === 0) {
          const tVal = (i / pointsCount) * Math.PI * 4;
          const wave = Math.sin(tVal + elapsed * 2) * 0.15;
          const dynamicRadius = radius + wave;

          const x1 = Math.sin(tVal) * dynamicRadius;
          const z1 = Math.cos(tVal) * dynamicRadius;
          const x2 = Math.sin(tVal + Math.PI) * dynamicRadius;
          const z2 = Math.cos(tVal + Math.PI) * dynamicRadius;

          lineAttr.setX(crossIdx * 2, x1);
          lineAttr.setZ(crossIdx * 2, z1);
          lineAttr.setX(crossIdx * 2 + 1, x2);
          lineAttr.setZ(crossIdx * 2 + 1, z2);
          crossIdx++;
        }
      }
      lineAttr.needsUpdate = true;

      // Smooth mouse tracking lag
      targetX = mouseX * 0.4;
      targetY = mouseY * 0.4;
      helixGroup.rotation.z += (targetX - helixGroup.rotation.z) * 0.05;
      helixGroup.rotation.x += (-targetY - helixGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 7. Resize observer
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

      strand1Geo.dispose();
      strand1Mat.dispose();
      strand2Geo.dispose();
      strand2Mat.dispose();
      linesGeo.dispose();
      linesMat.dispose();
      nodesGeo.dispose();
      nodesMat.dispose();
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
