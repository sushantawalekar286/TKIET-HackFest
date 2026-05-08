import { Sparkles } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { AdditiveBlending, BufferAttribute, BufferGeometry } from 'three';

export default function Particles() {
  const points = useRef();

  const geometry = useMemo(() => {
    // Dynamic particle reduction for mobile vs desktop
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 60 : 180;
    const positions = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const offset = index * 3;
      positions[offset] = (Math.random() - 0.5) * 14;
      positions[offset + 1] = (Math.random() - 0.5) * 12; // Start wider block
      positions[offset + 2] = (Math.random() - 0.5) * 10;
    }

    const bufferGeometry = new BufferGeometry();
    bufferGeometry.setAttribute('position', new BufferAttribute(positions, 3));
    return bufferGeometry;
  }, []);

  // Flowing, rising particles instead of just a static rotating group
  useFrame(({ clock }) => {
    if (!points.current) {
      return;
    }

    const time = clock.getElapsedTime();
    points.current.rotation.y = time * 0.08;
    
    // Animate the actual vertices for a fluid look
    const positions = points.current.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      // Y positions
      positions[i + 1] += Math.sin(time * 0.5 + positions[i]) * 0.005 + 0.006;
      
      // Reset if they float too high
      if (positions[i + 1] > 6) {
        positions[i + 1] = -5;
      }
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <points ref={points} geometry={geometry}>
        <pointsMaterial
          size={0.045}
          color="#94a3b8"
          transparent
          opacity={0.55}
          depthWrite={false}
          blending={AdditiveBlending}
          sizeAttenuation
        />
      </points>
      <Sparkles count={28} speed={0.35} size={1.4} scale={[10, 5.2, 5]} position={[0, 2.1, -3.2]} color="#22d3ee" opacity={0.25} />
    </>
  );
}
