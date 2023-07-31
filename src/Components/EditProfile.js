import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  TextField,
  Autocomplete,
  Button,
} from "@mui/material";
import SectionCard from "../UI/SectionCard";
import { styled } from "@mui/material/styles";
import "./EditProfile.css";
import { db } from "../config/firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

const editProfileItems = {
  display: "flex",
  textAlign: "center",
  justifyContent: "space-between",
  marginLeft: "100px",
  marginRight: "100px",
  alignItems: "center",
  color: "black",
};

const EditProfile = () => {
  const [userId, setUserId] = useState("");

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

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        console.log(user.uid);

        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const onSubmitHandler = (e) => {
    const docRef = doc(db, "users", userId);

    e.preventDefault();
    updateDoc(docRef, {
      firstName: "firstName",
      lastName: "lastName",
      age: "age",
      gender: "gender",
      religion: "religion",
      Profession: "Profession",
      region: "region",
      ethinity: "ethinity",
      civilState: "civilState",
      height: "height",
    });
    console.log(userId);
  };

  console.log(userId);
  return (
    <>
      <SectionCard className="AaboutUsMargin">
        <Typography variant="h3" align="center" sx={{ marginBottom: "50px" }}>
          Edit Profile
        </Typography>
        <form onSubmit={onSubmitHandler}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                <Item>
                  <Box sx={editProfileItems}>
                    <Typography>First Name</Typography>
                    <TextField
                      size="small"
                      label="firstName"
                      placeholder="firstName"
                      sx={{ width: "60%" }}
                      required
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                    />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Box sx={editProfileItems}>
                    <Typography>Last name</Typography>
                    <TextField
                      size="small"
                      label="lastName"
                      placeholder="lastName"
                      sx={{ width: "60%" }}
                      required
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                    />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Box sx={editProfileItems}>
                    <Typography>Age</Typography>
                    <TextField
                      size="small"
                      label="Age"
                      placeholder="Age"
                      sx={{ width: "60%" }}
                      required
                      onChange={(e) => setAge(e.target.value)}
                      value={age}
                    />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Box sx={editProfileItems}>
                    <Typography>Profession</Typography>
                    <TextField
                      size="small"
                      label="Profession"
                      placeholder="Age"
                      sx={{ width: "60%" }}
                      required
                      onChange={(e) => setProfession(e.target.value)}
                      value={Profession}
                    />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Box sx={editProfileItems}>
                    <Typography>Region</Typography>
                    <TextField
                      size="small"
                      label="Region"
                      placeholder="Age"
                      sx={{ width: "60%" }}
                      required
                      onChange={(e) => setRegion(e.target.value)}
                      value={region}
                    />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12}>
                <Item>
                  <Box sx={editProfileItems}>
                    <Typography>Religen</Typography>
                    <Autocomplete
                      onChange={(e, value) => {
                        setReligion(value);
                      }}
                      value={religion}
                      required
                      disablePortal
                      id="combo-box-demo2"
                      options={religionOptions}
                      label="Religen"
                      sx={{ width: "60%" }}
                      size="small"
                      renderInput={(params) => (
                        <TextField {...params} label="Religen" />
                      )}
                    />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Box sx={editProfileItems}>
                    <Typography>Gender</Typography>
                    <Autocomplete
                      onChange={(e, value) => {
                        setGender(value);
                      }}
                      value={gender}
                      required
                      sx={{ width: "60%" }}
                      size="small"
                      disablePortal
                      id="combo-box-demo1"
                      options={genderOptions}
                      label="Gender"
                      renderInput={(params) => (
                        <TextField {...params} label="Gender" />
                      )}
                    />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Box sx={editProfileItems}>
                    <Typography>Height</Typography>
                    <TextField
                      size="small"
                      label="Height"
                      placeholder="Height"
                      sx={{ width: "60%" }}
                      required
                      onChange={(e) => setHeight(e.target.value)}
                      value={height}
                    />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Box sx={editProfileItems}>
                    <Typography>Ethnicity</Typography>
                    <Autocomplete
                      onChange={(e, value) => {
                        setEthinity(value);
                      }}
                      value={ethinity}
                      required
                      sx={{ width: "60%" }}
                      size="small"
                      disablePortal
                      id="combo-box-demo3"
                      options={ethinityOptions}
                      label="Ethinity"
                      renderInput={(params) => (
                        <TextField {...params} label="Ethinity" />
                      )}
                    />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Box sx={editProfileItems}>
                    <Typography>Civil State</Typography>
                    <Autocomplete
                      onChange={(e, value) => {
                        setCivilState(value);
                      }}
                      value={civilState}
                      required
                      sx={{ width: "60%" }}
                      size="small"
                      disablePortal
                      id="combo-box-demo3"
                      options={civilStateOptions}
                      label="civilState"
                      renderInput={(params) => (
                        <TextField {...params} label="civilState" />
                      )}
                    />
                  </Box>
                </Item>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                marginTop: "20px",
              }}
            >
              <Button variant="contained">Update Account</Button>
            </Box>
          </Box>
        </form>
      </SectionCard>
    </>
  );
};

export default EditProfile;
