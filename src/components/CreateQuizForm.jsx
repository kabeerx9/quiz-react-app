import React, { useState } from "react";

import { db } from "../database/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

function CreateQuizForm() {
  const [quizName, setQuizName] = useState("");
  const [quizDescription, setQuizDescription] = useState("");
  const [quizPoints, setQuizPoints] = useState(0);
  const [quizTimeLimit, setQuizTimeLimit] = useState(0);

  const quizCollectionRef = collection(db, "movies");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Submit quiz data to database
    try {
      await addDoc(quizCollectionRef, {
        name: quizName,
        description: quizDescription,
        points: quizPoints,
        time: quizTimeLimit,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Quiz Name:
        <input
          type="text"
          value={quizName}
          onChange={(event) => setQuizName(event.target.value)}
        />
      </label>
      <label>
        Quiz Description:
        <textarea
          value={quizDescription}
          onChange={(event) => setQuizDescription(event.target.value)}
        />
      </label>
      <label>
        Points/Grading System:
        <input
          type="number"
          value={quizPoints}
          onChange={(event) => setQuizPoints(event.target.value)}
        />
      </label>
      <label>
        Time Limit:
        <input
          type="number"
          value={quizTimeLimit}
          onChange={(event) => setQuizTimeLimit(event.target.value)}
        />
      </label>
      <button type="submit">Create Quiz</button>
    </form>
  );
}

export default CreateQuizForm;
