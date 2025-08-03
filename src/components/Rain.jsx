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
import { bufferAttribute } from "three/tsl";

const Rain = () => {
    //model
  const earth = useRef();
  const model = useGLTF("/earth (2).glb");
  extend(OrbitControls);
  const { camera, gl } = useThree();
  useFrame((state, delta) => {
    earth.current.rotation.y += delta * 0.1;
    // console.log(snowref.current)
    for(let i = 0; i < count ; i++){
        position[i*3 + 1] -= velocity[i];
        if(position[i*3 + 1] < -10){
            position[i*3 + 1] = 30;
        }
    }
    geometry.attributes.position.needsUpdate = true;;
  });

  //rain
  const count = 500;
  const position = new Float32Array(count * 3);
  const velocity = new Float32Array(count);

  for(let i = 0; i < count; i++){
    position[i*3]  = ( Math.random() - 0.5) * 50;
    position[i*3 + 1] = ( Math.random()) * 50;
    position[i*3 + 2] = ( Math.random() - 0.5) * 50;
    velocity[i] = Math.random() * 0.3;
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
      <points geometry={geometry}>
        <pointsMaterial
        size={0.3}
        transparent
        color={'#00ced1'}
        opacity={0.7}
        />
      </points>
      <fog attach="fog" color="cyan" near={1} far={7} />
    </>
  );
};

export default Rain;