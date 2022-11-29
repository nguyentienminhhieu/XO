import logo from './logo.svg';
import './App.css';
import Game from './components/tictactoe/Game';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5vnZeNjxRq_QxWfYC6-GjFaxKF6tgxfk",
  authDomain: "fir-61108.firebaseapp.com",
  projectId: "fir-61108",
  storageBucket: "fir-61108.appspot.com",
  messagingSenderId: "433275145177",
  appId: "1:433275145177:web:5de8c82c3979a6c40d27c8",
  measurementId: "G-4RTLZJ9J87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <div className="App">

      <Game></Game>
    </div>
  );
}

export default App;
