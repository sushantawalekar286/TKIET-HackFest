import { useGLTF } from '@react-three/drei';
import React, { Suspense } from 'react';

// Reusable GLTF loader so the scene can swap in an authored model without changing the hero layout.
export default function ModelLoader({ url, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0], fallback = null }) {
  // If the user hasn't placed the model in the public folder, this would normally crash.
  // We recommend wrapping the caller in an ErrorBoundary or using a custom hook that catches 404s.
  // Assuming the user has the GLB files in /models/ directory:
  try {
    const { scene } = useGLTF(url);
    return <primitive object={scene} scale={scale} position={position} rotation={rotation} />;
  } catch (error) {
    console.warn(`Model at ${url} could not be loaded. Please ensure it is in the public folder.`);
    return fallback ? fallback : null;
  }
}

// Preload models if they exist
// useGLTF.preload('/models/desk.glb');
// useGLTF.preload('/models/developer.glb');
// useGLTF.preload('/models/robot.glb');

