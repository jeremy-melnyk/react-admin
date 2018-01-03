import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const SkillBar = ({text, progress}) => {
  const toUpper = (text) => {
    return text
      .charAt(0)
      .toUpperCase() + text.slice(1);
  };
  return (
    <div id="skill-progress">
      <p>{text}</p>
      <div className="bar">
        <span className={progress}/>
        <p>
          {toUpper(progress)}
        </p>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  text: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired
};

export default SkillBar;
