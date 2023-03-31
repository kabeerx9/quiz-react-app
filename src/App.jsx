import React from "react";
import QuizList from "./components/QuizList";
import { db } from "./database/firebase";
import { useNavigate } from "react-router-dom";

function CreateQuizButton() {
  const navigate = useNavigate();

  return (
    <>
      <button
        style={{
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "center",
        }}
        onClick={() => navigate(`/app/creation`)}
      >
        Create Quiz
      </button>
    </>
  );
}

function App() {
  // const addDataHandler = () => {
  //   const quizRef = db.collection("quizzes").doc("geography");

  //   quizRef
  //     .set({ quizData })
  //     .then(() => {
  //       console.log("Questions added to Firestore");
  //     })
  //     .catch((error) => {
  //       console.error("Error adding questions to Firestore: ", error);
  //     });
  // };
  console.log("App component");

  return (
    <div>
      <h1>WELCOME TO THE QUIZ APP ASSIGNMENT</h1>
      {/* <CreateQuizForm /> */}
      <CreateQuizButton />
      <QuizList />
    </div>
  );
}

export default App;
