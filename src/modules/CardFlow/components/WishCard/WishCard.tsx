import React from "react";
import wishPlug from "../../../../assets/wishPlug.svg";
import linkSearch from "../../../../assets/linkSearch.svg";
import "./wishCardStyles.scss";

function repeatChar(char: string, repeats: number) {
  let str = "";

  for (let i = 0; i < repeats; i++) {
    str += char;
  }

  return str;
}

const MAX_NAME_LENGTH = 26;

export const WishCard = (props: {
  imgSrc?: string;
  costLevel: number;
  name: string;
  isTable: boolean;
}) => {
  const { imgSrc, costLevel, name, isTable } = props;
  const editedName =
    name.length < MAX_NAME_LENGTH ? name.slice(0, MAX_NAME_LENGTH) : name;
  const costStr = repeatChar("$", costLevel);

  return (
    <>
      {isTable ? (
        <div className="wishcard-container">
          <div className="control-wrapper">
            <img
              src={imgSrc ?? wishPlug}
              alt="wish card"
              className={imgSrc ? "card-image" : "default-card-image"}
            />
            <text className="cost-level">{costStr}</text>
          </div>
          <text className="card-description">{editedName}</text>
        </div>
      ) : (
        <div className="cardRow">
          <img src={wishPlug} className="rowImage" alt="" />
          <text className="cardTitle">Some name</text>
          <button className="cardLinkWrapper">
            <img src={linkSearch} alt="searchLink" />
            <span className="cardLink">http://localhost:3000/wishes</span>
          </button>
        </div>
      )}
    </>
  );
};
