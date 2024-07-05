import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const defaultTheme = createTheme();

const LoginComp = () => {
  const nav = useNavigate();

  // State for form errors
  const [errors, setErrors] = React.useState({});

  const redirectSignup = () => {
    nav('/signup');
  };

  const redirectForgot = () => {
    nav('/forgot');
  };

  const validateForm = (email, password) => {
    const errors = {};

    if (!email || email.trim() === '') {
      errors.email = 'Email is required';
    }

    if (!password || password.trim() === '') {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get('email').trim();
    let password = data.get('password').trim();


    const validationErrors = validateForm(email, password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await axios.get("http://localhost:8888/users");
      let usersData = res.data;

      const user = usersData.find((val) => val.useremail === email);

      if (!user) {
        setErrors({ email: 'Invalid email' });
        return;
      }

      if (user.userpassword !== password) {
        setErrors({ password: 'Invalid password' });
        return;
      }

      if (user.useremail === "victor@gmail.com" && user.userpassword === "victor123") {
        nav("/AdminDash");
        sessionStorage.setItem("user", email);
      } else {
        nav("/MainDashbord");
        sessionStorage.setItem("user", email);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      window.alert('An error occurred while logging in. Please try again.');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={!!errors.email}
              helperText={errors.email}
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
              error={!!errors.password}
              helperText={errors.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link component="button" variant="text" onClick={redirectSignup}>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginComp;
