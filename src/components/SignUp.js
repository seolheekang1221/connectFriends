import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../actions/auth";
import { isEmail } from "validator";
import { LockOutlined } from "@mui/icons-material";
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

const required = (value) => {
  if (!value) {
    return (
      <div className="alert" role="alert">
        This field is required!
      </div>
    );
  }
};
const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const checkName = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const checkPassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { message } = useSelector(state => state.message);
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
  const handleSignUp = (e) => {
    e.preventDefault()
    setLoading(false);
  };
//   if (!(error)) {
//     dispatch(register(username, email, password))
//       .then(() => {
//         setSuccessful(true);
//       })
//       .catch(() => {
//         setSuccessful(false);
//       });
//   }
// };

  return (
    <form onSubmit={handleSignUp}>
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
            onChange={onChangeName}
            value={name}
            validations={[required]}
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
            validations={[required]}
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
            validations={[required]}
          />
  
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        
        </Box>
      </Container>
    </form>
  );
}

