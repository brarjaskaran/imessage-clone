import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import IMessage from './components/IMessage';
import { login, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        // user logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      }else{
      // logged out
      }
    })
   
  }, [])


  return (
    <div className="app">
      {user ? <IMessage /> : <Login />
      }
     

    </div>
  );
}

export default App;
