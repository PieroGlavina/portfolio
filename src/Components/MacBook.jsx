
import React, {useEffect, useRef} from 'react'
import {useGLTF, useAnimations, useVideoTexture} from '@react-three/drei'
import scene from "../Assets/Models/macbook.glb";
import * as THREE from "three";

const MacBook = (props) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF(scene)
    const { actions } = useAnimations(animations, group)

    const handleClick = () => {
        const action = actions["Opening"];

        action.setLoop(THREE.LoopOnce, 1);
        action.timeScale = 2;
        action.clampWhenFinished = true;
        action.reset().play();

        return () => {action.stop();};
    }

    const txt = useVideoTexture('public/video/Green screen.mp4');

    useEffect(() => {
        if(txt){
            txt.flipY = true;
        }
    }, [txt]);

    return (
        <group ref={group} {...props} dispose={null} onClick={handleClick}>
            <group name="BLWpxSqmmLNyfOl">
                <mesh
                    name="aUVveCqqwsqchVB"
                    castShadow
                    receiveShadow
                    geometry={nodes.aUVveCqqwsqchVB.geometry}
                    material={materials.yVmFXNTCIwNkqVT}
                />
                <mesh
                    name="CEvArJuvvmtQsgk"
                    castShadow
                    receiveShadow
                    geometry={nodes.CEvArJuvvmtQsgk.geometry}
                    material={materials.yVmFXNTCIwNkqVT}
                />
                <mesh
                    name="ehiyYGFzDbgxhiD"
                    castShadow
                    receiveShadow
                    geometry={nodes.ehiyYGFzDbgxhiD.geometry}
                    material={materials.LJSCtLIrHNHZnIH}
                />
                <group name="lLOSixszvaKxbYb" />

                <group name="SCREEN" position={[-15.433, -0.448, -11.417]} rotation={[1.916, 0, 0]}>

                    <mesh
                        name="abgVijaHVNRUvcc"
                        castShadow
                        receiveShadow
                        geometry={nodes.abgVijaHVNRUvcc.geometry}
                        material={materials.UpOvKwLUUXPmnPU}
                    >
                        <meshMatcapMaterial map={txt} />
                    </mesh>


                    <mesh
                        name="abgVijaHVNRUvcc_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.abgVijaHVNRUvcc_1.geometry}
                        material={materials.SELuppcPLrlTpBi}
                    />
                    <mesh
                        name="abgVijaHVNRUvcc_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.abgVijaHVNRUvcc_2.geometry}
                        material={materials.zqeFZcIteZtOShc}
                    />
                    <mesh
                        name="abgVijaHVNRUvcc_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.abgVijaHVNRUvcc_3.geometry}
                        material={materials.ZpTrUizuxJQUyzW}
                    />
                    <mesh
                        name="abgVijaHVNRUvcc_4"
                        castShadow
                        receiveShadow
                        geometry={nodes.abgVijaHVNRUvcc_4.geometry}
                        material={materials.mpJhsaJJZPPWMEX}
                    />
                    <mesh
                        name="abgVijaHVNRUvcc_5"
                        castShadow
                        receiveShadow
                        geometry={nodes.abgVijaHVNRUvcc_5.geometry}
                        material={materials.VfcxYmbOfnqunYx}
                    />
                    <mesh
                        name="abgVijaHVNRUvcc_6"
                        castShadow
                        receiveShadow
                        geometry={nodes.abgVijaHVNRUvcc_6.geometry}
                        material={materials.lbGSuJJwEsUTzIm}
                    />
                    <mesh
                        name="abgVijaHVNRUvcc_7"
                        castShadow
                        receiveShadow
                        geometry={nodes.abgVijaHVNRUvcc_7.geometry}
                        material={materials.BczvixNfkWQzRzZ}
                    />
                    <mesh
                        name="abgVijaHVNRUvcc_8"
                        castShadow
                        receiveShadow
                        geometry={nodes.abgVijaHVNRUvcc_8.geometry}
                        material={materials.jRMWtdSAaujlvUA}
                    />
                    <mesh
                        name="abgVijaHVNRUvcc_9"
                        castShadow
                        receiveShadow
                        geometry={nodes.abgVijaHVNRUvcc_9.geometry}
                        material={materials.CGiumILqqSMVyeb}
                    />
                </group>


                <mesh
                    name="YvEVHGlTGUxXlGj"
                    castShadow
                    receiveShadow
                    geometry={nodes.YvEVHGlTGUxXlGj.geometry}
                    material={materials.initialShadingGroup}
                />
            </group>

            <group name="kLmxbAbySfQoEaw">
                <mesh
                    name="DAuseNOrQKyrxKl"
                    castShadow
                    receiveShadow
                    geometry={nodes.DAuseNOrQKyrxKl.geometry}
                    material={materials.yVmFXNTCIwNkqVT}
                />
                <mesh
                    name="eAcvqfZlEdoxHsj"
                    castShadow
                    receiveShadow
                    geometry={nodes.eAcvqfZlEdoxHsj.geometry}
                    material={materials.IlNnjEDxsExlBOr}
                />
                <mesh
                    name="gkxaPoMYYRpyVMR"
                    castShadow
                    receiveShadow
                    geometry={nodes.gkxaPoMYYRpyVMR.geometry}
                    material={materials.iPZiEncThgnBMJv}
                />
                <mesh
                    name="jvyJQHpRnZNPEYh"
                    castShadow
                    receiveShadow
                    geometry={nodes.jvyJQHpRnZNPEYh.geometry}
                    material={materials.LJSCtLIrHNHZnIH}
                />
                <mesh
                    name="KCEhahuknsxQOxv"
                    castShadow
                    receiveShadow
                    geometry={nodes.KCEhahuknsxQOxv.geometry}
                    material={materials.HpEeGHRuOqfcIZU}
                />
                <mesh
                    name="NdRhLFCrSxRNTxn"
                    castShadow
                    receiveShadow
                    geometry={nodes.NdRhLFCrSxRNTxn.geometry}
                    material={materials.BMKLbAPYqPmfArt}
                />
                <mesh
                    name="NgmQYtxXWDmCavo"
                    castShadow
                    receiveShadow
                    geometry={nodes.NgmQYtxXWDmCavo.geometry}
                    material={materials.SKOFticEGTqECbB}
                />
                <mesh
                    name="NqLxSKdAypgOdPC"
                    castShadow
                    receiveShadow
                    geometry={nodes.NqLxSKdAypgOdPC.geometry}
                    material={materials.initialShadingGroup}
                />
                <mesh
                    name="NWErafhynAfYQEz"
                    castShadow
                    receiveShadow
                    geometry={nodes.NWErafhynAfYQEz.geometry}
                    material={materials.pZbDFXVUkfRwjmQ}
                />
                <mesh
                    name="PSIiVLWbMOjTmDb"
                    castShadow
                    receiveShadow
                    geometry={nodes.PSIiVLWbMOjTmDb.geometry}
                    material={materials.SKOFticEGTqECbB}
                />
                <mesh
                    name="QFFLzaWPRnuQYJR"
                    castShadow
                    receiveShadow
                    geometry={nodes.QFFLzaWPRnuQYJR.geometry}
                    material={materials.hPcehRUjcLAosED}
                />
                <mesh
                    name="QYMcPaZnXQfyXcJ"
                    castShadow
                    receiveShadow
                    geometry={nodes.QYMcPaZnXQfyXcJ.geometry}
                    material={materials.NQXltfOcKPZPQdI}
                />
                <mesh
                    name="RjGOdbHqvxkiDns"
                    castShadow
                    receiveShadow
                    geometry={nodes.RjGOdbHqvxkiDns.geometry}
                    material={materials.lbGSuJJwEsUTzIm}
                />
                <mesh
                    name="RkSurqpnfNMQZfv"
                    castShadow
                    receiveShadow
                    geometry={nodes.RkSurqpnfNMQZfv.geometry}
                    material={materials.zWLcvvnJhbcTEtJ}
                />
                <mesh
                    name="SjSNuZdtWKZRuoq"
                    castShadow
                    receiveShadow
                    geometry={nodes.SjSNuZdtWKZRuoq.geometry}
                    material={materials.mpJhsaJJZPPWMEX}
                />
                <mesh
                    name="SjXIFRJFXEqYDUr"
                    castShadow
                    receiveShadow
                    geometry={nodes.SjXIFRJFXEqYDUr.geometry}
                    material={materials.PCfVLhSpFVCvRmc}
                />
                <mesh
                    name="tEHnKyDsqJuxIpz"
                    castShadow
                    receiveShadow
                    geometry={nodes.tEHnKyDsqJuxIpz.geometry}
                    material={materials.yVmFXNTCIwNkqVT}
                />
                <mesh
                    name="UxiDBlCRfXiMBzT"
                    castShadow
                    receiveShadow
                    geometry={nodes.UxiDBlCRfXiMBzT.geometry}
                    material={materials.zWLcvvnJhbcTEtJ}
                />
                <mesh
                    name="VqfccLWHjnpnmIO"
                    castShadow
                    receiveShadow
                    geometry={nodes.VqfccLWHjnpnmIO.geometry}
                    material={materials.BMKLbAPYqPmfArt}
                />
                <mesh
                    name="WPFmzKypKbUYgQT"
                    castShadow
                    receiveShadow
                    geometry={nodes.WPFmzKypKbUYgQT.geometry}
                    material={materials.lbGSuJJwEsUTzIm}
                />
                <mesh
                    name="xjTvBwZFGvSMOud"
                    castShadow
                    receiveShadow
                    geometry={nodes.xjTvBwZFGvSMOud.geometry}
                    material={materials.hPcehRUjcLAosED}
                />
                <mesh
                    name="xlRLalLTesirCGW"
                    castShadow
                    receiveShadow
                    geometry={nodes.xlRLalLTesirCGW.geometry}
                    material={materials.hPcehRUjcLAosED}
                />
                <mesh
                    name="YJMoQnvBNpTrgeH"
                    castShadow
                    receiveShadow
                    geometry={nodes.YJMoQnvBNpTrgeH.geometry}
                    material={materials.PCfVLhSpFVCvRmc}
                />
            </group>
        </group>
    )
}

export default MacBook;