import { useEffect } from "react";
import { useState } from "react";
import { db } from "../database/firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import "./QuizList.css";

const QuizList = () => {
  const [quizList, setQuizList] = useState([]);

  const quizCollectionRef = collection(db, "movies");

  const deleteQuiz = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await deleteDoc(movieDoc);
    setQuizList((prevQuizList) =>
      prevQuizList.filter((quiz) => quiz.id !== id)
    );
  };

  useEffect(() => {
    const getQuizList = async () => {
      // READ THE DATA
      // SET THE QUIZ LIST DATA
      try {
        const data = await getDocs(quizCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
        setQuizList(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getQuizList();
  }, [quizList]);

  return (
    <>
      <h1> The following Quiz are Available :</h1>
      <div className="individual">
        {quizList.map((quiz) => (
          <div>
            <h1>{quiz.name}</h1>
            <p>{quiz.description}</p>
            <p>{quiz.points}</p>
            <p>{quiz.time}</p>
            <button>Start Quiz </button>
            <button onClick={() => deleteQuiz(quiz.id)}>Delete Quiz </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuizList;
