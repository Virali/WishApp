import { AnyAction } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import { ThunkAction } from "redux-thunk";
import { commonThunk } from "../../../utils/apiHelpers";
import { getURLParam } from "../../../utils/functions";
import { INST_SENT_TYPE } from "../constants";
import {
  logRequest,
  newPassRequest,
  regRequest,
  updatePassRequest,
} from "./loginApi";
import { changeBoxType, saveError, saveLoginResult } from "./reducer";

export const logUser = (
  body: any
): ThunkAction<void, RootStateOrAny, any, AnyAction> => async (dispatch) => {
  const res = await logRequest(body);

  if (res?.error) {
    dispatch(saveError(res.message));
  }

  dispatch(saveLoginResult(res));
};

export const regUser = (
  body: any
): ThunkAction<void, RootStateOrAny, any, AnyAction> => async (dispatch) => {
  const res = await regRequest(body);

  if (res?.error || res?.message) {
    dispatch(saveError(res.message));
  }

  dispatch(saveLoginResult(res));
};

export const requestNewPass = (body: any) =>
  commonThunk(
    () => newPassRequest(body),
    () => changeBoxType(INST_SENT_TYPE),
    (res: any) => saveError(res.message)
  );

export const updatePassword = (body: any) =>
  commonThunk(
    () => updatePassRequest(body),
    () => logUser({ email: getURLParam("email"), password: body.password }),
    (res: any) => saveError(res.message)
  );
