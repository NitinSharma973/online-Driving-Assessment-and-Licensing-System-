// server/controllers/examController.js

// Mocked exam questions data (replace with actual data or fetch from a database)
const examQuestions = [
  {
    id: 1,
    question: "What does a red traffic light mean?",
    options: ["Stop", "Go", "Slow down", "Turn right"],
    correctAnswer: "Stop",
  },
  {
    id: 2,
    question: "What is the purpose of a yellow traffic light?",
    options: ["Go", "Stop", "Prepare to stop", "Speed up"],
    correctAnswer: "Prepare to stop",
  },
  // Add more questions as needed
];

// Mocked exam scoring system (replace with actual scoring logic)
const calculateScore = (userAnswers) => {
  const totalQuestions = examQuestions.length;
  let correctAnswers = 0;

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === examQuestions[index].correctAnswer) {
      correctAnswers += 1;
    }
  });

  const score = (correctAnswers / totalQuestions) * 100;
  return { correctAnswers, totalQuestions, score };
};

exports.getQuestions = (req, res) => {
  // Return the list of exam questions to the client
  res.json(examQuestions);
};

exports.submitExam = (req, res) => {
  const { userAnswers } = req.body;

  // Calculate the score based on user's answers
  const { correctAnswers, totalQuestions, score } = calculateScore(userAnswers);

  // Provide immediate feedback to the user
  const feedback = {
    correctAnswers,
    totalQuestions,
    score,
    passed: score >= 70, // Adjust passing threshold as needed
  };

  // Return the feedback to the client
  res.json(feedback);
};
