import React from "react";
import SectionList from "../section/SectionList";
import "./styles.scss";

const AboutMe = () => {
  const educationBullets = [
    {
      text: "Software Engineering Undergrad"
    }, {
      text: "Concordia University",
      href: "https://www.concordia.ca/"
    }
  ];
  return (
    <div id="aboutme">
      <div className="left">
        <SectionList title="Education" bullets={educationBullets}/>
      </div>
    </div>
  );
};

export default AboutMe;
