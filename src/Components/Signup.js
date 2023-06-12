import React from "react";
import "./Signup.css";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Avatar,
  Button,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SectionCard from "../UI/SectionCard";

function Signup() {
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <SectionCard className="container">
      <form>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <PersonIcon />
          </Avatar>
          <h2 style={{ marginBottom: 20 }}>User Registration</h2>
        </Grid>

        <div className="fieldmargin">
          <TextField
            id="username"
            label="Username"
            placeholder="User Name"
            fullWidth
            required
          />
        </div>

        <div className="fieldmargin">
          <TextField
            label="First Name"
            placeholder="First Name"
            fullWidth
            required
          />
        </div>

        <div className="fieldmargin">
          <TextField
            label="Last Name"
            placeholder="Last Name"
            fullWidth
            required
          />
        </div>

        <div className="fieldmargin">
          <TextField
            type="number"
            label="Age"
            placeholder="Age"
            fullWidth
            required
          />
        </div>

        <div className="fieldmargin">
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="demo-controlled-open-select-label">
              Gender
            </InputLabel>
            <Select label="Gender" id="gender">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="fieldmargin">
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="demo-controlled-open-select-label">
              Religion
            </InputLabel>
            <Select label="Religion" id="religion">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="buddhism">Buddhism</MenuItem>
              <MenuItem value="muslims">Muslims</MenuItem>
              <MenuItem value="christians">Christians</MenuItem>
              <MenuItem value="hindu">Hindu</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="fieldmargin">
          <TextField label="Height" placeholder="Height" fullWidth required />
        </div>
        <div className="fieldmargin">
          <TextField
            label="Profession"
            placeholder="Profession"
            fullWidth
            required
          />
        </div>
        <div className="fieldmargin">
          <TextField
            label="region / District"
            placeholder="region / District"
            fullWidth
            required
          />
        </div>
        <div className="fieldmargin">
          <TextField
            label="Ethinity"
            placeholder="Ethinity"
            fullWidth
            required
          />
        </div>
        <div className="fieldmargin">
          <TextField
            label="Civil Status"
            placeholder="Civil Status"
            fullWidth
            required
          />
        </div>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Registration
        </Button>
      </form>
    </SectionCard>
  );
}

export default Signup;
