import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import {DoubleSide, TextureLoader, RepeatWrapping} from "three";
import { useLoader } from '@react-three/fiber';

interface GrainProps {
    grainCenterHeight: number,
    grainSideHeight: number,
    grainOpacity: number;
    silosPosition: number[],
}


export const Grain: React.FC<GrainProps> = ({ grainCenterHeight, grainSideHeight, grainOpacity , silosPosition}) => {
    const grainRef = useRef<any>();
    const texture = useLoader(TextureLoader, 'culture.jpg');

    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(4, 4);

    return (
        <>
            <mesh position={[0, grainSideHeight / 2 + silosPosition[1], 0]}>
                <cylinderGeometry args={[16 - 0.1, 16 - 0.1, grainSideHeight, 32, 1, true]} />
                <meshStandardMaterial map={texture} transparent={true} opacity={grainOpacity} depthWrite={false}/>
            </mesh>

            <mesh position={[0, grainSideHeight + (grainCenterHeight - grainSideHeight) / 2 + silosPosition[1], 0]}>
                <cylinderGeometry args={[0, 16 - 0.1, grainCenterHeight - grainSideHeight, 32, 1, true]} />
                <meshStandardMaterial map={texture} transparent={true} opacity={grainOpacity} depthWrite={false} side={DoubleSide}/> {/*side={DoubleSide}*/}
            </mesh>

            <mesh position={[0, silosPosition[1], 0]}>
                <cylinderGeometry args={[16 - 0.1, 16 - 0.1, 0.1, 32, 1, false]} />
                <meshStandardMaterial map={texture} transparent={true} opacity={grainOpacity} depthWrite={false}/>
            </mesh>
        </>
    );
};
