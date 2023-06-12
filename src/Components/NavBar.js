import React from "react";
import {
  Button,
  CssBaseline,
  Typography,
  Toolbar,
  Divider,
  List,
  AppBar,
} from "@mui/material";
import { Link } from "react-router-dom";

const button = {
  background: "orange",
  color: "black",
  ":hover": {
    bgcolor: "#fc9300",
    color: "#ffff",
  },
};

const NavBar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="relative"
        sx={{
          color: "black",
          backgroundColor: "Black",
          padding: "10px",
        }}
      >
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                marginLeft: " 100px",
              }}
            >
              Kapuva.lk
            </Typography>
          </Link>

          <Divider />
          <List sx={{ marginLeft: "auto", padding: "0px 100px" }}>
            <Link to="/Sign-up">
              <Button
                // sx={button}
                sx={button}
                variant="contained"
                size="large"
                // sx={{ marginLeft: "10px" }}
              >
                Sign-in/Log-in
              </Button>
            </Link>
          </List>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
