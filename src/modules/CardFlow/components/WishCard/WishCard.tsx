import React from "react";
import wishPlug from "../../../../assets/wishPlug.svg";
import linkSearch from "../../../../assets/linkSearch.svg";
import "./wishCardStyles.scss";
import { ModalCreateWish } from "../../../../components/Modal/ModalCreateWish";
import Modal from "../../../_common/Modal";

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
  id?: number | string;
}) => {
  const { imgSrc, costLevel, name, isTable, id } = props;
  const editedName =
    name.length < MAX_NAME_LENGTH ? name.slice(0, MAX_NAME_LENGTH) : name;
  const costStr = repeatChar("$", costLevel);

  return (
    <>
      <Modal content={<ModalCreateWish id={id} />}>
        {isTable ? (
          <div className="wishcard-container">
            <div className="control-wrapper">
              <img
                src={`data:image/jpeg;base64,${imgSrc}`}
                alt="wish card"
                className={imgSrc ? "card-image" : "default-card-image"}
              />
              <text className="cost-level">{costStr}</text>
            </div>
            <text className="card-description">{editedName}</text>
          </div>
        ) : (
          <div className="cardRow">
            <img
              src={`data:image/jpeg;base64,${imgSrc}`}
              className="rowImage"
              alt="wish card"
            />
            <text className="cardTitle">Some name</text>
            <button className="cardLinkWrapper">
              <img src={linkSearch} alt="searchLink" />
              <span className="cardLink">http://localhost:3000/wishes</span>
            </button>
          </div>
        )}
      </Modal>
    </>
  );
};
