import React from "react";

import { signOut } from "firebase/auth";
import { auth } from "./Firebase";

const LogoutButton = () => {

  function logOut(){
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    alert("Logout successfully!")
  }


  return (
    <button onClick={logOut}>
      Logout
    </button>
  );
};

export default LogoutButton;