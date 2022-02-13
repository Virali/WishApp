import { createSelector } from "@reduxjs/toolkit";
import { useAppSelector } from "../store";

// root selectors
export const useAuth = () => useAppSelector((state) => state.authentication);

// reselect
export const selectIsAuth = () => createSelector(
  useAuth,
  ({ isAuthorized }) => isAuthorized,
)(undefined);
