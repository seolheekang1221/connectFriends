import React from "react";
import { logout, selectUser } from "./userSlice";
import { Button, Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const Logout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div>
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
            sx={{ mt: 3, mb: 2 }}
          >
            Logout
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Logout;
