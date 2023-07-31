import avatar1 from "../images/avatar1.jpeg";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import "./UserCardFull.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SectionCard from "../UI/SectionCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useParams } from "react-router-dom";

// -----------------------

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
  const { id } = useParams();

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
  const [isBackPressed, setIsBackPressed] = useState(false);

  // useEffect(() => {
  //   const handlePopstate = () => {
  //     setIsBackPressed(true);
  //   };

  //   window.addEventListener('popstate', handlePopstate);

  //   return () => {
  //     window.removeEventListener('popstate', handlePopstate);
  //   };
  // }, []);

  // const [fulldata, setFullData] = useState([]);

  let d = data.filter((ele) => ele.id === id);

  return (
    <div className="userCardContainer">
      <SectionCard className="userCardName">
        <img src={avatar1} alt="" />
        <h1>{d.length !== 0 && d[0].firstName}</h1>
      </SectionCard>
      <SectionCard className="userCardPersonalInfor">
        <h1>Personal Information</h1>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={2}>
              <Grid item xs={6}>
                <Item sx={itemsStyleGray}>
                  <div className="userItems">
                    <div>
                      <h3>Full Name</h3>
                    </div>
                    <div>
                      <p>
                        {d.length !== 0 && d[0].firstName + " " + d[0].lastName}
                      </p>
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

                    <p>{d.length !== 0 && d[0].age}</p>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={itemStyleWhite}>
                  <div className="userItems">
                    <div>
                      <h3>Religen</h3>
                    </div>

                    <p>{d.length !== 0 && d[0].region}</p>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={itemStyleWhite}>
                  <div className="userItems">
                    <div>
                      <h3>Height</h3>
                    </div>

                    <p>{d.length !== 0 && d[0].height}</p>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={itemsStyleGray}>
                  <div className="userItems" key={d.id}>
                    <div>
                      <h3>Ethnicity</h3>
                    </div>
                    <div>
                      <p>{d.length !== 0 && d[0].ethinity.label}</p>
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
                    <p>{d.length !== 0 && d[0].civilState.label}</p>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={itemStyleWhite}>
                  <div className="userItems">
                    <div>
                      <h3>Gender</h3>
                    </div>
                    <div>{/* <p>{fulldata.gender.label}</p> */}</div>
                    <p>{d.length !== 0 && d[0].gender.label}</p>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </SectionCard>
      {isBackPressed && window.location.reload()}
    </div>
  );
};

export default UserCardFull;
