import React, { useContext, useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Signup.css";
import {
  TextField,
  Grid,
  Avatar,
  Button,
  Autocomplete,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SectionCard from "../UI/SectionCard";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import Message from "./Message";
import { Link, useNavigate } from "react-router-dom";
import { GlobleContext } from "../GlobleState/GlobleState";

const genderOptions = [
  { label: "Male", id: 1 },
  { label: "Female", id: 2 },
];
const religionOptions = [
  { label: "buddhism", id: 1 },
  { label: "muslims", id: 2 },
  { label: "christians", id: 3 },
  { label: "hindu", id: 4 },
];

const ethinityOptions = [
  { label: "Sinhalese", id: 1 },
  { label: "Tamils", id: 2 },
  { label: "Burgher", id: 3 },
  { label: "Malays", id: 4 },
];

const civilStateOptions = [
  { label: "Married", id: 1 },
  { label: "Unmarried", id: 2 },
  { label: "Devorded", id: 3 },
];

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(genderOptions[0]);
  const [religion, setReligion] = useState(religionOptions[0]);
  const [Profession, setProfession] = useState("");
  const [region, setRegion] = useState("");
  const [ethinity, setEthinity] = useState(ethinityOptions[0]);
  const [civilState, setCivilState] = useState(civilStateOptions[1]);
  const [height, setHeight] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [messageUserCreated, setMessageUserCreated] = useState("");
  const [error, setError] = useState(false);

  const { setIsSignedIn } = useContext(GlobleContext);
  const navigate = useNavigate();
  const userCollection = collection(db, "users");

  const onSUbmitHandler = async (e) => {
    e.preventDefault();
    setMessageEmail("");
    setMessageUserCreated("");
    setMessagePassword("");

    if (!(password.length >= 6)) {
      setError(true);
      setMessagePassword(
        "Password should be at least 6 characters (auth/weak-password)"
      );
    }
    if (!email.includes("@") || !email.includes(".com")) {
      setError(true);
      setMessageEmail("invalid-email");
    }
    if (password.length >= 6 && email.includes("@") && email.includes(".com")) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.error(err);
      }

      try {
        await addDoc(userCollection, {
          firstName: firstName,
          lastName: lastName,
          age: age,
          gender: gender,
          religion: religion,
          Profession: Profession,
          region: region,
          ethinity: ethinity,
          civilState: civilState,
          height: height,
        }).then(setMessageUserCreated("User Created"));
        // setError(true);
        setIsSignedIn(true);
        navigate("/home");
      } catch (err) {
        console.error(err);
      }
    }
  };

  const cloesThePropt = () => {
    setError(false);
  };

  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <>
      {error && (
        <Message
          messagePassword={messagePassword}
          messageEmail={messageEmail}
          messageUserCreated={messageUserCreated}
          cloesThePropt={cloesThePropt}
        />
      )}
      <SectionCard className="container">
        <form onSubmit={onSUbmitHandler}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <PersonIcon />
            </Avatar>
            <h2 style={{ marginBottom: 20 }}>User Registration</h2>
          </Grid>
          <Typography>
            Already have an account?
            <Link to={"/Login"}>Login</Link>
          </Typography>
          <div className="fieldmargin">
            <TextField
              label="First Name"
              placeholder="First Name"
              fullWidth
              required
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </div>

          <div className="fieldmargin">
            <TextField
              label="Last Name"
              placeholder="Last Name"
              fullWidth
              required
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
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

          <div className="fieldmargin">
            <TextField
              type="number"
              label="Age"
              placeholder="Age"
              fullWidth
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="fieldmargin">
            {/* <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="demo-controlled-open-select-label">
              Gender
            </InputLabel>
            <Select label="Gender" id="gender">
              <MenuItem>
                <em>None</em>
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl> */}

            <Autocomplete
              onChange={(e, value) => {
                // console.log("abcd ", value);
                setGender(value);
              }}
              value={gender}
              required
              disablePortal
              id="combo-box-demo1"
              options={genderOptions}
              label="Gender"
              renderInput={(params) => <TextField {...params} label="Gender" />}
            />
          </div>

          <div className="fieldmargin">
            {/* <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="demo-controlled-open-select-label">
              Religion
            </InputLabel>
            <Select label="Religion" id="religion">
              <MenuItem>
                <em>None</em>
              </MenuItem>
              <MenuItem value="buddhism">Buddhism</MenuItem>
              <MenuItem value="muslims">Muslims</MenuItem>
              <MenuItem value="christians">Christians</MenuItem>
              <MenuItem value="hindu">Hindu</MenuItem>
            </Select>
          </FormControl> */}
            <Autocomplete
              onChange={(e, value) => {
                // console.log("abcd ", value);
                setReligion(value);
              }}
              value={religion}
              required
              disablePortal
              id="combo-box-demo2"
              options={religionOptions}
              label="Religen"
              renderInput={(params) => (
                <TextField {...params} label="Religen" />
              )}
            />
          </div>

          <div className="fieldmargin">
            <TextField
              label="Height"
              placeholder="Height"
              fullWidth
              required
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="fieldmargin">
            <TextField
              label="Profession"
              placeholder="Profession"
              fullWidth
              required
              value={Profession}
              onChange={(e) => setProfession(e.target.value)}
            />
          </div>
          <div className="fieldmargin">
            <TextField
              label="region / District"
              placeholder="region / District"
              fullWidth
              required
              onChange={(e) => setRegion(e.target.value)}
              value={region}
            />
          </div>
          <div className="fieldmargin">
            {/* <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="demo-controlled-open-select-label">
              Ethinity
            </InputLabel>
            <Select label="Ethinity" id="Ethinity">
              <MenuItem>
                <em>None</em>
              </MenuItem>
              <MenuItem value="Sinhalese">Sinhalese</MenuItem>
              <MenuItem value="Tamils">Tamils</MenuItem>
              <MenuItem value="Burgher">Burgher</MenuItem>
              <MenuItem value=" Malays">Malays</MenuItem>
            </Select>
          </FormControl> */}

            <Autocomplete
              onChange={(e, value) => {
                // console.log("abcd ", value);
                setEthinity(value);
              }}
              value={ethinity}
              required
              disablePortal
              id="combo-box-demo3"
              options={ethinityOptions}
              label="Ethinity"
              renderInput={(params) => (
                <TextField {...params} label="Ethinity" />
              )}
            />
          </div>
          <div className="fieldmargin">
            {/* <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="demo-controlled-open-select-label">
              civilState
            </InputLabel>
            <Select label="civilState" id="civilState">
              <MenuItem>
                <em>None</em>
              </MenuItem>
              <MenuItem value="Married">Married</MenuItem>
              <MenuItem value="Unmarried">Unmarried</MenuItem>
              <MenuItem value="Devorded">Devorded</MenuItem>
            </Select>
          </FormControl> */}
            <Autocomplete
              onChange={(e, value) => {
                // console.log("abcd ", value);
                setCivilState(value);
              }}
              value={civilState}
              required
              disablePortal
              id="combo-box-demo4"
              options={civilStateOptions}
              label="Civil State"
              renderInput={(params) => (
                <TextField {...params} label="Civil State" />
              )}
            />
          </div>

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Registration
          </Button>
        </form>
      </SectionCard>
    </>
  );
};

export default Signup;
