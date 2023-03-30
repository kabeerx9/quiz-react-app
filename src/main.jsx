import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Temp from "./components/Temp";
import QuizCreator from "./components/QuizCreator";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/app" />} />
        <Route path="/app" element={<App />} />
        <Route path="/app/creation" element={<QuizCreator />} />
        <Route path="/app/:quizid" element={<Temp />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
