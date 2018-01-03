import React from "react";
import "./styles.scss";

const TitleHeader = () => {
  const prefix = "Software Developer";
  const name = "Jeremy Melnyk";
  return (
    <div id="titleheader">
      <div className="content">
        <p className="prefix">{prefix}</p>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default TitleHeader;
