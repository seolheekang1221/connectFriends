import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./userSlice";
import Image from "../img/background.jpg";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
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

const theme = createTheme({
  palette: {
    background: {
      light: "#8d4f60",
      main: "#212121",
      dark: "#320010",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
});

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
  },
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <Paper
      style={styles.paperContainer}
      sx={{
        backgroundPosition: "center",
        padding: "0.2em",
        width: "180vh",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 0.9,
      }}
    >
      <form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container component="main" maxWidth="sm">
            <Box
              sx={{
                marginTop: 38,
                width: 500,
                height: 300,
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: 1,
                borderRadius: 4,
              }}
            >
              <Avatar
                sx={{
                  m: 2,
                  bgcolor: "background.main",
                  boxShadow: 1,
                  borderRadius: 2,
                }}
              >
                <LockOutlined />
              </Avatar>
              <Typography
                sx={{
                  fontSize: 30,
                  fontWeight: "bold",
                  fontDisplay: "swap",
                  fontSpacing: "10px",
                }}
                component="h2"
                variant="h5"
              >
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
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "background.main" }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="./ForgotPassword"
                    sx={{
                      color: "background.contrastText",
                      fontFamily: "Raleway",
                    }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="./SignUp"
                    sx={{
                      color: "background.contrastText",
                      fontFamily: "Raleway",
                    }}
                  >
                    Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </ThemeProvider>
      </form>
    </Paper>
  );
};

export default Login;
