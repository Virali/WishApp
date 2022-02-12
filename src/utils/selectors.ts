import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState, useAppSelector } from "../store";

// root selectors
export const useAuth = () => useAppSelector((state) => state.authentication);

// reselect
export const selectIsAuth = () => createSelector(
  useAuth,
  ({ isAuthorized }) => isAuthorized,
)(undefined);
