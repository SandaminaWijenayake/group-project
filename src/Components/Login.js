import React, { useState } from "react";
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
// import { auth } from "../config/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const paperStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: "50%",
    margin: "auto",
    boxShadow: "none",
    marginTop: "60px",
  };
  const signin = async (e) => {
    // e.preventDefault();
    // try {
    //   await createUserWithEmailAndPassword(auth, email, password);
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <form onSubmit={signin}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email"
                  placeholder="Enter email"
                  fullWidth
                  required
                />
              </div>

              <div className="fieldmargin">
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                Don't you have an account?<Link to={"/Signup"}>Sign Up </Link>
              </Typography>
            </Paper>
          </Grid>
        </div>
      </SectionCard>
    </form>
  );
};
export default Login;
