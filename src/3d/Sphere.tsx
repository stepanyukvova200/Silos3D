import React, { useState } from 'react'
import { Html } from "@react-three/drei"

interface SphereProps {
    x: number;
    y: number;
    z: number;
    temp: string;
    color: string;
}

const getTextColor = (color: string) => {
    if (color === 'cyan' || color === 'yellow') {
        return "black";
    } else {
        return "white";
    }
};

export const Sphere: React.FC<SphereProps> = ({ x, y, z, temp, color }) => {
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    return (
            <mesh
                //@ts-ignore
                position={[x, y, z]}
                onClick={() => setActive(!active)}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}>
                <sphereGeometry args={[0.75]} />
                <meshStandardMaterial color={hovered ? 'hotpink' : color} />
                <Html distanceFactor={40} position={[0, 0, 0]} style={{userSelect: 'none', cursor: 'default', pointerEvents: 'none'}}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '0%',
                        height: '0%',
                        marginTop: "-7px",
                        color: 'white',
                    }}>{temp}</div>
                </Html>
            </mesh>
    )
}