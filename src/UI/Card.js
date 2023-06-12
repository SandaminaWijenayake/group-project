import React from "react";
import { Grid, Box, Container } from "@mui/material";
import "./Card.css";

function Card() {
  return (
    <div className="cardContainer">
      <Container container>
        <div className="cardName">
          <h1>De Silva</h1>
          <p>Moratuwa, Sri Lanka</p>
        </div>
        <div className="cardDetails">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <h4>25 years</h4>
              </Grid>
              <Grid item xs={4}>
                <h4>Sinhalese</h4>
              </Grid>

              <Grid item xs={4}>
                <h4>5'5</h4>
              </Grid>
              <Grid item xs={4}>
                <h4>Buddist</h4>
              </Grid>
              <Grid item xs={8}>
                <h4>Software Engineer</h4>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
      <div className="cardBottom">
        <div className="cardPublished">Published: 3 days ago</div>
        <div className="cardMoreDetails">
          <strong>More Details</strong>
        </div>
      </div>
    </div>
  );
}

export default Card;
