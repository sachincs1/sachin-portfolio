import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, TorusKnot, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

export const RotatingIcon = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4] }} className="h-40 w-40">
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <TorusKnot args={[1, 0.3, 128, 32]}>
            <MeshDistortMaterial
              color="#60a5fa"
              roughness={0.2}
              metalness={0.7}
              distort={0.3}
              speed={2}
            />
          </TorusKnot>
        </Float>
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
    </Canvas>
  );
};

export default RotatingIcon;
