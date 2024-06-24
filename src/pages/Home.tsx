import { Canvas } from "@react-three/fiber";
import HomeText from "../components/HomeText";
import { OrbitControls, Sparkles, Stars } from "@react-three/drei";

const Home = () => {
  return (
    <div className="scene">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 80 }}>
        <ambientLight />
        <OrbitControls enableRotate={true} maxDistance={10} minDistance={5} />
        <Stars
          radius={1}
          depth={100}
          count={4000}
          factor={4}
          saturation={0}
          fade
          speed={0.2}
        />
        <Sparkles
          count={300}
          size={3}
          speed={0.2}
          opacity={1}
          scale={10}
          color="#fff3b0"
        />
        <HomeText />
      </Canvas>
    </div>
  );
};

export default Home;
