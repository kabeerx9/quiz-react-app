import React from "react";
import QuizList from "./components/QuizList";
import { useNavigate } from "react-router-dom";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(5),
  },
  title: {
    marginBottom: theme.spacing(5),
  },
  createQuizButton: {
    marginBottom: theme.spacing(5),
  },
  quizList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

function CreateQuizButton() {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Button
      className={classes.createQuizButton}
      variant="contained"
      color="primary"
      onClick={() => navigate(`/app/creation`)}
    >
      Create Quiz
    </Button>
  );
}

function App() {
  const classes = useStyles();
  console.log("App component");

  return (
    <Container className={classes.root} maxWidth="lg">
      <Typography className={classes.title} variant="h2">
        QUIZ APP ASSIGNMENT
      </Typography>
      <CreateQuizButton />
      <Grid container spacing={3} className={classes.quizList}>
        <QuizList />
      </Grid>
    </Container>
  );
}

export default App;
