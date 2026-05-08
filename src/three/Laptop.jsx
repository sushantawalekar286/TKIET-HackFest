import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';

export default function Laptop() {
  const group = useRef();
  const screenRef = useRef();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScale(0.55); // Mobile
      } else if (width < 1024) {
        setScale(0.75); // Tablet
      } else {
        setScale(1); // Desktop
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Floating & Holographic Idle Animations
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    // Smooth idle hover
    group.current.position.y = Math.sin(t * 1.5) * 0.15 - 0.2;
    // Slight slow rotation
    group.current.rotation.y = Math.sin(t * 0.5) * 0.2;
    // Tiny tilt
    group.current.rotation.x = Math.sin(t * 0.8) * 0.05 + 0.1;

    // Pulse screen emissive intensity
    if (screenRef.current) {
      screenRef.current.emissiveIntensity = 0.5 + Math.sin(t * 3) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={group} scale={scale}>
        
        {/* Laptop Base */}
        <mesh position={[0, -0.05, 0.4]} castShadow>
          <boxGeometry args={[4.2, 0.12, 2.8]} />
          <meshStandardMaterial color="#0b0f19" roughness={0.7} metalness={0.8} />
        </mesh>
        
        {/* Keyboard Area - slight inset */}
        <mesh position={[0, 0.02, 0.4]}>
          <boxGeometry args={[3.8, 0.02, 1.4]} />
          <meshStandardMaterial color="#020617" roughness={0.9} />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, 0.02, 1.3]}>
          <boxGeometry args={[1.2, 0.02, 0.7]} />
          <meshStandardMaterial color="#0f172a" roughness={0.5} />
        </mesh>
        
        {/* Glowing edge accents underneath base */}
        <mesh position={[0, -0.08, 0.4]}>
          <boxGeometry args={[4.1, 0.02, 2.7]} />
          <meshBasicMaterial color="#3B82F6" transparent opacity={0.6} />
        </mesh>

        {/* Laptop Screen / Lid Group */}
        {/* Rotated backwards to simulate an open laptop */}
        <group position={[0, 0, -0.9]} rotation={[-0.3, 0, 0]}>
          {/* Screen Casing */}
          <mesh position={[0, 1.3, 0]} castShadow>
            <boxGeometry args={[4.2, 2.8, 0.1]} />
            <meshStandardMaterial color="#0b0f19" roughness={0.6} metalness={0.8} />
          </mesh>

          {/* Screen Emissive Glass/Monitor inside */}
          <mesh position={[0, 1.3, 0.051]}>
            <planeGeometry args={[4.0, 2.5]} />
            <meshStandardMaterial 
              ref={screenRef} 
              color="#000000" 
              emissive="#3B82F6" 
              emissiveIntensity={0.5} 
              roughness={0.1} 
              metalness={0.2} 
            />
          </mesh>

          {/* HTML Overlay functioning as the monitor UI/Logo */}
          <Html
            transform
            wrapperClass="laptop-screen"
            distanceFactor={1.4}
            position={[0, 1.3, 0.06]}
            rotation={[0, 0, 0]}
            style={{
              width: '400px',
              height: '250px',
              backgroundColor: 'transparent',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              pointerEvents: 'none'
            }}
          >
            <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-blue-500/30 bg-black/40 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              {/* Logo representation */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-cyan-400/50 bg-blue-500/20 text-3xl font-extrabold text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                T
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                TKIET CLUB
              </h2>
              <div className="mt-2 h-1 w-24 rounded-full bg-cyan-400/50 shadow-[0_0_10px_#22d3ee]"></div>
            </div>
          </Html>
        </group>
        
        {/* Soft fill light bouncing on keyboard from screen */}
        <pointLight position={[0, 0.8, -0.2]} intensity={2} color="#06B6D4" distance={3} />
      </group>
    </Float>
  );
}
