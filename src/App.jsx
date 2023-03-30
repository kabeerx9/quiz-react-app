import React from "react";
import CreateQuizForm from "./components/CreateQuizForm";
import QuizList from "./components/QuizList";
import { db } from "./database/firebase";
import { useNavigate } from "react-router-dom";

const data = [
  {
    name: "Anime",
    description: "Quiz about anime characters power level",
    time: 2,
    points: 10,
  },
  {
    questions: [
      {
        questionText: "What is the capital of France?",
        answerOptions: [
          { answerText: "New York", isCorrect: false },
          { answerText: "London", isCorrect: false },
          { answerText: "Paris", isCorrect: true },
          { answerText: "Dublin", isCorrect: false },
        ],
      },
      {
        questionText: "Who is CEO of Tesla?",
        answerOptions: [
          { answerText: "Jeff Bezos", isCorrect: false },
          { answerText: "Elon Musk", isCorrect: true },
          { answerText: "Bill Gates", isCorrect: false },
          { answerText: "Tony Stark", isCorrect: false },
        ],
      },
      {
        questionText: "The iPhone was created by which company?",
        answerOptions: [
          { answerText: "Apple", isCorrect: true },
          { answerText: "Intel", isCorrect: false },
          { answerText: "Amazon", isCorrect: false },
          { answerText: "Microsoft", isCorrect: false },
        ],
      },
      {
        questionText: "How many Harry Potter books are there?",
        answerOptions: [
          { answerText: "1", isCorrect: false },
          { answerText: "4", isCorrect: false },
          { answerText: "6", isCorrect: false },
          { answerText: "7", isCorrect: true },
        ],
      },
    ],
  },
];

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
    const quizRef = db.collection("quizzes").doc("quiz2");

    quizRef
      .set({ questions })
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
      <StartQuizButton id="quiz2" />
      {/* <QuizList /> */}
    </div>
  );
}

export default App;
