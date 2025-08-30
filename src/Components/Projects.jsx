import React, {useEffect, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import MacBook from "./MacBook.jsx";
import {Box, OrbitControls} from "@react-three/drei";

const Projects = () => {

    return (
        <section className="h-screen">
            <Canvas camera={{ position: [0, 1, 6], rotation: [0, 0, 0] }}>

                <ambientLight intensity={0.7} />

                <directionalLight
                    position={[10, 20, 10]}
                    intensity={3}
                    castShadow
                />


                  <MacBook
                    scale={[0.1, 0.1, 0.1]}
                    position={[0, 0, 0]}
                    castShadow
                    receiveShadow
                />


                <Box
                    scale={[10, 0.5, 5]}
                    position={[0, -0.6, -1]}
                    castShadow
                    receiveShadow
                >
                    <meshStandardMaterial color="#ffffff" />
                </Box>



            </Canvas>
        </section>
    )
}
export default Projects
