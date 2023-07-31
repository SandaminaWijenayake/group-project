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
        // console.log(usersdata);

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
    s1.src = "https://embed.tawk.to/64c58aa494cf5d49dc673ab0/1h6hqb5lj";
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Region / District</Typography>
          </AccordionSummary>
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
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
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
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
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
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>{" "}
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
