import React, {useState} from 'react'
import { ColumnSensors } from './ColumnSensors';
import { Grain } from './Grain';
import {DoubleSide, RepeatWrapping, TextureLoader, Euler} from 'three';
import {useLoader} from "@react-three/fiber";

interface SilosProps {
    width: number,
    height: number,
    silosPosition: number[],
    silosOpacity: number,
    grainOpacity: number,
    grainCenterHeight: number,
    grainSideHeight: number,
}

const getRandomTemp = (min: number, max: number) => {
    return (Math.random() * (max - min) + min).toFixed(1);
};

const getColor = (temp: number) => {
    if (temp >= -20 && temp < -15) {
        return "blue";
    } else if (temp >= -15 && temp < -10) {
        return "cyan";
    } else if (temp >= -10 && temp < 20) {
        return "green";
    } else if (temp >= 20 && temp < 25) {
        return "orange";
    } else {
        return "red";
    }
};

console.log(
    Array.from({ length: 12 }, (v, i) => {
        const temp = getRandomTemp(-20, 30);
        return { id: i, temp: temp, height: 2 * i, color: getColor(+temp)};
    })
);


const data = [
    {
        grainBin: {
            name: 'Grain Bin #2',
            displayName: 'Grain Bin #2',
            binType: 'CIRCLE',
            annotations: 'some annotation',
            createdDate: '2024-01-12T09:15:00Z',
            createdBy: 'robert.johnson',
            lastModifiedDate: '2024-01-16T11:20:00Z',
            lastModifiedBy: 'robert.johnson',
            deleted: false,
        },
        thermalSuspensions: [
            {
                id: '5',
                name: 'Left Side Thermal Suspension A1',
                displayName: 'TS-A1-L',
                enabledCalculation: true,
                enabledUI: true,
                position: -1,
                theta: 0,
                sorting: 'ASC',
                deltaTemperature: 3.1,
                currentTemperature: 25.5,
                color: '#1d0ee7',
                annotations: 'Calibrated on 2024-01-15. Regular maintenance required.',
                createdDate: '2024-01-10T08:00:00Z',
                createdBy: 'john.doe',
                lastModifiedDate: '2024-01-15T14:30:00Z',
                lastModifiedBy: 'jane.smith',
                deleted: false,
                sensors: [
                    {
                        id: 5+1,
                        temp: 15.3,
                        height: 2 * 1,
                        color: getColor(15.3),
                    },
                    {
                        id: 5 + 2,
                        temp: 15.7,
                        height: 2 * 2,
                        color: getColor(15.3),
                    },
                    {
                        id: 5+3,
                        temp: 14.8,
                        height: 2 * 3,
                        color: getColor(15.3),
                    },
                    {
                        id: 5+4,
                        temp: 24.4,
                        height: 2 * 4,
                        color: getColor(24.4),
                    },
                    {
                        id: 5+5,
                        temp: 27.2,
                        height: 2 * 5,
                        color: getColor(27.2),
                    },
                    {
                        id: 5+6,
                        temp: 23.3,
                        height: 2 * 6,
                        color: getColor(23.3),
                    },
                    {
                        id: 5+7,
                        temp: 17.3,
                        height: 2 * 7,
                        color: getColor(17.3),
                    },
                    {
                        id: 5+8,
                        temp: 15.3,
                        height: 2 * 8,
                        color: getColor(15.3),
                    },
                    {
                        id: 5+9,
                        temp: 14.3,
                        height: 2 * 9,
                        color: getColor(15.3),
                    },
                    {
                        id: 5+10,
                        temp: 13.3,
                        height: 2 * 10,
                        color: getColor(15.3),
                    },
                    {
                        id: 5+11,
                        temp: 4.3,
                        height: 2 * 11,
                        color: 'white',
                    },
                    {
                        id: 5+12,
                        temp: 3.3,
                        height: 2 * 12,
                        color: 'white',
                    },
                    {
                        id: 5+13,
                        temp: 3.2,
                        height: 2 * 13,
                        color: 'white',
                    },
                    {
                        id: 5+14,
                        temp: 3.1,
                        height: 2 * 14,
                        color: 'white',
                    },
                ],
            },
            ...Array.from({ length: 6 }, (_, index) => {
                const thetaStep = 60;
                return {
                    id: (index + 123).toString(),
                    name: `Thermal Suspension A${index + 123}`,
                    displayName: `TS-A${index + 123}`,
                    enabledCalculation: true,
                    enabledUI: true,
                    position: 1,
                    theta: ((index + 1) * thetaStep) % 360,
                    sorting: 'ASC',
                    deltaTemperature: 3.1,
                    currentTemperature: 25.5,
                    color: '#328624',
                    annotations: 'Calibrated on 2024-01-15. Regular maintenance required.',
                    createdDate: '2024-01-10T08:00:00Z',
                    createdBy: 'john.doe',
                    lastModifiedDate: '2024-01-15T14:30:00Z',
                    lastModifiedBy: 'jane.smith',
                    deleted: false,
                    sensors:
                        [
                        {
                            id: 123+1,
                            temp: 15.3,
                            height: 2 * 1,
                            color: getColor(15.3),
                        },
                        {
                            id: 123 + 2,
                            temp: 15.7,
                            height: 2 * 2,
                            color: getColor(15.3),
                        },
                        {
                            id: 123+3,
                            temp: 14.8,
                            height: 2 * 3,
                            color: getColor(15.3),
                        },
                        {
                            id: 123+4,
                            temp: 16.4,
                            height: 2 * 4,
                            color: getColor(16.4),
                        },
                        {
                            id: 123+5,
                            temp: 17.2,
                            height: 2 * 5,
                            color: getColor(17.2),
                        },
                        {
                            id: 123+6,
                            temp: 19.3,
                            height: 2 * 6,
                            color: getColor(19.3),
                        },
                        {
                            id: 123+7,
                            temp: 17.3,
                            height: 2 * 7,
                            color: getColor(17.3),
                        },
                        {
                            id: 123+8,
                            temp: 15.3,
                            height: 2 * 8,
                            color: getColor(15.3),
                        },
                        {
                            id: 123+9,
                            temp: 9.3,
                            height: 2 * 9,
                            color: 'cyan',
                        },
                        {
                            id: 123+10,
                            temp: 5.3,
                            height: 2 * 10,
                            color: 'white',
                        },
                        {
                            id: 125+11,
                            temp: 4.3,
                            height: 2 * 11,
                            color: 'white',
                        },
                        {
                            id: 123+12,
                            temp: 3.3,
                            height: 2 * 12,
                            color: 'white',
                        },
                        {
                            id: 123+13,
                            temp: 3.2,
                            height: 2 * 13,
                            color: 'white',
                        },
                    ],
                };
            }),
        ],
    },
    {
        grainBin: {
            name: 'Grain Bin #1',
            displayName: 'Grain Bin #1',
            binType: 'CIRCLE',
            annotations: 'some annotation',
            createdDate: '2024-01-12T09:15:00Z',
            createdBy: 'robert.johnson',
            lastModifiedDate: '2024-01-16T11:20:00Z',
            lastModifiedBy: 'robert.johnson',
            deleted: false,
        },
        thermalSuspensions: [
            {
                id: '1',
                name: 'Left Side Thermal Suspension A1',
                displayName: 'TS-A1-L',
                enabledCalculation: true,
                enabledUI: true,
                position: 1,
                theta: 158.5,
                sorting: 'ASC',
                deltaTemperature: 3.1,
                currentTemperature: 25.5,
                color: '#328624',
                annotations: 'Calibrated on 2024-01-15. Regular maintenance required.',
                createdDate: '2024-01-10T08:00:00Z',
                createdBy: 'john.doe',
                lastModifiedDate: '2024-01-15T14:30:00Z',
                lastModifiedBy: 'jane.smith',
                deleted: false,
                sensors: Array.from({ length: 12 }, (v, i) => {
                    const temp = getRandomTemp(-20, 30);
                    return { id: i, temp: temp, height: 2 * i, color: getColor(+temp)};
                }),
            },
            {
                id: '2',
                name: 'Right Side Thermal Suspension B2',
                displayName: 'TS-B2-R',
                enabledCalculation: true,
                enabledUI: false,
                position: 2,
                theta: -30.0,
                sorting: 'DESC',
                deltaTemperature: 3.1,
                currentTemperature: 25.5,
                color: '#328624',
                annotations: 'Under maintenance. Sensor calibration pending.',
                createdDate: '2024-01-12T09:15:00Z',
                createdBy: 'robert.johnson',
                lastModifiedDate: '2024-01-16T11:20:00Z',
                lastModifiedBy: 'robert.johnson',
                deleted: false,
                sensors: Array.from({ length: 10 }, (v, i) => {
                    const temp = getRandomTemp(-20, 30);
                    return { id: i, temp: temp, height: 2 * i, color: getColor(+temp)};
                }),
            },
            {
                id: '3',
                name: 'Center Thermal Suspension C3',
                displayName: 'TS-C3',
                enabledCalculation: false,
                enabledUI: true,
                position: 2,
                theta: 0.0,
                sorting: 'ASC',
                deltaTemperature: 3.1,
                currentTemperature: 25.5,
                color: '#328624',
                annotations: 'Deactivated for system upgrade',
                createdDate: '2024-01-14T10:30:00Z',
                createdBy: 'alice.brown',
                lastModifiedDate: '2024-01-14T10:30:00Z',
                lastModifiedBy: 'alice.brown',
                deleted: true,
                sensors: Array.from({ length: 10 }, (v, i) => {
                    const temp = getRandomTemp(-20, 30);
                    return { id: i, temp: temp, height: 2 * i, color: getColor(+temp)};
                }),
            },
            {
                id: '4',
                name: 'Center Thermal Suspension C4',
                displayName: 'TS-C4',
                enabledCalculation: false,
                enabledUI: true,
                position: 0,
                theta: 15.0,
                sorting: 'ASC',
                deltaTemperature: 3.1,
                currentTemperature: 25.5,
                color: '#328624',
                annotations: 'Deactivated for system upgrade',
                createdDate: '2024-01-14T10:30:00Z',
                createdBy: 'alice.brown',
                lastModifiedDate: '2024-01-14T10:30:00Z',
                lastModifiedBy: 'alice.brown',
                deleted: true,
                sensors: Array.from({ length: 14 }, (v, i) => {
                    const temp = getRandomTemp(-20, 30);
                    return { id: i, temp: temp, height: 2 * i, color: getColor(+temp)};
                }),
            },
            {
                id: '5',
                name: 'Center Thermal Suspension C5',
                displayName: 'TS-C5',
                enabledCalculation: false,
                enabledUI: true,
                position: 0,
                theta: 240.0,
                sorting: 'ASC',
                deltaTemperature: 3.1,
                currentTemperature: 25.5,
                color: '#e61616',
                annotations: 'Deactivated for system upgrade',
                createdDate: '2024-01-14T10:30:00Z',
                createdBy: 'alice.brown',
                lastModifiedDate: '2024-01-14T10:30:00Z',
                lastModifiedBy: 'alice.brown',
                deleted: true,
                sensors: Array.from({ length: 14 }, (v, i) => {
                    const temp = getRandomTemp(-20, 30);
                    return { id: i, temp: temp, height: 2 * i, color: getColor(+temp)};
                }),
            },
            {
                id: '6',
                name: 'Center Thermal Suspension C6',
                displayName: 'TS-C6',
                enabledCalculation: false,
                enabledUI: true,
                position: 0,
                theta: 140.0,
                sorting: 'ASC',
                deltaTemperature: 3.1,
                currentTemperature: 25.5,
                color: '#e61616',
                annotations: 'Deactivated for system upgrade',
                createdDate: '2024-01-14T10:30:00Z',
                createdBy: 'alice.brown',
                lastModifiedDate: '2024-01-14T10:30:00Z',
                lastModifiedBy: 'alice.brown',
                deleted: true,
                sensors: Array.from({ length: 14 }, (v, i) => {
                    const temp = getRandomTemp(-20, 30);
                    return { id: i, temp: temp, height: 2 * i, color: getColor(+temp)};
                }),
            },
            ...Array.from({ length: 8 }, (_, index) => {
                const thetaStep = 40;
                return {
                    id: (index + 30).toString(),
                    name: `Thermal Suspension A${index + 7}`,
                    displayName: `TS-A${index + 2}`,
                    enabledCalculation: true,
                    enabledUI: true,
                    position: 1,
                    theta: (158.5 + (index + 1) * thetaStep) % 360,
                    sorting: 'ASC',
                    deltaTemperature: 3.1,
                    currentTemperature: 25.5,
                    color: '#328624',
                    annotations: 'Calibrated on 2024-01-15. Regular maintenance required.',
                    createdDate: '2024-01-10T08:00:00Z',
                    createdBy: 'john.doe',
                    lastModifiedDate: '2024-01-15T14:30:00Z',
                    lastModifiedBy: 'jane.smith',
                    deleted: false,
                    sensors: Array.from({ length: 12 }, (v, i) => {
                        const temp = getRandomTemp(-20, 30);
                        const color =  getColor(+temp);
                        return { id: i, temp: temp, height: 2 * i, color: color};
                    }),
                };
            }),
        ],
    },
];

