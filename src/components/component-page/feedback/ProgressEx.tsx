import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from "@mui/material/Box";
import {LinearProgress} from "@mui/material";

export default function ProgressEx() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
            <Stack spacing={2} direction="row">
                <CircularProgress variant="determinate" value={25} />
                <CircularProgress variant="determinate" value={50} />
                <CircularProgress variant="determinate" value={75} />
                <CircularProgress variant="determinate" value={100} />
                <CircularProgress variant="determinate" value={progress} />
            </Stack>
            <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" value={progress} />
            </Box>
        </>
    );
}
