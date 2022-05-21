// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC53EcgXa21DeV3rU-DhKeZv3evJobeSR4",
  authDomain: "chinese-herbal-clinic-b438d.firebaseapp.com",
  projectId: "chinese-herbal-clinic-b438d",
  storageBucket: "chinese-herbal-clinic-b438d.appspot.com",
  messagingSenderId: "343981321804",
  appId: "1:343981321804:web:3e3bbe208b1e3f97488ee9",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();

export { db, auth };
