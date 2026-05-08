import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function FloatingIcon({ position, children, color, label, speed = 1, primitivePosition = [0, 0, 0] }) {
  const group = useRef();

  // Orbital pathing for more intense/better 3D amination
  useFrame(({ clock }) => {
    if (!group.current) {
      return;
    }

    const time = clock.getElapsedTime() * speed;
    const radius = 0.5 + Math.sin(time * 0.5) * 0.2; // Breathing radius
    
    // Orbit logic + bobbing
    group.current.position.y = position[1] + Math.sin(time * 1.5) * 0.25;
    group.current.position.x = position[0] + Math.cos(time) * radius;
    group.current.position.z = position[2] + Math.sin(time) * radius;

    // Spin
    group.current.rotation.x = time * 0.6;
    group.current.rotation.y = time * 0.8;
  });

  return (
    <group ref={group} position={position}>
      <mesh position={primitivePosition} castShadow receiveShadow>
        {children}
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.18} emissive={color} emissiveIntensity={0.55} />
      </mesh>
      <Html center distanceFactor={8} position={[0, 0.82, 0]}>
        <div className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-100 backdrop-blur-md shadow-glowBlue">
          {label}
        </div>
      </Html>
    </group>
  );
}

export default function FloatingIcons() {
  return (
    <group position={[0, 1.55, 0]}>
      <FloatingIcon position={[-2.2, 0.65, -0.5]} color="#8b5cf6" label="HTML" speed={0.9}>
        <boxGeometry args={[0.55, 0.55, 0.55]} />
      </FloatingIcon>
      <FloatingIcon position={[-1.05, 1.5, -0.2]} color="#3b82f6" label="CSS" speed={1.1}>
        <sphereGeometry args={[0.35, 24, 24]} />
      </FloatingIcon>
      <FloatingIcon position={[0.85, 1.75, 0.15]} color="#22d3ee" label="JS" speed={1.2}>
        <torusKnotGeometry args={[0.3, 0.09, 80, 8]} />
      </FloatingIcon>
      <FloatingIcon position={[2.25, 1.1, -0.3]} color="#a78bfa" label="<>" speed={0.8}>
        <octahedronGeometry args={[0.42, 0]} />
      </FloatingIcon>
    </group>
  );
}
