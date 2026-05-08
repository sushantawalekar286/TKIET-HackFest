import { Text, Float, Wireframe, MeshDistortMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function FloatingRing({ position, scale, rotationSpeed, color }) {
  const ref = useRef();
  
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * rotationSpeed);
    ref.current.rotation.y = clock.getElapsedTime() * rotationSpeed;
  });

  return (
    <group position={position} ref={ref}>
      <mesh>
        <torusGeometry args={[scale, scale * 0.02, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      <mesh>
        <torusGeometry args={[scale * 1.2, scale * 0.01, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function CodeSymbol({ text, position, color, speed = 1 }) {
  const group = useRef();
  
  useFrame(({ clock }) => {
    if (!group.current) return;
    const time = clock.getElapsedTime() * speed;
    group.current.position.y = position[1] + Math.sin(time) * 0.5;
    group.current.rotation.x = Math.sin(time * 0.5) * 0.2;
    group.current.rotation.y = time * 0.3;
  });

  return (
    <group ref={group} position={position}>
      <Text
        fontSize={0.6}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
}

export default function FloatingObjects() {
  return (
    <group>
      {/* Code Symbols */}
      <CodeSymbol text="HTML" position={[-3.5, 1.5, -2]} color="#8b5cf6" speed={0.8} />
      <CodeSymbol text="REACT" position={[3.8, 0.5, -3]} color="#06b6d4" speed={1.1} />
      <CodeSymbol text="CSS" position={[-1.5, -1.2, 1]} color="#3b82f6" speed={0.6} />

      {/* Floating Wireframe Cube */}
      <Float speed={1.2} rotationIntensity={1} floatIntensity={1.5} position={[2.5, 2.5, -1]}>
        <mesh>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color="#0f172a" wireframe={true} />
          <lineSegments>
            <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(0.8, 0.8, 0.8)]} />
            <lineBasicMaterial attach="material" color="#8b5cf6" linewidth={2} transparent opacity={0.6} />
          </lineSegments>
        </mesh>
      </Float>

      {/* Abstract Blob Geometry */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2} position={[-2.5, -0.5, -4]}>
        <mesh>
          <icosahedronGeometry args={[1.2, 2]} />
          <MeshDistortMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.2} transparent opacity={0.25} distort={0.4} speed={2} />
        </mesh>
      </Float>

      {/* Neon Rings */}
      <FloatingRing position={[0, 0, -5]} scale={3.5} rotationSpeed={0.15} color="#8b5cf6" />
      <FloatingRing position={[2, -1, -6]} scale={2} rotationSpeed={0.25} color="#3b82f6" />
      <FloatingRing position={[-3, 2, -7]} scale={1.5} rotationSpeed={0.35} color="#06b6d4" />
    </group>
  );
}
