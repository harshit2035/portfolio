
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export function CodeSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);
  // Fix the material ref type to use any since the specific type is complex
  const materialRef = useRef<any>(null);
  
  // Rotate sphere on frame update
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      sphereRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
      sphereRef.current.rotation.z += 0.003;
    }
    
    if (materialRef.current) {
      materialRef.current.distort = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2 + 0.4;
    }
  });

  return (
    <Sphere args={[1, 64, 64]} ref={sphereRef}>
      <MeshDistortMaterial
        ref={materialRef}
        color="#4285f4"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}
