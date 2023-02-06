import React from "react";
import { auth } from "fbase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const onLogOutClick = () => {
    console.log("logout click test");
    auth.signOut();
    navigate("/"); // Router.js
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
