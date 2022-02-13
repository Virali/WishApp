import React from "react";
import "./header.scss";
import { ReactComponent as CircledQuestion } from "../../assets/circledQuestion.svg";
import { ReactComponent as DoorbellIcon } from "../../assets/doorbellIcon.svg";
import { ReactComponent as ShareIcon } from "../../assets/shareIcon.svg";
import exampleUserAvatar from "../../assets/exampleUserAvatar.png";

import { UserAppearance } from "../UserAppearance/UserAppearance";
import { GuestHeader } from "./GuestHeader";
import { selectIsAuth } from "../../utils/selectors";

const SEARCH_PLACEHOLDER = "Search";

export const Header = function () {
  const isAuth = selectIsAuth();

  if (!isAuth) {
    return <GuestHeader />;
  }

  return (
    <div className="header-wrapper-user">
      <div className="search-container">
        <input className="search-input" placeholder={SEARCH_PLACEHOLDER} />
      </div>
      <div className="user-container">
        <UserAppearance imgSource={exampleUserAvatar} email='antverpen'/>
        <div className="icon-row">
          <CircledQuestion />
          <DoorbellIcon />
          <ShareIcon />
        </div>
      </div>
    </div>
  );
};
