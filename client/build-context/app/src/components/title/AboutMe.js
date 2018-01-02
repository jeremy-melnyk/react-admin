import React from "react";
import "./aboutMeStyles.scss";

const AboutMe = () => {
  const universityUrl = "https://www.concordia.ca/";
  const university = "Concordia University";
  const occupation = "Software Engineering Undergrad"
  return (
    <div id="aboutme">
      <h1>About Me</h1>
      <ul>
        <li>{occupation}</li>
        <li>
          <a href={universityUrl}>
            {university}
          </a>
        </li>
      </ul>
      <p>Lorem Ipsum</p>
    </div>
  );
};

export default AboutMe;
