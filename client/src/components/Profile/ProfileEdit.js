import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// ProfileEdit component
const ProfileEdit = () => {
  const classes = useStyles();
  const history = useNavigate();

  // State variables to store form data
  const [formData, setFormData] = useState({
    name: "", // Default to empty string
    address: "",
    contactDetails: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., send data to backend)
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: "",
      address: "",
      contactDetails: "",
    });
    // Redirect to ProfileView
    history("/profile");
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Edit Profile
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="Name"
              name="name"
              value={formData.name || ""} // Add null check for formData.name
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Contact Details"
              name="contactDetails"
              value={formData.contactDetails}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default ProfileEdit;
