import React from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera, Sky, Sphere} from "@react-three/drei";
import Ocean from "./Ocean.jsx";
import Rocks from "./Rocks.jsx";

const OceanWorld = () => {
    return (
        <section className="w-full h-screen">

            <Canvas camera={{ position: [0, 7, 30], rotation: [0.2, 0, 0] }}>

                <Sky distance={450000} sunPosition={[10, 20, 10]} />

                <ambientLight intensity={0.7} />

                <directionalLight
                    position={[10, 20, 10]}
                    intensity={3}
                    castShadow
                />

                <directionalLight
                    position={[-10, 5, -10]}
                    intensity={6}
                    color={0x000fff}
                />

                <directionalLight
                    position={[10, 5, 10]}
                    intensity={6}
                    color={0xff0000}
                />


                <Rocks
                    position={[0, 1, -20]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[10, 9, 20]}
                />

                <Ocean />

                <Sphere args={[7, 32, 32]} position={[0, 15, -3]} >
                    <meshStandardMaterial color="white" roughness={0.6} metalness={0.5} />
                </Sphere>
            </Canvas>


        </section>
    )
}
export default OceanWorld
