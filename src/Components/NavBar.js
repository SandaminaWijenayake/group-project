import React, { useContext } from "react";
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
import MenuIcon from "@mui/icons-material/Menu";
import { GlobleContext } from "../GlobleState/GlobleState";

//-------------------------------------

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const button = {
  background: "orange",
  color: "black",
  ":hover": {
    bgcolor: "#fc9300",
    color: "#ffff",
  },
};

const NavBar = () => {
  const { loggedIn } = useContext(GlobleContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          <Link to="/" style={{ textDecoration: "none" }}>
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
            <Link to="/Login">
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

            <span>
              {loggedIn && (
                <MenuIcon
                  fontSize="large"
                  sx={{ color: "white" }}
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />
              )}
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </span>
          </List>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
