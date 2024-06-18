import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingScreen() {
    return (
        <Box className="flex justify-center h-full items-center">
            <CircularProgress />
        </Box>
    );
}
