import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../database/firebase";
import { useNavigate } from "react-router-dom";
const Temp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const { quizid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const quizDocRef = db.collection("quizzes").doc(quizid);

    quizDocRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const quizData = doc.data();
          const questionsData = quizData.questions;
          setQuestions(questionsData);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [quizid]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion]?.questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion]?.answerOptions.map((answerOption) => (
                <button
                  key={answerOption.answerText}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <button onClick={() => navigate("/app")}>Go Home </button>
    </>
  );
};

export default Temp;
