
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { CodeSphere } from "./CodeSphere";

export function Scene3D() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
      <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
        <color attach="background" args={['transparent']} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          
          <CodeSphere />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
        </Suspense>
      </Canvas>
    </div>
  );
}
