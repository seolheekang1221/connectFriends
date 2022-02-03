import React, { useState } from "react";
import {
  Avatar,
  TextField,
  Checkbox,
  Button,
  Link,
  Box,
  Grid,
  Typography,
  Container,
  FormControlLabel,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

export default function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const nameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const emailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const checkPasswordHandler = (e) => {
    setCheckPassword(e.currentTarget.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== checkPassword) {
      return alert("Password is incorrect");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 2, backgroundColor: "purple" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <TextField
            margin="normal"
            label="name"
            required
            fullWidth
            name="name"
            autoComplete="name"
            autoFocus
            onChange={nameHandler}
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
            onChange={emailHandler}
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
            onChange={passwordHandler}
            value={password}
          />
  
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link>Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link>Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </form>
  );
}
