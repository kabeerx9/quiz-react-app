// import { initializeApp } from "firebase/app";

// import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyBBI5pp8k_acYVn83vSdava18Aj9JJWVI0",
//   authDomain: "quiz-9c685.firebaseapp.com",
//   projectId: "quiz-9c685",
//   storageBucket: "quiz-9c685.appspot.com",
//   messagingSenderId: "378619665748",
//   appId: "1:378619665748:web:6f41afa548572b5cb4bcc1",
//   measurementId: "G-XBY1TSR48W",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

// CHAT GPT METHOD

// import firebase from "firebase/app";
// import "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBBI5pp8k_acYVn83vSdava18Aj9JJWVI0",
  authDomain: "quiz-9c685.firebaseapp.com",
  projectId: "quiz-9c685",
  storageBucket: "quiz-9c685.appspot.com",
  messagingSenderId: "378619665748",
  appId: "1:378619665748:web:6f41afa548572b5cb4bcc1",
  measurementId: "G-XBY1TSR48W",

});

// Create a reference to the Firestore database
export const db = firebase.firestore();
