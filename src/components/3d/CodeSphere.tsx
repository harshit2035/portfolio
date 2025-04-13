
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function CodeSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  // Load texture - replace 'placeholder.svg' with your uploaded image path
  // For example: '/uploads/your-image.jpg'
  const texture = useTexture('/placeholder.svg');
  
  // Rotate sphere on frame update
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      sphereRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
      sphereRef.current.rotation.z += 0.003;
    }
  });

  return (
    <Sphere args={[1, 64, 64]} ref={sphereRef}>
      <meshStandardMaterial 
        map={texture}
        metalness={0.4}
        roughness={0.6}
      />
    </Sphere>
  );
}
