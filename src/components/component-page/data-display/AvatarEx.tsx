import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors'
export default function AvatarEx() {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Stack>
            <Stack direction="row" spacing={2}>
                <Avatar>H</Avatar>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            </Stack>
        </>
    );
}
