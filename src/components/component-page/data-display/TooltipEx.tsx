import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function TooltipEx() {
    return (
        <Tooltip title="Delete">
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    );
}
