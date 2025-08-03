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
import * as THREE  from 'three';

const Snow = () => {
    //model
  const earth = useRef();
  const model = useGLTF("/earth (2).glb");
  extend(OrbitControls);
  const { camera, gl } = useThree();
  useFrame((state, delta) => {
    earth.current.rotation.y += delta * 0.1;
    // console.log(snowref.current)
    for(let i = 0; i < count; i++){
        position[i*3 + 1] -= velocity[i] * 0.1;
        if(position[i*3 + 1] < -10){
            position[i*3 + 1] = 30;
        }
    }
    geometry.attributes.position.needsUpdate = true;
  });

  //SNOW
  const count = 5000;
  const position = new Float32Array(count * 3);
  const velocity = new Float32Array(count);
  const snowref = useRef();

  for(let i = 0; i < count ; i++){
    position[i*3] = (Math.random() - 0.5 ) * 50;
    position[i*3 + 1] = (Math.random() ) * 20;
    position[i*3 + 2] = (Math.random() - 0.5 ) * 50;
    velocity[i] = 0.1 + Math.random() * 0.3;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position',new THREE.BufferAttribute(position,3));


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
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      /> 
      <primitive ref={earth} object={model.scene} scale={1.5} />
      <points ref={snowref} geometry={geometry}>
        <pointsMaterial 
        size={0.5}
        color={'#fff'}
        depthWrite={false}
        opacity={0.9}
        transparent
        />
      </points>
      <fog attach="fog" color="white" near={1} far={7} />
    </>
  );
};

export default Snow;