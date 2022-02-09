import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("false");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangeLoading = (e) => {
    const loading = e.target.value;
    setLoading(loading);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div>
      {loading ? <h4>Loading</h4> : <h4>Forgot Password</h4>}
      <form onSubmit={(e) => handleSubmit(e)}>
      <Container component="main" maxWidth="sm">
          <Box
            sx={{
              marginTop: 30,
              right: 25,
              width: 500,
              height: 300,
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 2, backgroundColor: "pulple" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Forgot your password?
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
            <Button
              type="submit"
              color="primary"
              disabled={!email}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Password reset
            </Button>
          </Box>
        </Container>
      </form>
    </div>
  );
};

export default ForgotPassword;
