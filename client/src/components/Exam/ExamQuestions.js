import React, { useState } from "react";
import {
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
  question: {
    marginBottom: theme.spacing(2),
  },
}));

// ExamQuestions component
const ExamQuestions = ({ questions, onSubmit }) => {
  const classes = useStyles();

  // State variables to store user's answers
  const [answers, setAnswers] = useState({});

  // Function to handle selecting an answer
  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question) => (
        <div key={question.id} className={classes.question}>
          <Typography variant="body1" gutterBottom>
            {question.text}
          </Typography>
          <RadioGroup
            name={`question-${question.id}`}
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          >
            {question.options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </div>
      ))}
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default ExamQuestions;
