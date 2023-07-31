import React, { useEffect, useState } from "react";
import {
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
import { auth, db } from "../config/firebase";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { deleteUser, signOut } from "firebase/auth";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router";

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

const deleteIcon = {
  marginLeft: "10px",
  color: "rgba(219, 3, 3, 0.807)",
  cursor: "pointer",
  ":hover": {
    color: "rgb(243, 85, 72)",
  },
};

const EditProfile = () => {
  // const [userId, setUserId] = useState("");
  const [data, setData] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    const docRef = doc(db, "users", user.uid);

    getDoc(docRef)
      .then((snapshot) => {
        setData(snapshot.data());
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.uid]);

  const navigate = useNavigate();
  // let index = data.gender.id;
  // let newIndex = index - 1;

  const [firstName, setFirstName] = useState(data.firstName);
  // useEffect(() => {
  //   setFirstName(data.firstName);
  // }, [data.firstName]);

  const [lastName, setLastName] = useState(data.lastName);
  // // useEffect(() => {
  // //   setLastName(data.lastName);
  // // }, [data.lastName]);
  const [age, setAge] = useState(data.age);
  // // useEffect(() => {
  // //   setAge(data.age);
  // // }, [data.age]);
  const [gender, setGender] = useState(genderOptions[0]);
  // // useEffect(() => {
  // //   setGender(data.gender.label);
  // }, [data.gender.label]);

  const [religion, setReligion] = useState(religionOptions[0]);
  const [Profession, setProfession] = useState(data.Profession);

  const [region, setRegion] = useState(data.region);
  const [ethinity, setEthinity] = useState(ethinityOptions[0]);
  const [civilState, setCivilState] = useState(civilStateOptions[1]);
  const [height, setHeight] = useState(data.height);
  useEffect(() => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setAge(data.age);
    setProfession(data.Profession);
    setRegion(data.region);
    setHeight(data.height);
    // setGender(data.genderOptions[newIndex]);
  }, [
    data.firstName,
    data.lastName,
    data.age,
    data.Profession,
    data.height,
    data.region,
  ]);

  const deleteUserHandler = async () => {
    const user = auth.currentUser;
    try {
      await deleteDoc(doc(db, "users", user.uid));
    } catch (err) {
      console.log("err:" + err);
    }
    try {
      await deleteUser(user);
    } catch (err) {
      console.log("err:" + err);
    }
    signOut(auth).then(navigate("/Login"));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const user = auth.currentUser.uid;
    const docRef = doc(db, "users", user);

    e.preventDefault();
    updateDoc(docRef, {
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
    });
  };

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
                      // label="firstName"
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
                      // label="lastName"
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
                      // label="Age"
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
                      // label="Profession"
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
                marginLeft: "10px",
              }}
            >
              <Button variant="contained" type="submit">
                Update Account
              </Button>
              <DeleteForeverIcon
                fontSize="large"
                sx={deleteIcon}
                onClick={() => {
                  deleteUserHandler();
                }}
              >
                delete
              </DeleteForeverIcon>
            </Box>
          </Box>
        </form>
      </SectionCard>
    </>
  );
};

export default EditProfile;
