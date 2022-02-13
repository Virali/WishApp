import { useState } from "react";
import "./cardContainerStyles.scss";
import { Card } from "./Card";
import SwitchButtonLeft from "../../assets/switchButtonLeft.svg";
import SwitchButtonRight from "../../assets/switchButtonRight.svg";

export const CardContainer = () => {
  const [isTable, setIsTable] = useState(false);

  const handlerSwitchTable = () => {
    setIsTable(!isTable);
  };

  return (
    <>
      <div className="headerCard">
        <h1 className="titleWishes">МОИ ЖЕЛАНИЯ</h1>
        <button className="buttonSwitch" onClick={handlerSwitchTable}>
          <img src={isTable ? SwitchButtonRight : SwitchButtonLeft} alt="" />
        </button>
      </div>
      <Card isTable={isTable} />
    </>
  );
};
