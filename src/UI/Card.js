import React from "react";
import { Grid, Box, Container } from "@mui/material";
import "./Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  console.log(props);

  return (
    <Link style={{ textDecoration: "none", color: "black" }} to={"/Card/"}>
      <div className="cardContainer">
        <Container container>
          <div className="cardName">
            <h1>{props.firstName}</h1>
            <p>Moratuwa, Sri Lanka</p>
          </div>
          <div className="cardDetails">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <h4>{props.age}</h4>
                </Grid>
                <Grid item xs={4}>
                  <h4>{props.ethinity}</h4>
                </Grid>

                <Grid item xs={4}>
                  <h4>{props.height}</h4>
                </Grid>
                <Grid item xs={4}>
                  <h4>{props.region}</h4>
                </Grid>
                <Grid item xs={8}>
                  <h4>{props.Profession}</h4>
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
