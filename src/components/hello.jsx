// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { db } from "../database/firebase";
// import { useNavigate } from "react-router-dom";
// const Temp = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [score, setScore] = useState(0);
//   const [points, setPoints] = useState(1);
//   const [time, setTime] = useState(10);
//   const { quizid } = useParams();
//   const navigate = useNavigate();

// useEffect(() => {
//   const quizDocRef = db.collection("quizzes").doc(quizid);

//   quizDocRef
//     .get()
//     .then((doc) => {
//       if (doc.exists) {
//         const quizData = doc.data();

//         // title description time points in quizData.quizData[0]
//         const gamePoints = quizData.quizData[0].points;
//         setPoints(gamePoints);
//         setTime(quizData.quizData[0].time);
//         const questionsData = quizData.quizData[1].questions;
//         setQuestions(questionsData);
//       } else {
//         console.log("No such document!");
//       }
//     })
//     .catch((error) => {
//       console.log("Error getting document:", error);
//     });
// }, [quizid]);

// useEffect(() => {
//   if (time > 0) {
//     const intervalId = setInterval(() => {
//       setTime((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }
// }, [time]);

// useEffect(() => {
//   if (time === 0) {
//     setShowScore(true);
//   }
// }, [time]);

// const handleAnswerOptionClick = (isCorrect) => {
//   if (isCorrect) {
//     setScore(score + 1);
//   }

//   const nextQuestion = currentQuestion + 1;
//   if (nextQuestion < questions.length) {
//     setCurrentQuestion(nextQuestion);
//   } else {
//     setTime(0);
//     setShowScore(true);
//   }
// };

//   return (
//     <>
//       <h1>Timer : {time}</h1>
//       <div className="app">
//         {showScore ? (
//           <div>
//             <div className="score-section">
//               You answered {score} out of {questions.length} correctly
//             </div>
//             <div className="score-section">
//               You scored {score * points} out of {questions.length * points}{" "}
//               points
//             </div>
//           </div>
//         ) : (
//           <>
//             <div className="question-section">
//               <div className="question-count">
//                 <span>Question {currentQuestion + 1}</span>/{questions.length}
//               </div>
//               <div className="question-text">
//                 {questions[currentQuestion]?.questionText}
//               </div>
//             </div>
//             <div className="answer-section">
//               {questions[currentQuestion]?.answerOptions.map((answerOption) => (
//                 <button
//                   key={answerOption.answerText}
//                   onClick={() =>
//                     handleAnswerOptionClick(answerOption.isCorrect)
//                   }
//                 >
//                   {answerOption.answerText}
//                 </button>
//               ))}
//             </div>
//           </>
//         )}
//       </div>

//       <button onClick={() => navigate("/app")}>Go Home </button>
//     </>
//   );
// };

// export default Temp;