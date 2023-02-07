import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { auth } from "fbase";
import { Reset } from "reset-css";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // true 였는데 false로 바뀌면서 다시 그려주게 되는 것
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    // https://firebase.google.com/docs/auth/web/manage-users?hl=ko
    auth.onAuthStateChanged((user) => {
      // logout 하면 null로 바뀜
      console.log("user");
      console.log(user);
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "Initializing..."
      )}
      <footer>&copy; {new Date().getFullYear()} Twitter</footer>
    </>
  );
}

export default App;
