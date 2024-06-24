import { Center, GradientTexture, Text3D } from "@react-three/drei";

const HomeText = () => {
  const fontUrl = "/assets/fonts/Nanum Pen_Regular.json";
  const fontStyle = {
    font: fontUrl,
    size: 1,
    height: 0.5,
    letterSpacing: 0.01,
    lineHeight: 1,
    fontSize: 0.5,
    bevelEnabled: true,
    bevelOffset: 0.001,
    bevelSize: 0.01,
    bevelThickness: 0.01,
  };
  const handleClickBtn = () => {
    alert("ThreeJS, R3F Test!");
  };

  return (
    <group position={[0, 0, 0]}>
      <group position={[0, 1, 0]}>
        <Center>
          <Text3D {...fontStyle}>
            {`Front-end Developer`}
            <meshBasicMaterial>
              <GradientTexture stops={[0, 1]} colors={["black", "white"]} />
            </meshBasicMaterial>
          </Text3D>
        </Center>
      </group>
      <group position={[0, -1, 0]}>
        <Center>
          <Text3D {...fontStyle}>
            {`이기성 입니다.`}
            <meshBasicMaterial>
              <GradientTexture stops={[0, 1]} colors={["black", "white"]} />
            </meshBasicMaterial>
          </Text3D>
        </Center>
      </group>
      <group position={[0, -3, 0]} onClick={handleClickBtn}>
        <Center>
          <Text3D {...fontStyle}>
            {">> CLICK <<"}
            <meshBasicMaterial>
              <GradientTexture stops={[0, 1]} colors={["black", "white"]} />
            </meshBasicMaterial>
          </Text3D>
        </Center>
      </group>
    </group>
  );
};

export default HomeText;
