import React from "react";
import { useRef, useState } from "react";
import {
  OrbitControls,
  PointMaterial,
  Sky,
  Stars,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { Points } from "three";

const ThreeD = () => {
  const earth = useRef();
  const model = useGLTF("/earth (2).glb");
  extend(OrbitControls);

  const { camera, gl } = useThree();
  useFrame((state, delta) => {
    earth.current.rotation.y += delta * 0.1;
  });

  const snow = [...Array(100)];
  return (
    <>
      <OrbitControls args={[camera, gl.domElement]} />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>
      <ambientLight />
      <Sky
        distance={4500000000}
        sunPosition={[1, 0.5, -1]}
        inclination={0}
        azimuth={0.25}
      /> 
      <primitive ref={earth} object={model.scene} scale={1.5} />

      {/* snow */}
      {snow.map(() => {
        <Points
        >
          <pointsMaterial />
        </Points>;
      })}
    </>
  );
};

export default ThreeD;
