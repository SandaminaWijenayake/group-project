import React, { useContext, useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Message from "./Message";
import { GlobleContext } from "../GlobleState/GlobleState";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessageAuth] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const { setIsSignedIn } = useContext(GlobleContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        if (user) {
          setIsSignedIn(true);
          navigate("/home");
        } else {
          setIsSignedIn(false);
          setIsLoading(false);
        }
      },
      (err) => {
        setIsLoading(false);
      }
    );
    return unsubscribe;
  }, [navigate, setIsSignedIn]);

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
    e.preventDefault();

    // console.log(isSignedIn);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsSignedIn(true);
      navigate("/home");
    } catch (err) {
      console.error(err);
      setError(true);
      setMessageAuth("invalid user name or password");
    }
  };

  const cloesThePropt = () => {
    setError(false);
  };
  if (isLoading) {
    return <div className="loadingPage">loading...</div>;
  }

  return (
    <>
      {error && (
        <Message messageEmail={message} cloesThePropt={cloesThePropt} />
      )}
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
                    type="email"
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
                  Don't you have an account?
                  <Link style={{ textDecoration: "none" }} to={"/Signup"}>
                    Sign Up{" "}
                  </Link>
                </Typography>
              </Paper>
            </Grid>
          </div>
        </SectionCard>
      </form>
    </>
  );
};
export default Login;
