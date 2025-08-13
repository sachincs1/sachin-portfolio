import { Canvas } from "@react-three/fiber";
import { Float, Box, MeshWobbleMaterial } from "@react-three/drei";
import { useState } from "react";

export const ThreeCard = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative aspect-video rounded-lg border bg-secondary/30 p-2 shadow-glow">
      <Canvas camera={{ position: [0, 0, 5] }} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Float speed={hovered ? 4 : 2} rotationIntensity={hovered ? 2 : 1} floatIntensity={2}>
          <Box args={[2.2, 1.2, 1.2]}>
            <MeshWobbleMaterial color="#a78bfa" metalness={0.4} roughness={0.3} speed={hovered ? 3 : 1.5} factor={0.9} />
          </Box>
        </Float>
      </Canvas>
    </div>
  );
};

export default ThreeCard;
