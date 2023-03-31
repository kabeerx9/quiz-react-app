import React from "react";
import CreateQuizForm from "./components/CreateQuizForm";
import QuizList from "./components/QuizList";
import { db } from "./database/firebase";
import { useNavigate } from "react-router-dom";

function StartQuizButton({ id }) {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(`/app/${id}`)}>Start Quiz</button>
    </>
  );
}

function App() {
  const addDataHandler = () => {
    const quizRef = db.collection("quizzes").doc("geography");

    quizRef
      .set({ quizData })
      .then(() => {
        console.log("Questions added to Firestore");
      })
      .catch((error) => {
        console.error("Error adding questions to Firestore: ", error);
      });
  };

  return (
    <div>
      <button onClick={addDataHandler}>Add data in firebase</button>
      {/* <CreateQuizForm /> */}
      <StartQuizButton id="football" />
      {/* <QuizList /> */}
    </div>
  );
}

export default App;
