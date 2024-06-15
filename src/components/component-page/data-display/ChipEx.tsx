import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ChipEx() {
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <Stack direction="row" spacing={1}>
            <Chip label="Chip Filled" />
            <Chip label="Chip Outlined" variant="outlined" />

            <Stack direction="row" spacing={1}>
                <Chip label="Clickable" onClick={handleClick} />
                <Chip label="Clickable" variant="outlined" onClick={handleClick} />
            </Stack>

            <Stack direction="row" spacing={1}>
                <Chip label="Deletable" onDelete={handleDelete} />
                <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
            </Stack>
        </Stack>
    );
}
