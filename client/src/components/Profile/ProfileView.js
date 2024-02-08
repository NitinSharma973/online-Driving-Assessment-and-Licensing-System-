import React, { useState, useEffect } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
  },
  paper: {
    padding: theme.spacing(3),
  },
}));

// ProfileView component
const ProfileView = () => {
  const classes = useStyles();

  // State variable to store user profile data
  const [profileData, setProfileData] = useState(null);

  // Dummy profile data (replace with actual data from backend)
  useEffect(() => {
    // Simulate fetching user profile data from the backend
    const fetchProfileData = async () => {
      try {
        // Dummy profile data (replace with actual data from backend)
        const dummyData = {
          name: "John Doe",
          address: "123 Main St, Cityville",
          contactDetails: "+1 123-456-7890",
          documents: {
            identificationProofs: ["ID Proof 1", "ID Proof 2"],
            photographs: ["Photo 1", "Photo 2"],
          },
        };
        // Set profile data in state
        setProfileData(dummyData);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        // Handle error fetching data
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Profile Details
            </Typography>
            {profileData ? (
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">
                    Name: {profileData.name}
                  </Typography>
                  <Typography variant="body1">
                    Address: {profileData.address}
                  </Typography>
                  <Typography variant="body1">
                    Contact Details: {profileData.contactDetails}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" gutterBottom>
                    Documents:
                  </Typography>
                  <Typography variant="body1">
                    Identification Proofs:
                  </Typography>
                  <ul>
                    {profileData.documents.identificationProofs.map(
                      (proof, index) => (
                        <li key={index}>{proof}</li>
                      )
                    )}
                  </ul>
                  <Typography variant="body1">Photographs:</Typography>
                  <ul>
                    {profileData.documents.photographs.map((photo, index) => (
                      <li key={index}>{photo}</li>
                    ))}
                  </ul>
                </Grid>
              </Grid>
            ) : (
              <Typography variant="body1">Loading profile data...</Typography>
            )}
            <Link to="/profile/edit">Edit Profile</Link>{" "}
            {/* Link to ProfileEdit component */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileView;
