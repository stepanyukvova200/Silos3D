import React from 'react'
import { Sphere } from './Sphere';
import {Html} from "@react-three/drei";

interface SensorData  {
    id: number,
    temp: string,
    color: string,
    height: number,
}

interface ColumnSensorsProps {
    x: number;
    z: number;
    sensorsHeight: number,
    silosPosition: number[],
    sensorsData: SensorData[],
    name: string,
    isActive: boolean,
    change: (value: any) => void,
}

export const ColumnSensors: React.FC<ColumnSensorsProps> = ({
                                                                x,
                                                                z,
                                                                sensorsHeight,
                                                                silosPosition,
                                                                sensorsData,
                                                                name,
                                                                isActive,
                                                                change,
}) => {
    /*const spheresHeight: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];*/
    const suspensionWidth = isActive ? 0.05 : 0.01;

    return (
        <>
            {/*висоту /2 */}
            <mesh position={[x, sensorsHeight/2 + silosPosition[1], z]}>
                <cylinderGeometry args={[suspensionWidth, suspensionWidth, sensorsHeight]} />
                <meshStandardMaterial color={isActive ? 'blue' : 'black'} />

                <Html
                    distanceFactor={40}
                    position={[0, sensorsHeight + silosPosition[1], 0]}
                    style={{
                        userSelect: 'none',
                        cursor: 'pointer',

                }}
                >
                    <div
                        style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '100%',
                        height: '30%',
                        marginTop: "-7px"
                        }}
                        onClick={() => change(name)}
                    >{name}</div>
                </Html>
            </mesh>

            {sensorsData.map(value => {
                return <Sphere
                    key={value.id}
                    x={x}
                    y={value.height + silosPosition[1]}
                    z={z}
                    temp={value.temp}
                    color={value.color}
                    isActive={isActive}
                />
            })}
        </>
    )
}