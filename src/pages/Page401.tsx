import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Logo from 'src/components/logo';
import {Link} from "react-router-dom";

// ----------------------------------------------------------------------

export default function Page401() {
  const renderHeader = (
    <Box
      component="header"
      sx={{
        top: 0,
        left: 0,
        width: 1,
        lineHeight: 0,
        position: 'fixed',
        p: (theme) => ({ xs: theme.spacing(3, 3, 0), sm: theme.spacing(5, 5, 0) }),
      }}
    >
      <Logo />
    </Box>
  );

  return (
    <>
      {renderHeader}

      <Container>
        <Box
          sx={{
            py: 12,
            maxWidth: 480,
            mx: 'auto',
            display: 'flex',
            minHeight: '100vh',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h3" sx={{ mb: 3 }}>
            Unauthorized Access
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Sorry, you are not authorized to access this page. Please login with appropriate credentials.
          </Typography>

          <Box
            component="img"
            src="/assets/401.svg"
            sx={{
              mx: 'auto',
              height: 260,
              my: 10,
            }}
          />

          <Link className="p-3 rounded bg-blue-600 text-white font-bold" to='/login'>
            Go to Login
          </Link>
        </Box>
      </Container>
    </>
  );
}
