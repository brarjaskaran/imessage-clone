import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcc-7nUhDWL4m33_HK9jOzCfF9tEyX0Ow",
  authDomain: "imessage-clone-b27d9.firebaseapp.com",
  databaseURL: "https://imessage-clone-b27d9.firebaseio.com",
  projectId: "imessage-clone-b27d9",
  storageBucket: "imessage-clone-b27d9.appspot.com",
  messagingSenderId: "212145178681",
  appId: "1:212145178681:web:d07b0838d167873a1ce5e8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
