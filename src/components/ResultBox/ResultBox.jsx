import React from "react";
import "../ResultBox/ResultBox.scss";
import { FaRegCommentDots } from "react-icons/fa";

function ResultBox({ title, textField, photoList, titleImage }) {
  return (
    <div className="ResultBoxContainer">
      <div
        className="imgContainer"
        style={{ backgroundImage: `url(${titleImage})` }}
      >
        <div className="imgListNum">1</div>
        <div className="imgTitle">{title}</div>
      </div>
      <div className="textField">{textField}</div>
      <div className="iconField">
        <FaRegCommentDots className="commentIcon" />
        <span>1</span>
      </div>
    </div>
  );
}

export default ResultBox;
