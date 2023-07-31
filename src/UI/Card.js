import React from "react";
import { Grid, Box, Container } from "@mui/material";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ items }) {
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/Card/${items.id}`}
    >
      <div className="cardContainer">
        <Container container>
          <div className="cardName">
            <h1>{items.firstName + " " + items.lastName}</h1>
            <p>{items.region}, Sri Lanka</p>
          </div>
          <div className="cardDetails">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <h4>Age: {items.age}</h4>
                </Grid>
                <Grid item xs={4}>
                  <h4>Ethinity: {items.ethinity.label}</h4>
                </Grid>

                <Grid item xs={4}>
                  <h4>Height: {items.height}</h4>
                </Grid>
                <Grid item xs={4}>
                  <h4>Region: {items.region}</h4>
                </Grid>
                <Grid item xs={8}>
                  <h4>Profession: {items.Profession}</h4>
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
    </Link>
  );
}

export default Card;
