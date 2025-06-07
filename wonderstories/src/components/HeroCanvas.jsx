import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function HeroCanvas() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      {/* TODO: partículas formando un libro */}
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}
