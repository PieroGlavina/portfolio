import { useRef, useState } from "react";
import {FrontSide, Vector3} from "three";
import { Canvas } from "@react-three/fiber";
import {Box, Sky} from "@react-three/drei";
import Ocean from "./Ocean.jsx";

export function OceanScene() {

    return (
        <Canvas>
            <Sky
                distance={450000}        // distanza del cielo
                inclination={0.5}        // inclinazione del cielo (0 = zenit, 1 = orizzonte)
                azimuth={0.25}           // posizione orizzontale del sole (0-1)
                mieCoefficient={0.005}   // scattering della luce (più basso = più pulito)
                mieDirectionalG={0.9}    // direzione dello scattering
                rayleigh={2}             // quantità di scattering atmosferico (più alto = più blu)
                turbidity={10}           // foschia nell'atmosfera (più alto = più caldo)
            />

            <Ocean />
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="black" />
            </mesh>
        </Canvas>
    );
}

export default OceanScene;