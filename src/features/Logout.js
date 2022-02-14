import React from "react";
import { logout, selectUser } from "./userSlice";
import { Button, Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
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

const Logout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
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
          <h1>
            Hi! <span className="user_name">{user.email}</span>
          </h1>
          <Button
            type="submit"
            color="primary"
            onClick={(e) => handleLogout(e)}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "background.main" }}
          >
            Logout
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Logout;
