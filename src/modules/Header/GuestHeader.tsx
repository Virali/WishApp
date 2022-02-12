import "./header.scss";
import { EllipseButton } from "../_common/EllipseButton/EllipseButton";
import { ReactComponent as LogoGreen } from "../../assets/igiftyouGreen.svg";
import { ReactComponent as EntryText } from "../../assets/entryText.svg";
import styled from "styled-components";

export const GuestHeader = () => {
  return (
    <div className="header-wrapper-guest">
      <div className="left-side">
        <LogoGreen />
      </div>
      <div className="right-side">
        <EllipseButton
          width="160px"
          height="42px"
          textColor="#5C50E0"
          backgroundColor="#F7F7F7"
          onClick={() => {}}
        >
          Регистрация
        </EllipseButton>
        <EllipseButton
          width="132px"
          height="42px"
          backgroundColor="#5C50E0"
          textColor="white"
          margin="0 0 0 20px"
          onClick={() => {}}
        >
          <EntryText />
        </EllipseButton>
      </div>
    </div>
  );
};

const ButtonML = styled(EllipseButton)`
  margin-left: 20px;
`;
