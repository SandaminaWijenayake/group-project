import React from "react";
import "./AboutUs.css";
import { Box, Grid, Typography } from "@mui/material";
import SectionCard from "../UI/SectionCard";

// import Footer from "./Footer";

const AboutUs = () => {
  return (
    <>
      <SectionCard className="AboutUsMargin">
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{ marginBottom: "100px" }}
          >
            About Us
          </Typography>

          <Grid container rowSpacing={5} columnSpacing={2}>
            <Grid item xs={6}>
              <Typography variant="h4">Our Mission</Typography>
              <p>
                At Kapuwa.lk, our mission is to help individuals find their
                perfect life partner through a convenient and secure platform.
                We are committed to facilitating meaningful connections and
                fostering long-lasting relationships. By providing a
                user-friendly experience and advanced search options, we strive
                to make the journey of finding a life partner enjoyable and
                rewarding.
              </p>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4">Our Vision</Typography>
              <p>
                Our vision is to become the leading matrimonial site globally,
                recognized for its trustworthy and reliable services. We aim to
                revolutionize the way people meet their life partners by
                leveraging technology and employing a personalized approach. We
                envision a world where every individual can find their soulmate
                with ease, and Kapuwa.lk plays a pivotal role in making this
                vision a reality.
              </p>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="h4">Our Values</Typography>
              <ul style={{ margin: "0px" }}>
                <li>
                  We uphold the highest standards of honesty, transparency, and
                  ethical conduct in all our interactions.
                </li>
                <li>
                  We value diversity and treat every individual with respect and
                  dignity.
                </li>
                <li>
                  We prioritize the confidentiality and privacy of our users'
                  information.
                </li>
                <li>
                  We are dedicated to providing exceptional customer service and
                  catering to the unique needs of our users.
                </li>
                <li>
                  We are committed to continuously improving our platform and
                  services to enhance user experience.
                </li>
              </ul>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4">Why Choose Us?</Typography>
              <ul style={{ margin: "0px" }}>
                <li>
                  We have a vast database of genuine profiles, ensuring a wide
                  range of options for our users.
                </li>
                <li>
                  Our intelligent algorithms help individuals find compatible
                  matches based on their preferences and criteria.
                </li>
                <li>
                  We employ a rigorous verification process to ensure the
                  authenticity of profiles, providing a safe environment for our
                  users.
                </li>
                <li>
                  Our user-friendly interface makes it easy for users to
                  navigate the site and find their potential life partners
                  effortlessly.
                </li>
                <li>
                  Our dedicated customer support team is available to assist
                  users throughout their journey, addressing any concerns or
                  queries promptly.
                </li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </SectionCard>
    </>
  );
};

export default AboutUs;
