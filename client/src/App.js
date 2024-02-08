import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/Auth/RegistrationForm";
import LoginForm from "./components/Auth/LoginForm";
import ProfileView from "./components/Profile/ProfileView";
import ProfileEdit from "./components/Profile/ProfileEdit";
import ExamQuestions from "./components/Exam/ExamQuestions";
import ExamResults from "./components/Exam/ExamResults";
import HomePage from "./components/HomePage"; // Import HomePage component

function App() {
  const [userData, setUserData] = useState(null);

  // Function to set user data after successful login
  const handleLogin = (userData) => {
    setUserData(userData);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route
            path="/profile"
            element={<ProfileView userData={userData} />}
          />
          <Route
            path="/profile/edit"
            element={<ProfileEdit userData={userData} />}
          />
          <Route path="/exam/questions" element={<ExamQuestions />} />
          <Route path="/exam/results" element={<ExamResults />} />
          <Route path="/" element={<HomePage />} />{" "}
          {/* Use HomePage component */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
