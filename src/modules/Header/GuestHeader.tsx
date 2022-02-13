import "./header.scss";
import { EllipseButton } from "../_common/EllipseButton/EllipseButton";
import { ReactComponent as LogoGreen } from "../../assets/igiftyouGreen.svg";
import { ReactComponent as EntryText } from "../../assets/entryText.svg";
import { useDispatch } from "react-redux";
import {
  AuthFormTypes,
  LOG_IN_TYPE,
  SIGN_UP_TYPE,
} from "../LoginPage/constants";
import { changeBoxType, toggleVisibility } from "../LoginPage/redux/reducer";

export const GuestHeader = () => {
  const dispatch = useDispatch();

  function openAuth(authType: AuthFormTypes) {
    dispatch(changeBoxType(authType));
    dispatch(toggleVisibility(true));
  }

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
          onClick={() => openAuth(SIGN_UP_TYPE)}
        >
          Регистрация
        </EllipseButton>
        <EllipseButton
          width="132px"
          height="42px"
          backgroundColor="#5C50E0"
          textColor="white"
          margin="0 0 0 20px"
          onClick={() => openAuth(LOG_IN_TYPE)}
        >
          <EntryText />
        </EllipseButton>
      </div>
    </div>
  );
};
