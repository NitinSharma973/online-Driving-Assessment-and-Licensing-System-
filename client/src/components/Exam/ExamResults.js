import React from "react";
import { Typography, Paper } from "@mui/material";

import { makeStyles } from "@mui/styles";

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

// ExamResults component
const ExamResults = ({ score, passed, breakdown }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h5" gutterBottom>
        Exam Results
      </Typography>
      <Typography variant="body1">Score: {score}</Typography>
      <Typography variant="body1">Passed: {passed ? "Yes" : "No"}</Typography>
      <Typography variant="body1">
        Total Questions: {breakdown.totalQuestions}
      </Typography>
      <Typography variant="body1">
        Correct Answers: {breakdown.correctAnswers}
      </Typography>
      <Typography variant="body1">
        Incorrect Answers: {breakdown.incorrectAnswers}
      </Typography>
    </Paper>
  );
};

export default ExamResults;
