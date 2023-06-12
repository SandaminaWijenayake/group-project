import React from "react";
import "./SectionCard.css";

const SectionCard = (props) => {
  const Classes = "section " + props.className;
  return <div className={Classes}>{props.children}</div>;
};

export default SectionCard;
