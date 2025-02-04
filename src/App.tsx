import { useState } from "react";
import { Slider, Box, Typography } from "@mui/material";

import { SomeView } from './3d/Scene';

export default function App() {
    const [width, setWidth] = useState(20);
    const [height, setHeight] = useState(20);
    const [grainCenterHeight, setGrainCenterHeight] = useState(30);
    const [grainSideHeight, setGrainSideHeight] = useState(20);
    const [silosOpacity, setSilosOpacity] = useState(0.3);
    const [grainOpacity, setGrainOpacity] = useState(0.2);

    return (
        <>
            <div style={{
                width: "calc(90vw - 300px)",
                height: "90vh",
                border: "2px solid black",
                position: "absolute",
                top: "50%",
                left: "calc(50% - 200px)",
                transform: "translate(-50%, -50%)",
                boxSizing: "border-box",
            }}>
                <SomeView
                    width={width}
                    height={height}
                    silosOpacity={silosOpacity}
                    grainOpacity={grainOpacity}
                    grainCenterHeight={grainCenterHeight}
                    grainSideHeight={grainSideHeight}
                />
            </div>

            <Box sx={{ width: 300, p: 2 }}>
                <Typography>Ширина силоса: {width}</Typography>
                <Slider value={width} onChange={(_, v) => setWidth(v as number)} min={5} max={100} />

                <Typography>Висота силоса: {height}</Typography>
                <Slider value={height} onChange={(_, v) => setHeight(v as number)} min={5} max={100} />

                <Typography>Висота зерна - центр: {grainCenterHeight}</Typography>
                <Slider value={grainCenterHeight} onChange={(_, v) => setGrainCenterHeight(v as number)} min={5} max={80} />

                <Typography>Висота зерна - бічна: {grainSideHeight}</Typography>
                <Slider value={grainSideHeight} onChange={(_, v) => setGrainSideHeight(v as number)} min={5} max={80} />

                <Typography>Прозорість силоса: {silosOpacity.toFixed(2)}</Typography>
                <Slider value={silosOpacity} onChange={(_, v) => setSilosOpacity(v as number)} min={0} max={1} step={0.01} />

                <Typography>Прозорість зерна: {grainOpacity.toFixed(2)}</Typography>
                <Slider value={grainOpacity} onChange={(_, v) => setGrainOpacity(v as number)} min={0} max={1} step={0.01} />
            </Box>
        </>
    )
}
