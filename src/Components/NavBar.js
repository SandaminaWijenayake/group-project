import React, { useContext } from "react";
import {
  CssBaseline,
  Typography,
  Toolbar,
  Divider,
  List,
  AppBar,
} from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { GlobleContext } from "../GlobleState/GlobleState";

//-------------------------------------

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const NavBar = () => {
  const { setIsSignedIn } = useContext(GlobleContext);

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const editProfileHandler = () => {
    navigate("/EditProfile");
    setAnchorEl(null);
  };

  const aboutUsHandler = () => {
    navigate("/AboutUs");
    setAnchorEl(null);
  };

  const signOutHandler = () => {
    setAnchorEl(null);
    signOut(auth)
      .then(() => {
        setIsSignedIn(false);
        console.log("signout");
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                marginLeft: " 100px",
              }}
            >
              Kapuwa.lk
            </Typography>
          </Link>

          <Divider />
          <List sx={{ marginLeft: "auto", padding: "0px 100px" }}>
            <span>
              <MenuIcon
                fontSize="large"
                sx={{ color: "white" }}
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />

              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={editProfileHandler}>Profile</MenuItem>
                <MenuItem onClick={aboutUsHandler}>About us</MenuItem>
                <Link
                  to="/Login"
                  style={{ textDecoration: "none", color: "red" }}
                >
                  <MenuItem onClick={signOutHandler}>Logout</MenuItem>
                </Link>
              </Menu>
            </span>
          </List>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default NavBar;
