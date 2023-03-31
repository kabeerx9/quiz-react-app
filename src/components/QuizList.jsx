import { useEffect } from "react";
import { useState } from "react";
import { db } from "../database/firebase";
import "./QuizList.css";

import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  quizList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(3),
    flexWrap: "wrap", // Add flex-wrap property to wrap items
  },
  quizCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    width: "50%", // Set width to 50% for 2 columns
    [theme.breakpoints.up("sm")]: {
      maxWidth: "500px",
    },
  },
}));

const QuizList = () => {
  const classes = useStyles();
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    db.collection("quizzes")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setQuizzes(data);
      });
  }, []);

  const startQuizHandler = (id) => {
    navigate(`/app/${id}`);
  };

  console.log("QuizList Component");

  return (
    <>
      <Typography variant="h3">Current Quiz Available: </Typography>
      <div className={classes.quizList}>
        {quizzes.map((quiz, index) => (
          <div className={classes.quizCard} key={index}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => startQuizHandler(quiz.quizData[0].name)}
            >
              Name: {quiz.quizData[0].name}
            </Button>
            <Typography variant="subtitle1">
              {quiz.quizData[0].description}
            </Typography>
            <Typography variant="subtitle1">
              Point per : {quiz.quizData[0].points}
            </Typography>
            <Typography variant="subtitle1">
              Time: {quiz.quizData[0].time}
            </Typography>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuizList;
