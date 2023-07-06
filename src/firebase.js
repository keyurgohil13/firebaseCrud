// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXtZPOiOUypDpCrtFSpy0p7YkaKG2BomU",
  authDomain: "todo-app-33fed.firebaseapp.com",
  projectId: "todo-app-33fed",
  storageBucket: "todo-app-33fed.appspot.com",
  messagingSenderId: "361316370748",
  appId: "1:361316370748:web:7f992817a4c7d952973639"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);