import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { CanvasTexture, LinearFilter } from 'three';
import ModelLoader from './ModelLoader';

function createCodeTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;

  const context = canvas.getContext('2d');

  if (!context) {
    return null;
  }

  context.fillStyle = '#050816';
  context.fillRect(0, 0, canvas.width, canvas.height);

  const gradient = context.createLinearGradient(0, 0, 512, 512);
  gradient.addColorStop(0, '#8b5cf6');
  gradient.addColorStop(0.5, '#3b82f6');
  gradient.addColorStop(1, '#22d3ee');

  context.fillStyle = 'rgba(255,255,255,0.05)';
  for (let row = 0; row < 18; row += 1) {
    context.fillRect(42, 50 + row * 22, 320, 10);
  }

  context.fillStyle = gradient;
  context.fillRect(42, 70, 180, 6);
  context.fillRect(42, 118, 260, 6);
  context.fillRect(42, 166, 220, 6);
  context.fillRect(42, 214, 140, 6);
  context.fillRect(42, 262, 240, 6);
  context.fillRect(42, 310, 190, 6);
  context.fillRect(42, 358, 270, 6);

  context.strokeStyle = 'rgba(34, 211, 238, 0.22)';
  context.lineWidth = 2;
  context.strokeRect(24, 24, 464, 464);

  const texture = new CanvasTexture(canvas);
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.needsUpdate = true;

  return texture;
}

function Screen() {
  const texture = useMemo(() => createCodeTexture(), []);
  const codeLines = useMemo(
    () => [
      'const build = async () => {',
      '  const idea = await validate();',
      '  return ship(idea, { glow: true });',
      '};',
    ],
    [],
  );

  return (
    <group position={[0, 1.52, -0.42]}>
      <mesh>
      <planeGeometry args={[2.45, 1.45]} />
      <meshStandardMaterial
        map={texture || undefined}
        color="#0f172a"
        emissive="#1e3a8a"
        emissiveIntensity={0.65}
        roughness={0.25}
        metalness={0.15}
      />
      </mesh>

      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[2.28, 1.22]} />
        <meshBasicMaterial color="#020617" transparent opacity={0.32} />
      </mesh>

      <group position={[-0.97, 0.45, 0.02]}>
        {codeLines.map((line, index) => (
          <Text
            key={line}
            fontSize={0.1}
            color={index % 2 === 0 ? '#93c5fd' : '#a78bfa'}
            anchorX="left"
            anchorY="middle"
            position={[0, 0.28 - index * 0.18, 0]}
          >
            {line}
          </Text>
        ))}
      </group>

      <mesh position={[0.82, -0.2, 0.04]}>
        <boxGeometry args={[0.38, 0.38, 0.06]} />
        <meshStandardMaterial color="#0f172a" emissive="#22d3ee" emissiveIntensity={0.8} roughness={0.35} />
      </mesh>
    </group>
  );
}

