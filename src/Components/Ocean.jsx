// Ocean.jsx
import { useEffect, useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { Water } from 'three-stdlib'
import * as THREE from 'three'

export default function Ocean() {
    const waterRef = useRef()
    const { scene } = useThree()

    useEffect(() => {
        const waterGeometry = new THREE.PlaneGeometry(150, 50, 100, 100)

        const water = new Water(waterGeometry, {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: new THREE.TextureLoader().load(
                'https://threejs.org/examples/textures/waternormals.jpg',
                (texture) => {
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
                }
            ),
            sunDirection: new THREE.Vector3(0, 1, 0),
            sunColor: 0xffffff,
            waterColor: 0x004488,
            distortionScale: 3,
            fog: false,
        })

        water.rotation.x = -Math.PI / 2
        water.position.set(0, 1.8, 0) // spostato più in basso per non coprire l’origine
        scene.add(water)
        waterRef.current = water
    }, [scene])

    useFrame((_, delta) => {
        if (waterRef.current) {
            waterRef.current.material.uniforms['time'].value += delta
        }
    })

    return null
}