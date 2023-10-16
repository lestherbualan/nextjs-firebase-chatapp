import React from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';
import Link from 'next/link';

const Login = () => {

  return (
    <Container>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Link href={'/message'}>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </Link>
            <Link href={'register'}>
              <Button variant="contained" color="primary">
                Register
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
