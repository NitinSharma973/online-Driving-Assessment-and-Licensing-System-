import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import "../styles/HomePage.css"; // Import CSS file for styling

function HomePage() {
  return (
    <div className="home-page">
      <div className="cover">
        <Container>
          <Typography variant="h2" align="center" gutterBottom>
            Welcome to the Online Driving Assessment and Licensing System
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Start your journey towards obtaining your driving license!
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Take the assessment exam, learn about traffic rules, road signs, and
            safe driving practices.
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Already have an account?{" "}
            <Link to="/login">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
          </Typography>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;
