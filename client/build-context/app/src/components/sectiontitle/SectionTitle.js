import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const SectionTitle = ({title}) => {
  return (
    <div id="sectiontitle">
      <div className="title">
        <div className="edge-container-left">
        <div className="edge"/>
        </div>
        <p>{title}</p>
        <div className="edge-container-right">
          <div className="edge"/>
        </div>
      </div>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default SectionTitle;
