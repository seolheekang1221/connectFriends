import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "./userSlice";
import {
  Avatar,
  TextField,
  Button,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };
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
      signUp({
        name: name,
        email: email,
        password: password,
        signedIn: true,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
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
              <Avatar sx={{ m: 2, backgroundColor: "red" }}>
                <LockOutlined />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              <TextField
                margin="normal"
                label="User Name"
                required
                fullWidth
                name="name"
                autoComplete="name"
                autoFocus
                onChange={onChangeName}
                value={name}
              />
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
                sx={{ mt: 3, mb: 2, bgcolor: "background.main" }}
              >
                SignUp
              </Button>
            </Box>
          </Container>
        </ThemeProvider>
      </form>
    </div>
  );
};

export default SignUp;
