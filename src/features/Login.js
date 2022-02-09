import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./userSlice";

import Image from "../img/backgroundImg.jpg";
import {
  Avatar,
  TextField,
  Button,
  Link,
  Box,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import Paper from "@mui/material/Paper";

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`
      
  }
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <Paper style={styles.paperContainer}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Container component="main" maxWidth="sm">
          <Box
            sx={{
              marginTop: 30,
              width: 500,
              height: 300,
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 2, backgroundColor: "green" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <TextField
              margin="normal"
              label="Email Address"
              required
              fullWidth
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onChangeEmail}
              value={email}
            />
            <TextField
              margin="normal"
              label="Password"
              type="password"
              required
              fullWidth
              name="password"
              autoComplete="password"
              onChange={onChangePassword}
              value={password}
            />
            <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="./ForgotPassword">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link href="./SignUp">Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </form>
    </Paper>
  );
};

export default Login;
