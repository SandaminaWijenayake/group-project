import React from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  TextField,
} from "@mui/material";
import SectionCard from "../UI/SectionCard";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const editProfileItems = {
  display: "flex",
  textAlign: "center",
  justifyContent: "space-around",
  marginLeft: "100px",
  marginRight: "100px",
  alignItems: "center",
};

const EditProfile = () => {
  return (
    <>
      <SectionCard>
        <Container>
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
                      label="firstName"
                      placeholder="firstName"
                      sx={{ width: "60%" }}
                      //   required
                      //   onChange={(e) => setLastName(e.target.value)}
                      //   value={lastName}
                    />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Box sx={{ display: "grid" }}>
                    <Typography>Last name</Typography>
                    <Typography>Last name</Typography>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Box sx={{ display: "grid" }}>
                    <Typography>Age</Typography>
                    <Typography>Age</Typography>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Box sx={{ display: "grid" }}>
                    <Typography>Religen</Typography>
                    <Typography>Religen</Typography>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Box sx={{ display: "grid" }}>
                    <Typography>Gender</Typography>
                    <Typography>Gender</Typography>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Box sx={{ display: "grid" }}>
                    <Typography>Height</Typography>
                    <Typography>Height</Typography>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Box sx={{ display: "grid" }}>
                    <Typography>Ethnicity</Typography>
                    <Typography>Ethnicity</Typography>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Box sx={{ display: "grid" }}>
                    <Typography>Civil State</Typography>
                    <Typography>Civil State</Typography>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </SectionCard>
    </>
  );
};

export default EditProfile;
