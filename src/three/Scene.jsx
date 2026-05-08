import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles, Grid } from '@react-three/drei';
import { useMemo, useRef, lazy, Suspense } from 'react';
import { Color } from 'three';
import FloatingObjects from './FloatingObjects';
import Particles from './Particles';
import Laptop from './Laptop';

function CameraRig() {
  const { camera, pointer } = useThree();

  useFrame((state) => {
    const isMobile = state.viewport.width < 5;
    const targetZ = isMobile ? 12 : 6.5;

    const scrollOffset = window.scrollY * 0.003;

    camera.position.x += (pointer.x * 0.8 - camera.position.x) * 0.04;
    camera.position.y += ((0.5 + pointer.y * 0.4 + scrollOffset) - camera.position.y) * 0.04;
    camera.position.z += (targetZ - camera.position.z) * 0.035;
    
    camera.lookAt(0, -scrollOffset * 0.15, 0);
  });

  return null;
}

function GlowingBackdrop() {
  const glow = useMemo(
    () => [
      ['#8b5cf6', -4.2, 1.6, -6.8, 2.5],
      ['#3b82f6', 4.5, 1.8, -6.2, 2.2],
      ['#06b6d4', 0.4, 3.2, -8.4, 2.0],
      ['#8b5cf6', 0, -4, -10, 3.5]
    ],
    [],
  );

  return (
    <group>
      {glow.map(([color, x, y, z, scale]) => (
        <mesh key={`${color}-${x}`} position={[x, y, z]} scale={scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.12} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

function DigitalGrid() {
  return (
    <Grid
      position={[0, -2, 0]}
      args={[40, 40]}
      cellSize={1} // 1 unit
      cellThickness={1} // line thickness
      cellColor="#3b82f6" // blue inner lines
      sectionSize={4}
      sectionThickness={1.5}
      sectionColor="#8b5cf6" // purple outer lines
      fadeDistance={25}
      fadeStrength={1}
      transparent
      opacity={0.15}
    />
  );
}

function RotatingRoot() {
  const group = useRef();

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.getElapsedTime() * 0.04;
  });

  return (
    <group ref={group}>
      <FloatingObjects />
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0.5, 6.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      eventSource={document.getElementById('root')}
      eventPrefix="client"
      onCreated={({ gl }) => {
        gl.setClearColor(new Color('#020617'), 0);
      }}
    >
      <fog attach="fog" args={['#020617', 5, 20]} />

      {/* Futuristic Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} color="#8B5CF6" intensity={2} />
      <pointLight position={[-5, -5, -5]} color="#3B82F6" intensity={2} />

      <CameraRig />
      <GlowingBackdrop />
      <DigitalGrid />
      <RotatingRoot />
      <Particles />

      {/* Main Centerpiece Laptop */}
      <Suspense fallback={null}>
        <group position={[0, -0.6, 0]}>
          <Laptop />
        </group>
      </Suspense>
    </Canvas>
  );
}
