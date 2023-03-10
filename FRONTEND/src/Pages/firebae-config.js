import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAWS_8M6VuO_XypVBQLhNBP5Q6ja6BoQYQ",
  authDomain: "cuarto-proyecto-bootcamp.firebaseapp.com",
  projectId: "cuarto-proyecto-bootcamp",
  storageBucket: "cuarto-proyecto-bootcamp.appspot.com",
  messagingSenderId: "281538600474",
  appId: "1:281538600474:web:ddea1dc44ca67111d77ba3",
  measurementId: "G-Y51HDC256N"
};

const app = initializeApp(firebaseConfig)

export const db= getFirestore(app)