// src/pages/Login.tsx
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Avatar, Link, Grid2 } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({ email: '', password: '' });
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

    // Mock user credentials
    const mockUser = {
      email: 'test@test.com',
      password: 'password',
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;

    // Simulate an API call
    if (email === mockUser.email && password === mockUser.password) {
      // Mock success: store token and redirect
      localStorage.setItem('authToken', 'mock-token');
      navigate('/datatable'); // Redirect to datatable after successful login
    } else {
      setError('Invalid email or password');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container component="main" maxWidth="xs">
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
          Login
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid2 container spacing={2}>
            {/* <Grid2 xs={6}> */}
              {/* Add forgot password link here */}
              <Link href="/recover-password" variant="body2">
                Forgot password?
              </Link>
            {/* </Grid2> */}
            {/* <Grid2 xs={6} display="flex" justifyContent="flex-end"> */}
              {/* Add signup link here */}
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            {/* </Grid2> */}
          </Grid2>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
