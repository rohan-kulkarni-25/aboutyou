import React, { useEffect, useState } from "react";
import UserBox from "./UserBox";
import "./Styles/AllUsers.css";

export default function AllUsers(props) {
  const { load, setload } = props;
  const [item, setitem] = useState([]);

  const getUsers = async () => {
    const response = await fetch("http://localhost:4002/api/v1")
      .then((res) => res.json())
      .then((data) => {
        setitem(data);
        setload(false);
        console.log(data);
      });
  };
  const loadUseEffect = [1];
  useEffect(() => {
    getUsers();
  }, loadUseEffect);

  return (
    <div className={load ? "allUsers blur" : "allUsers"}>
      {item.map((element) => (
        <UserBox
          key={element._id}
          name={element.name}
          email={element.name}
          bio={element.bio}
          githublink={element.github}
          imagelink={element.photo_secure_URL}
          linkedinlink={element.linkedin}
          twitterlink={element.twitter}
          headline={element.headline}
          instagramlink={element.instagram}
        ></UserBox>
      ))}
    </div>
  );
}
