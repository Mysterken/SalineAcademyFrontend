import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Copyright from "../component/Copyright.jsx";
import Navbar from "../component/Navbar.jsx";
import {login} from "../API/user.js";
import {useEffect} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

export {Page}

const defaultTheme = createTheme();

function Page() {

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.href = "/home"
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login({
      username: data.get('email'),
      password: data.get('password'),
    }).then(
      (response) => {
        if (response.status === 200) {
          toast.success('Successfully logged in', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          setTimeout(() => window.location.href = "/home", 3000)
        } else {
          toast.error(response.message, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    );
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar/>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputProps={{style: {color: "white"}}}
              InputLabelProps={{style: {color: "white"}}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputProps={{style: {color: "white"}}}
              InputLabelProps={{style: {color: "white"}}}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt: 3, mb: 2}}
            >
              Sign In
            </Button>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
              theme="light"
            />
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{mt: 8, mb: 4, color: "white"}}/>
      </Container>
    </ThemeProvider>
  );
}
