import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./Login.css";
import SectionCard from "../UI/SectionCard";
import { Link } from "react-router-dom";

function Login() {
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const paperStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: "50%",
    margin: "auto",
    boxShadow: "none",
    marginTop: "60px",
  };

  return (
    <SectionCard className="stylePadding">
      <div className="bg-img">
        <Grid>
          <Paper sx={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LoginIcon />
              </Avatar>
              <h2 style={{ marginBottom: 20 }}>Sign In</h2>
            </Grid>

            <div className="fieldmargin">
              <TextField
                label="Username"
                placeholder="Enter username"
                fullWidth
                required
              />
            </div>

            <div className="fieldmargin">
              <TextField
                label="Password"
                placeholder="Enter password"
                type="password"
                fullWidth
                required
              />
            </div>

            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Sign in
            </Button>

            <Typography>
              <Link href="#">Forgot password ?</Link>
            </Typography>

            <Typography>
              Do you have an account ?<Link to={"/Signup"}>Sign Up </Link>
            </Typography>
          </Paper>
        </Grid>
      </div>
    </SectionCard>
  );
}
export default Login;
