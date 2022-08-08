import React from "react";
import image from "../src/devicon.jpeg";
import "./logo.css";

const logo = () => {
  return (
    <div className=" logo-div">
      <img className="logo ma3" src={image} alt="" />
    </div>
  );
};

export default logo;
