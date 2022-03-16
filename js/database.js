import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js'
import { getDatabase, ref, onValue} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js"

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-mOLb--a6NR3TxNVAsdeVIax-_JzzmyE",
  authDomain: "cse134hw5-25a20.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://cse134hw5-25a20-default-rtdb.firebaseio.com/",
  projectId: "cse134hw5-25a20",
  storageBucket: "cse134hw5-25a20.appspot.com"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export { database }