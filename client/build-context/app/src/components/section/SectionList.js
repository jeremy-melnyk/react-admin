import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

import SkillBar from "../skill/SkillBar";

const SectionList = ({title, bullets}) => {
  const generateBullet = (bullet) => {
    if (bullet.href) {
      return <a href={bullet.href}>{bullet.text}</a>
    } else if (bullet.progress) {
      return <SkillBar text={bullet.text} progress={bullet.progress}/>;
    } else {
      return bullet.text;
    }
  };
  const mapSection = (bullet, index) => {
    return <li key={index}>{generateBullet(bullet)}</li>;
  };
  return (
    <div className="section-list">
      <h1>{title}</h1>
      <ul>
        {bullets.map(mapSection)}
      </ul>
    </div>
  );
};

SectionList.propTypes = {
  title: PropTypes.string.isRequired,
  bullets: PropTypes.array.isRequired
};

export default SectionList;
