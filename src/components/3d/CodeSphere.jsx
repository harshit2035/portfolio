
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

export function CodeSphere() {
  const sphereRef = useRef(null);
  
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
        color="#4285f4"
        metalness={0.8}
        roughness={0.2}
      />
    </Sphere>
  );
}
