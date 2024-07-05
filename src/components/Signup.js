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

const Signup = () => {
  const nav = useNavigate();

  // State variables for form fields and errors
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [useremail, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [userpassword, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const [errors, setErrors] = React.useState({});

  // Function to validate the form fields
  const validateForm = async () => {
    const errors = {};

    // Helper function to check if a field is empty or contains only spaces
    const isEmptyOrSpaces = (str) => !str || str.trim().length === 0;

    // Validate email
    if (isEmptyOrSpaces(useremail)) {
      errors.useremail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(useremail)) {
      errors.useremail = 'Email address is invalid';
    } else {
      // Check if email already exists
      try {
        const response = await axios.get(`http://localhost:8888/users?useremail=${useremail}`);
        if (response.data.length > 0) {
          errors.useremail = 'Email address is already registered';
        }
      } catch (error) {
        console.error('Error checking email:', error);
        window.alert('Error checking email. Please try again.');
      }
    }

    // Validate phone number
    if (isEmptyOrSpaces(phoneNumber)) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = 'Phone Number must be a 10-digit number';
    }

    // Validate password
    if (isEmptyOrSpaces(userpassword)) {
      errors.userpassword = 'Password is required';
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(userpassword)) {
      errors.userpassword = 'Password must contain at least one uppercase letter, one lowercase letter, one special character, and one digit';
    }

    // Validate other fields
    if (isEmptyOrSpaces(firstName)) errors.firstName = 'First Name is required';
    if (isEmptyOrSpaces(lastName)) errors.lastName = 'Last Name is required';
    if (isEmptyOrSpaces(username)) {
      errors.username = 'Username is required';
    } else {
      // Check if username already exists
      try {
        const response = await axios.get(`http://localhost:8888/users?username=${username}`);
        if (response.data.length > 0) {
          errors.username = 'Username is already taken';
        }
      } catch (error) {
        console.error('Error checking username:', error);
        window.alert('Error checking username. Please try again.');
      }
    }
    if (isEmptyOrSpaces(address)) errors.address = 'Address is required';
    if (userpassword !== confirmPassword) errors.confirmPassword = 'Passwords do not match';

    return errors;
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form
    const validationErrors = await validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form data
    const userData = {
      firstName,
      lastName,
      username,
      useremail,
      phoneNumber,
      address,
      userpassword,
    };

    // Example of axios post request
    try {
      await axios.post(`http://localhost:8888/users`, userData);
      window.alert("creating account successfully !")
      nav('/login');
    } catch (error) {
      console.error('Error adding user:', error);
      window.alert('Error adding user. Please try again.');
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  autoComplete="given-name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!errors.username}
                  helperText={errors.username}
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!errors.useremail}
                  helperText={errors.useremail}
                  fullWidth
                  id="useremail"
                  label=" email"
                  name="useremail"
                  value={useremail}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!errors.address}
                  helperText={errors.address}
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!errors.userpassword}
                  helperText={errors.userpassword}
                  fullWidth
                  id="userpassword"
                  label="userpassword"
                  name="userpassword"
                  type="password"
                  value={userpassword}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component="button" variant="body2" onClick={() => nav('/login')}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;