const calculateCoordinates = (
    x0: number,
    y0: number,
    r: number,
    theta: number
) => {
    const thetaRadians = (theta * Math.PI) / 180;
    const x = x0 + r * Math.cos(thetaRadians);
    const y = y0 + r * Math.sin(thetaRadians);
    return { x, y };
};

const silosConstantWidth = 32;

export const Silos: React.FC<SilosProps> = ({
                                                width,
                                                height,
                                                silosPosition,
                                                silosOpacity,
                                                grainOpacity,
                                                grainCenterHeight,
                                                grainSideHeight,
}) => {
    const [activeThermalSuspension, setActiveThermalSuspension] = useState('');
    const silosConstantHeight = silosConstantWidth * height / width;
    const cylinderHeight = silosConstantHeight * 0.85;
    const coneHeight = silosConstantHeight * 0.15;
    const exCirclies = 3;
    const baseRadius = (silosConstantWidth / 2) / (exCirclies + 1);

    const radii = {
        '-1': 0.01,
        0: baseRadius,
        1: baseRadius * 2,
        2: baseRadius * 3,
    };

    const texture = useLoader(TextureLoader, 'metal.jpg');

    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(32, 1);

    return (
        <>
            {/*нижній циліндр*/}
            {(grainCenterHeight - grainSideHeight) > 0 ? (
                <mesh position={[silosPosition[0], cylinderHeight / 2 + silosPosition[1], silosPosition[2]]}>
                    <cylinderGeometry args={[silosConstantWidth / 2, silosConstantWidth / 2, cylinderHeight, 32, 1, true]} />  Конус
                    <meshStandardMaterial map={texture} transparent={true} opacity={silosOpacity} depthWrite={false} />
                </mesh>
            ) : (
                <>
                    <mesh position={[silosPosition[0], grainSideHeight / 2 + silosPosition[1], silosPosition[2]]}>
                        <cylinderGeometry args={[silosConstantWidth / 2, silosConstantWidth / 2, grainSideHeight, 32, 1, true]} />  Конус
                        <meshStandardMaterial map={texture} transparent={true} opacity={silosOpacity} depthWrite={true} />
                    </mesh>

                    <mesh position={[silosPosition[0], grainSideHeight + (cylinderHeight - grainSideHeight) / 2 + silosPosition[1], silosPosition[2]]}>
                        <cylinderGeometry args={[silosConstantWidth / 2, silosConstantWidth / 2, (cylinderHeight - grainSideHeight), 32, 1, true]} />  Конус
                        <meshStandardMaterial map={texture} transparent={true} opacity={silosOpacity} depthWrite={true} />
                    </mesh>
                </>
            )}

             {/*верхній циліндр*/}
            <mesh position={[silosPosition[0], cylinderHeight + coneHeight / 2 + silosPosition[1], silosPosition[2]]}>
                <cylinderGeometry args={[2, silosConstantWidth / 2, coneHeight, 32, 1, true]} />
                <meshStandardMaterial map={texture} transparent={true} opacity={silosOpacity} />
            </mesh>

            {/*відкривашка*/}
            <mesh position={[silosPosition[0], cylinderHeight + coneHeight + silosPosition[1], silosPosition[2]]}>
                <cylinderGeometry args={[2, 2, 0.1, 32, 1, false]} />
                <meshStandardMaterial map={texture} transparent={true} opacity={silosOpacity} />
            </mesh>

             {/*земелька*/}
            <mesh position={[silosPosition[0], silosPosition[1], silosPosition[2]]}>
                <cylinderGeometry args={[silosConstantWidth / 2, silosConstantWidth / 2, 0.1, 32, 1, false]} />
                <meshStandardMaterial map={texture} transparent={true} opacity={silosOpacity} depthWrite={false}/>
            </mesh>

            {/*подвески*/}
            {data[0].thermalSuspensions.map((suspension: any, index: number) => {
                const suspensionPosition = suspension.position as -1 | 0 | 1 | 2;
                const suspensionRadius = radii[suspensionPosition];

                const { x, y } = calculateCoordinates(
                    0,
                    0,
                    suspensionRadius,
                    suspension.theta
                );

                return (
                            <ColumnSensors
                                key={x + '' + y}
                                x={x} z={y}
                                sensorsHeight={ suspensionPosition === 0 ? cylinderHeight + 3 : suspensionPosition === -1 ? cylinderHeight + 3 : cylinderHeight}
                                silosPosition={silosPosition}
                                sensorsData={suspension.sensors}
                                name={suspension.displayName}
                                isActive={activeThermalSuspension === suspension.displayName}
                                change={(value) => setActiveThermalSuspension(value)}
                            />
                )})}

            <Grain
                grainCenterHeight={grainCenterHeight}
                grainSideHeight={grainSideHeight}
                grainOpacity={grainOpacity}
                silosPosition={silosPosition}
            />
        </>
    )
}