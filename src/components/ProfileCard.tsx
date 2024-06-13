import {useSelector} from "react-redux";
import {RootState} from "../redux/store.ts";
import {Avatar, Box, Link, Typography} from "@mui/material";
import {Link as RouterLink} from 'react-router-dom';

const ProfileCard = () => {
    const profile = useSelector((state: RootState) => state.auth)
    return (
        <Link className="flex gap-2" underline="none" color="inherit" component={RouterLink} to={'/profile'}>
            <Avatar
                src={profile.user.avatar}
                alt={profile.user.username}
            />

            <Box>
                <Typography variant="subtitle2" noWrap>
                    {profile.user.display_name}
                </Typography>
                <Typography variant="body2" noWrap sx={{ color: 'text.secondary' }}>
                    {profile.user.username}
                </Typography>
            </Box>
        </Link>
    );
};

export default ProfileCard;