export default function DeveloperDesk() {
  const group = useRef();

  // The desk subtly bobs to keep the hero composition from feeling static.
  useFrame(({ clock }) => {
    if (!group.current) {
      return;
    }

    group.current.position.y = -0.12 + Math.sin(clock.getElapsedTime() * 0.7) * 0.05;
  });

  return (
    <group ref={group} position={[0, -0.12, 0]}>
      <ModelLoader url="/models/desk.glb" fallback={
        <group>
          <mesh position={[0, -1.22, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[6.4, 3.4]} />
            <meshStandardMaterial color="#0a1022" roughness={1} metalness={0.02} />
          </mesh>

          <mesh position={[0, -1.02, -0.55]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[3.6, 64]} />
            <meshBasicMaterial color="#8b5cf6" transparent opacity={0.08} />
          </mesh>

          <mesh position={[0, -0.88, 0]} castShadow receiveShadow>
            <boxGeometry args={[4.75, 0.18, 1.95]} />
            <meshStandardMaterial color="#151c33" roughness={0.78} metalness={0.08} />
          </mesh>

          <mesh position={[0, -0.04, -0.55]} castShadow receiveShadow>
            <boxGeometry args={[0.18, 1.18, 0.18]} />
            <meshStandardMaterial color="#334155" roughness={0.5} metalness={0.42} />
          </mesh>

          <mesh position={[0, 0.7, -0.6]} castShadow receiveShadow>
            <boxGeometry args={[3.05, 1.85, 0.14]} />
            <meshStandardMaterial color="#030712" roughness={0.18} metalness={0.38} />
          </mesh>

          <Screen />

          <mesh position={[0, -0.34, 0.42]} rotation={[-0.16, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[2.8, 0.12, 0.95]} />
            <meshStandardMaterial color="#0f172a" roughness={0.55} metalness={0.22} />
          </mesh>

          <mesh position={[-1.75, -0.42, 0.47]} rotation={[-0.06, 0.18, -0.02]} castShadow>
            <cylinderGeometry args={[0.12, 0.15, 0.42, 18]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.65} metalness={0.08} />
          </mesh>

          <mesh position={[-1.75, -0.17, 0.47]} castShadow>
            <cylinderGeometry args={[0.18, 0.12, 0.08, 18]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.7} metalness={0.05} />
          </mesh>

          <mesh position={[-1.75, -0.05, 0.47]} castShadow>
            <sphereGeometry args={[0.16, 20, 20]} />
            <meshStandardMaterial color="#94a3b8" emissive="#22d3ee" emissiveIntensity={0.15} roughness={0.4} metalness={0.35} />
          </mesh>

          <mesh position={[1.9, -0.42, 0.55]} rotation={[0.1, -0.22, 0.04]} castShadow>
            <boxGeometry args={[0.85, 0.42, 0.12]} />
            <meshStandardMaterial color="#0f172a" emissive="#3b82f6" emissiveIntensity={0.15} roughness={0.4} metalness={0.35} />
          </mesh>

          <mesh position={[2.18, -0.3, 0.62]} rotation={[0.1, -0.22, 0.04]} castShadow>
            <cylinderGeometry args={[0.04, 0.04, 0.62, 10]} />
            <meshStandardMaterial color="#1f2937" />
          </mesh>

          <mesh position={[2.34, -0.53, 0.84]} rotation={[0.18, -0.22, 0.1]} castShadow>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial color="#111827" emissive="#a78bfa" emissiveIntensity={0.15} />
          </mesh>

          <mesh position={[0.1, -0.82, 0.12]} rotation={[0.05, 0, 0]} castShadow>
            <boxGeometry args={[0.82, 0.06, 0.48]} />
            <meshStandardMaterial color="#0b1220" roughness={0.7} metalness={0.15} />
          </mesh>

          <mesh position={[0.1, -0.79, 0.14]} rotation={[0.05, 0, 0]} castShadow>
            <boxGeometry args={[0.72, 0.03, 0.38]} />
            <meshStandardMaterial color="#111827" roughness={0.45} metalness={0.3} />
          </mesh>

          {[
            [-1.7, -0.43, 0.52],
            [-1.35, -0.43, 0.52],
            [-1.0, -0.43, 0.52],
            [-0.65, -0.43, 0.52],
            [-0.3, -0.43, 0.52],
            [0.05, -0.43, 0.52],
            [0.4, -0.43, 0.52],
            [0.75, -0.43, 0.52],
            [1.1, -0.43, 0.52],
            [1.45, -0.43, 0.52],
          ].map((position, index) => (
            <mesh key={`key-${index}`} position={position} rotation={[-0.12, 0, 0]} castShadow>
              <boxGeometry args={[0.22, 0.05, 0.2]} />
              <meshStandardMaterial color={index % 2 === 0 ? '#334155' : '#475569'} roughness={0.75} metalness={0.17} />
            </mesh>
          ))}
          
          <ModelLoader url="/models/developer.glb" fallback={null} />

          <mesh position={[0, 1.28, -1.2]}>
            <planeGeometry args={[4.8, 1.8]} />
            <meshBasicMaterial color="#8b5cf6" transparent opacity={0.05} />
          </mesh>
        </group>
      } />
    </group>
  );
}
