import {useState} from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import {alpha} from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "src/redux/store.ts";
import {useRouter} from "src/hooks";
import {logoutUser} from "src/redux/slices/authSlice.ts";

const AccountPopover = () => {
  const [open, setOpen] = useState<HTMLButtonElement | null>(null);
  const {user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = async () => {
    await dispatch(logoutUser(null));
    router.push('/login')
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        <Avatar
          src={user.avatar}
          alt={user.display_name}
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        />
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        transformOrigin={{vertical: 'top', horizontal: 'right'}}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 200,
          },
        }}
      >
        <Box sx={{my: 1.5, px: 2}}>
          <Typography variant="subtitle2" noWrap>
            {user.display_name}
          </Typography>
          <Typography variant="body2" sx={{color: 'text.secondary'}} noWrap>
            {user.username}
          </Typography>
        </Box>

        <Divider sx={{borderStyle: 'dashed'}}/>

        <MenuItem onClick={() => {
          router.push('/')
          handleClose()
        }}>
          Home
        </MenuItem>
        <MenuItem onClick={() => {
          router.push('/redux-profile')
          handleClose()
        }}>
          Profile
        </MenuItem>
        <MenuItem onClick={() => {
          router.push('/settings')
          handleClose()
        }}>
          Settings
        </MenuItem>

        <Divider sx={{borderStyle: 'dashed', m: 0}}/>

        <MenuItem
          disableRipple
          disableTouchRipple
          onClick={handleLogout}
          sx={{typography: 'body2', color: 'error.main', py: 1.5}}
        >
          Logout
        </MenuItem>
      </Popover>
    </>
  );
};

export default AccountPopover;
