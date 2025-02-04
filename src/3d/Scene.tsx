import React, {useEffect, useRef} from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import { Silos } from './Silos'
import { Euler } from 'three';
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";


interface SomeView {
    width: number,
    height: number,
    silosOpacity: number,
    grainOpacity: number,
    grainCenterHeight: number,
    grainSideHeight: number,
}

export const SomeView: React.FC<SomeView> = ({
                                                 width,
                                                 height,
                                                 silosOpacity,
                                                 grainOpacity,
                                                 grainCenterHeight,
                                                 grainSideHeight,
}) => {
    function CameraController({ position = [0, 5, 10], rotation = [0, 0, 0] }) {
        const { camera } = useThree();

        useEffect(() => {
            // @ts-ignore
            camera.position.set(...position);
            // @ts-ignore
            camera.quaternion.setFromEuler(new Euler(...rotation));
        }, [position, rotation, camera]);

        return null;
    }

    function CameraControls({ rotation = [0, 0, 0] }) {
        const controlsRef = useRef<OrbitControlsImpl | null>(null);

        useEffect(() => {
            if (controlsRef.current) {
                // @ts-ignore
                controlsRef.current.object.rotation.set(new Euler(...rotation));
                controlsRef.current.update(); // Оновлюємо контрол, щоб зміни застосувалися
            }
        }, [rotation]);

        return <OrbitControls ref={controlsRef} />;
    }


    return (
        <Canvas style={{width: "100%", height: "100%"}}>
            <CameraController position={[20, 20, 30]} rotation={[100, Math.PI / 2, 0]}/> {/*rotation={[0, Math.PI / 2, 0]}*/}
            <ambientLight intensity={1} />
            <spotLight position={[0, 10, 0]} angle={0.15} penumbra={1} decay={0} intensity={1} />
            <pointLight position={[0, 10, 0]} decay={0} intensity={4} />
            <Silos
                width={width}
                height={height}
                silosPosition={[0, -10 - Math.abs(width - height) / 2, 0]}
                silosOpacity={silosOpacity}
                grainOpacity={grainOpacity}
                grainCenterHeight={grainCenterHeight}
                grainSideHeight={grainSideHeight}
            />
            <CameraControls rotation={[1, Math.PI / 2, 0]} />
        </Canvas>
    )
}
