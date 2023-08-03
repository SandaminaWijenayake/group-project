import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import "./AdsContent.css";
import { Autocomplete, TextField, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import SectionCard from "../UI/SectionCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

const top100Films = [
  {
    label: "20 - 25",
  },
  {
    label: "25 - 30",
  },
  {
    label: "30 - 35",
  },
  {
    label: "35 - 40",
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

  useEffect(() => {
    const colRef = collection(db, "users");
    let usersdata = [];
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          usersdata.push({ ...doc.data(), id: doc.id });
        });

        return setData(usersdata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            {<ManIcon fontSize="large" />}
            {<WomanIcon fontSize="large" />}
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
              />
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Region / District</Typography>
          </AccordionSummary>
        </Accordion> */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Ethnicity</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Sinhalese"
              />
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
