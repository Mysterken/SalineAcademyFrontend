import {Box, Button, Typography} from '@mui/material';
import {purple} from '@mui/material/colors';

export {Page}

const primary = purple[500]; // #f44336

function Page() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{color: 'white'}}>
        404
      </Typography>
      <Typography variant="h6" style={{color: 'white'}}>
        The page you’re looking for doesn't exist.
      </Typography>
      <Button variant="contained" href="/home">Back Home</Button>
    </Box>
  );
}
