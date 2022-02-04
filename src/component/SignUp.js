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
  const [hiddenPassword, setHiddenPassword] = useState("true");
  const [error, setError] = useState("null");
  const [errorCheck, setErrorCheck] = useState("false");

  noError = e => {
    this.setState({
      errorCheck: false
    });
  };

  passwordCheck = () => this.state.password === this.state.checkPassword;
  
  showPassword = () => {
    this.setState(prevState => ({ hiddenPassword: !prevState.hiddenPassword }));
  };

  emailValid = () => {
    if (this.state.email === ""){
      return false;
    }
    return true;
  };

  handleState = name => e => {
    this.setState({
      [name]: e.target.value
    });
  }; 
  
  submitSignUp = e => {
    e.preventDefault();
    if (!this.passwordCheck()) {
      this.setState({
        errorCheck: true,
        error: "You can sign up"
      });
    } 

  const newUser = {
    email: this.state.email,
    password: this.state.password,
    checkPassword: this.state.checkPassword
  };
  console.log("new user", newUser);
};

  return (
    <form onSubmit={() => this.submitSignUp}>
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
