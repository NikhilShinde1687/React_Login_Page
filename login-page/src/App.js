// App.js
import React, { useState } from 'react';
import { Container, TextField, Button, Checkbox, FormControlLabel, Link, Typography, Box } from '@mui/material';

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="m" style={{ backgroundColor: '#59c4a5', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'white',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center'
        }}
      >
        <Typography variant="h5" gutterBottom>
          <h5 style={{ color: '#0b857a' }}>Login</h5>
        </Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox checked={showPassword} onChange={handleShowPasswordChange} color="primary" />}
            label="Show Password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ backgroundColor: '#0f8880', color: 'white', margin: '24px 0 16px', '&:hover': { backgroundColor: '#0d6f6a' } }}
          >
            Sign In
          </Button>
          <Link style={{ color: '#0b857a' }} href="#" variant="body2">
            Forgot Username / Password?
          </Link>
          <br />
          <Link style={{ color: '#0b857a' }} href="#" variant="body2">
            {"Don't have an account? Sign up"}
          </Link>
        </form>
      </Box>
    </Container>
  );
}

export default App;
