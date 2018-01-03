import React from "react";
import "./homeStyles.scss";

import Title from "../title/Title";
import SectionTitle from "../sectiontitle/SectionTitle";
import SectionList from "../section/SectionList";

const HomePage = () => {
  const programmingBullets = [
    {
      text: "C#",
      progress: "excellent"
    }, {
      text: "Java",
      progress: "proficient"
    }, {
      text: "JavaScript",
      progress: "proficient"
    }, {
      text: "TypeScript",
      progress: "proficient"
    }, {
      text: "C++",
      progress: "familiar"
    }, {
      text: "C",
      progress: "familiar"
    }, {
      text: "PHP",
      progress: "familiar"
    }, {
      text: "SQL",
      progress: "familiar"
    }, {
      text: "Python",
      progress: "limited"
    }, {
      text: "Shell Script",
      progress: "limited"
    }
  ];
  return (
    <div id="home">
      <Title/>
      <div className="container">
        <div className="section">
          <SectionTitle title="A little bit about me"/>
          <div className="section-content">
            <SectionList title="Programming Languages" bullets={programmingBullets}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
