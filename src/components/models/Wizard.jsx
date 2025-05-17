"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";

// Preload the GLTF model
useGLTF.preload("/models/me-transformed.glb");

export default function Wizard(props) {
  const { nodes, materials } = useGLTF("/models/me-transformed.glb");
  const modelRef = useRef();

  // Animating the model
  useFrame((state, delta) => {
    if (modelRef.current) {
      const amplitude = 0.5; // Limit the amplitude to keep it within a smaller range
      const frequency = 1; // Adjust for speed of movement
      modelRef.current.position.y =
        -7 + Math.sin(state.clock.elapsedTime * frequency) * amplitude; // Raise the base position to -4 for a smaller range
    }
  });

  return (
    <group
      {...props}
      ref={modelRef}
      position={[10, 1, 1]}  // Raise the model's initial position to ensure it's higher
      scale={[2, 2, 2]}      // Scale if needed
      dispose={null}
    >
      <mesh
        name="inner001"
        castShadow
        receiveShadow
        geometry={nodes.inner001.geometry}
        material={materials["Wolf3D_Outfit_Top.005"]}
        position={[0, 0, 0]}
        scale={1}
      />
      <mesh
        name="jacket001"
        castShadow
        receiveShadow
        geometry={nodes.jacket001.geometry}
        material={materials["Wolf3D_Outfit_Top.004"]}
        position={[0, 0, 0]}
        scale={1}
      />
      <mesh
        name="face001"
        castShadow
        receiveShadow
        geometry={nodes.face001.geometry}
        material={materials["face.002"]}
        position={[0, 0, 0]}
        scale={1}
      />
      <group name="headphone001" position={[0, 0, 0]} scale={1}>
        <mesh
          name="Cylinder009_Material002_0001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_Material002_0001.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          name="Cylinder009_Material002_0001_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_Material002_0001_1.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <mesh
        name="shoes001"
        castShadow
        receiveShadow
        geometry={nodes.shoes001.geometry}
        material={materials.shoes}
        position={[0, 0, 0]}
        scale={1}
      />
      <mesh
        name="Pant001"
        castShadow
        receiveShadow
        geometry={nodes.Pant001.geometry}
        material={materials["Wolf3D_Outfit_Bottom.003"]}
        position={[0, 0, 0]}
        scale={1}
      />
      <mesh
        name="eyes001"
        castShadow
        receiveShadow
        geometry={nodes.eyes001.geometry}
        material={materials["Material.015"]}
        position={[0, 0, 0]}
        scale={1}
      />
      <mesh
        name="hair001"
        castShadow
        receiveShadow
        geometry={nodes.hair001.geometry}
        material={materials["Material.014"]}
        position={[0, 0, 0]}
        scale={1}
      />
      <mesh
        name="Body001"
        castShadow
        receiveShadow
        geometry={nodes.Body001.geometry}
        material={materials["face.001"]}
        position={[0, 0, 0]}
        scale={1}
      />
      <mesh
        name="Mac-Book"
        castShadow
        receiveShadow
        geometry={nodes["Mac-Book"].geometry}
        material={materials["mac book"]}
        position={[0, 0, 0]}
        scale={1}
      />
      <mesh
        name="cloud"
        castShadow
        receiveShadow
        geometry={nodes.cloud.geometry}
        material={materials["7_-nimbus_0_0_0"]}
        position={[0, 0, 0]}
        scale={1}
      />
    </group>
  );
}

export function Scene() {
  return (
    <Canvas>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />

      {/* Camera settings */}
      <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={75} near={0.1} far={1000} />

      {/* Your 3D model */}
      <Wizard />

      {/* Add controls to move the camera around */}
      <OrbitControls />
    </Canvas>
  );
}
