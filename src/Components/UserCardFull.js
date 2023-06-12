import avatar1 from "../images/avatar1.jpeg";
import { styled } from "@mui/material/styles";
import React from "react";
import "./UserCardFull.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SectionCard from "../UI/SectionCard";

// -----------------------

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const city = "Moratuwa";
const profession = "Software Engineer";
const fullName = "Emma watson";
const Age = "28";
const religen = "Buddist";
const height = "5'10";
const Ethnicity = "Sinhalese";
const civilState = "Married";
const gender = "Female";

const itemsStyleGray = {
  backgroundColor: "#F2F2F2",
  borderRadius: "0px",
  boxShadow: "none",
  color: "Black",
};

const itemStyleWhite = {
  backgroundColor: "white",
  borderRadius: "0px",
  boxShadow: "none",
  color: "Black",
};

const UserCardFull = () => {
  return (
    <div className="userCardContainer">
      <SectionCard className="userCardName">
        <img src={avatar1} alt="" />
        <h1>{fullName}</h1>
        <p>{`${Age} * ${city} * ${profession}`}</p>
      </SectionCard>
      <SectionCard className="userCardPersonalInfor">
        <h1>Personal Information</h1>
        <div className="details">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={2}>
              <Grid item xs={6}>
                <Item sx={itemsStyleGray}>
                  <div className="userItems">
                    <div>
                      <h3>Full Name</h3>
                    </div>
                    <div>
                      <p>{fullName}</p>
                    </div>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={itemsStyleGray}>
                  <div className="userItems">
                    <div>
                      <h3>Age</h3>
                    </div>
                    <div>
                      <p>{Age}</p>
                    </div>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={itemStyleWhite}>
                  <div className="userItems">
                    <div>
                      <h3>Religen</h3>
                    </div>
                    <div>
                      <p>{religen}</p>
                    </div>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={itemStyleWhite}>
                  <div className="userItems">
                    <div>
                      <h3>Height</h3>
                    </div>
                    <div>
                      <p>{height}</p>
                    </div>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={itemsStyleGray}>
                  <div className="userItems">
                    <div>
                      <h3>Ethnicity</h3>
                    </div>
                    <div>
                      <p>{Ethnicity}</p>
                    </div>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={itemsStyleGray}>
                  <div className="userItems">
                    <div>
                      <h3>Civil State</h3>
                    </div>
                    <div>
                      <p>{civilState}</p>
                    </div>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={itemStyleWhite}>
                  <div className="userItems">
                    <div>
                      <h3>Gender</h3>
                    </div>
                    <div>
                      <p>{gender}</p>
                    </div>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </SectionCard>
    </div>
  );
};

export default UserCardFull;
