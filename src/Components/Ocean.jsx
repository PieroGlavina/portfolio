// Ocean.jsx
import { useEffect, useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { Water } from 'three-stdlib'
import * as THREE from 'three'

export default function Ocean({
                                  width = 10000,
                                  height = 10000,
                                  position = [0, -2, 0],
                                  waterColor = 0x004488,
                                  sunColor = 0xffffff,
                                  sunDirection = [0, 1, 0],
                                  distortionScale = 3,
                                  animationSpeed = 1,
                                  fog = false,
                              }) {
    const waterRef = useRef()
    const { scene } = useThree()

    useEffect(() => {
        const waterGeometry = new THREE.PlaneGeometry(width, height, 100, 100)

        const waterNormals = new THREE.TextureLoader().load(
            'https://threejs.org/examples/textures/waternormals.jpg',
            (texture) => {
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping
            }
        )

        const water = new Water(waterGeometry, {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: waterNormals,
            sunDirection: new THREE.Vector3(...sunDirection),
            sunColor: sunColor,
            waterColor: waterColor,
            distortionScale: distortionScale,
            fog: fog,
        })

        water.rotation.x = -Math.PI / 2
        water.position.set(...position)

        scene.add(water)
        waterRef.current = water
    }, [scene, width, height, position, waterColor, sunColor, sunDirection, distortionScale, fog])

    useFrame((_, delta) => {
        if (waterRef.current) {
            waterRef.current.material.uniforms['time'].value += delta * animationSpeed
        }
    })

    return null
}