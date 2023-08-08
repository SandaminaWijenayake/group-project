import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import "./AdsContent.css";
import { Autocomplete, TextField, Typography, colors } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import SectionCard from "../UI/SectionCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

const top100Films = [
  {
    label: "20 - 24",
  },
  {
    label: "25 - 29",
  },
  {
    label: "30 - 34",
  },
  {
    label: "35 - 39",
  },
  {
    label: "40 - 44",
  },
  {
    label: "45 - 50",
  },
];

// const ethinityOptions = [
//   { label: "Sinhalese", id: 1 },
//   { label: "Tamils", id: 2 },
//   { label: "Burgher", id: 3 },
//   { label: "Malays", id: 4 },
// ];

// const religionOptions = [
//   { label: "buddhism", id: 1 },
//   { label: "muslims", id: 2 },
//   { label: "christians", id: 3 },
//   { label: "hindu", id: 4 },
// ];
const options = [
  { label: "Last First", id: 1 },
  { label: "Oldest First", id: 2 },
];

const AdsContent = () => {
  const [data, setData] = useState([]);
  const [initialState, setInitialState] = useState([]);
  const [manColor, setManColor] = useState(null);
  const [womanColor, setWomanColor] = useState(null);
  const [currentState, setCurrentState] = useState({});

  const [selectAge, setSelectAge] = useState(null);

  const [selectGender, setSelectGender] = useState(null);
  // const [change, setChange] = useState();

  const manIcon = {
    cursor: "pointer",
    // ":hover": {
    //   color: "rgb(125, 125, 125)",
    // },
    color: manColor ? "rgb(125, 125, 125)" : "black",
    // color: womanColor ? "rgb(125, 125, 125)" : "black",
  };

  const womanIcon = {
    cursor: "pointer",
    border: "none",
    // ":hover": {
    //   color: "rgb(125, 125, 125)",
    // },
    // color: manColor ? "rgb(125, 125, 125)" : "black",
    color: womanColor ? "rgb(125, 125, 125)" : "black",
  };

  useEffect(() => {
    console.log("useEffect run");
    const colRef = collection(db, "users");
    let usersdata = [];
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          usersdata.push({ ...doc.data(), id: doc.id });
        });

        setData(usersdata);
        setInitialState(usersdata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);

  const handleFilter = () => {
    let updatedList = initialState;
    console.log(updatedList);

    if (selectAge) {
      console.log("select age: " + selectAge);
      // updatedList = updatedList.filter((item) => item.age === selectAge);
      updatedList = selectAge;
      console.log("updated list :" + updatedList);
    }

    if (selectGender) {
      console.log("selectGender :" + selectGender);

      updatedList = updatedList.filter(
        (item) => item.gender.label === selectGender
      );
    }
    // let final = selectAge?.concat(selectGender);
    // console.log("final : " + final);
    // let uniqueChars = [...new Set(final)];
    // console.log("new final : " + uniqueChars);
    // setData(uniqueChars);
    setData(updatedList);
  };

  const lookingForMan = () => {
    setWomanColor(false);
    setManColor(true);
    setSelectGender("Male");
    // const colRef = collection(db, "users");
    // const colRef = query(collection(db, "users"));

    // const q = query(colRef, where("gender.label", "==", "Male"));
    // let userData = [];
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots

    //   userData.push({ id: doc.id, ...doc.data() });
    // });
    // return setData(userData);
    // setSelectGender(
    //   initialState.filter((item) => item.gender.label === "Male")
    // );
  };
  // console.log(data);

  const lookingForWoman = () => {
    setManColor(false);
    setWomanColor(true);
    setSelectGender("Female");
    // const colRef = collection(db, "users");
    // const q = query(colRef, where("gender.label", "==", "Female"));
    // // console.log(q);
    // let userData = [];
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   userData.push({ id: doc.id, ...doc.data() });
    // });
    // return setData(userData);
    // setSelectGender(
    //   initialState.filter((item) => item.gender.label === "Female")
    // );
  };

  const ageHander = (value) => {
    // console.log(value);
    if (value?.label === "20 - 24") {
      setSelectAge(
        initialState.filter((item) => item.age >= "20" && item.age < "25")
      );
    }
    if (value?.label === "25 - 29") {
      setSelectAge(
        initialState.filter((item) => item.age >= "25" && item.age < "30")
      );
    }
    if (value?.label === "30 - 34") {
      setSelectAge(
        initialState.filter((item) => item.age >= "30" && item.age < "35")
      );
    }
    if (value?.label === "35 - 39") {
      setSelectAge(
        initialState.filter((item) => item.age >= "35" && item.age < "40")
      );
    }
    if (value?.label === "40 - 44") {
      setSelectAge(
        initialState.filter((item) => item.age >= "40" && item.age < "45")
      );
    }
    if (value?.label === "45 - 50") {
      setSelectAge(
        initialState.filter((item) => item.age >= "45" && item.age <= "50")
      );
    }
  };

  useEffect(() => {
    console.log("ran");
    handleFilter();
  }, [selectAge, selectGender]);

  const ethnicityHandler = (value) => {
    console.log(value);
  };

  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/64c9334ccc26a871b02ca039/1h6ov0pfm";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();

  return (
    <SectionCard className="mainContainer">
      <div className="filterPanel">
        <div className="adsClear">
          <p>Clear All</p>
        </div>
        <div className="adsSort">
          <h3>Sort By</h3>
          <Autocomplete
            id="size-small-standard"
            size="small"
            options={options}
            defaultValue={options[0]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder="Last First"
              />
            )}
          />
        </div>
        <div className="adsMaleFemale">
          <h4>I'm looking for</h4>
          <div>
            {
              <ManIcon
                fontSize="large"
                sx={manIcon}
                onClick={() => {
                  lookingForMan();
                }}
              />
            }
            {
              <WomanIcon
                fontSize="large"
                sx={womanIcon}
                onClick={() => {
                  lookingForWoman();
                }}
              />
            }
          </div>
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Age</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 200 }}
                size="small"
                renderInput={(params) => <TextField {...params} label="Age" />}
                onChange={(e, value) => {
                  ageHander(value);
                  // setSelectAge(value.label);
                }}
              />
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Ethnicity</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup
              onChange={(value) => {
                ethnicityHandler(value);
              }}
            >
              <FormControlLabel control={<Checkbox />} label="Sinhalese" />
              <FormControlLabel label="Tamils" control={<Checkbox />} />
              <FormControlLabel control={<Checkbox />} label="Burgher" />
              <FormControlLabel control={<Checkbox />} label="Malays" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Religion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="buddhism"
              />
              <FormControlLabel label="christians" control={<Checkbox />} />
              <FormControlLabel control={<Checkbox />} label="muslims" />
              <FormControlLabel control={<Checkbox />} label="hindu" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Civil Status</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Never Married"
                  control={<Radio />}
                  label="Never Married"
                  checked
                />
                <FormControlLabel
                  value="Devorced"
                  control={<Radio />}
                  label="Devorced"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="adsContent">
        {data.map((item) => {
          return <Card items={item} key={item.id} />;
        })}
      </div>
    </SectionCard>
  );
};

export default AdsContent;
