import React from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';
import Link from 'next/link';

const Register = () => {

  return (
    <Container>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="First Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Last Name"
              variant="outlined"
            />
          </Grid>
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
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
            <Link href={'login'}>
                <Button variant="contained" color="primary">
                Login
                </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Register;
