import React from "react";
export default function About() {
  return (
    <div className="aboutContainer">
      <div className="about">
        <h2>Task Tracker</h2>
        <div className="description">
          <h4>
            This project is build using React. React is Javascript library that
            is used for building SPA(Single Page Application) and it is a
            popular lilbrary among the developers.It is playing an essential
            role in the front-end ecosystem.<br />
            &nbsp;In this project we use a lot of packages such as &nbsp;<span>
              REACT-ROUTER
            </span>{" "}
            for routing between pages, <span>REACT-TOASTIFY</span> for
            notification, &nbsp;<span>JSON-SERVER</span> for making a fake
            backend and Rest API, and <span>REACT-ICON</span>
          </h4>
          <br />

          <h3>Coding By: Mahdi Hasanzadeh</h3>
        </div>
      </div>
    </div>
  );
}
