import React from "react";
import Profile from "../images/user.png";
import "./Styles/AddButton.css";

export default function AddButton(props) {
  const { setPage } = props;

  const btnClicked = () => {
    setPage(1);
    console.log("Button Clicked");
  };

  return (
    <div className="addyourself">
      <button className="add" type="submit" onClick={btnClicked}>
        Add Yourself <img className="profile" src={Profile} alt="" />
      </button>
    </div>
  );
}
