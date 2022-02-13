import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { AuthFormTypes, TO_EMAIL_TYPE } from "../constants";

type LogResponse = {
  [key: string]: string | number | undefined;
};

interface AuthState {
  type: AuthFormTypes;
  login: LogResponse;
  error: string;
  isAuthorized: boolean;
  isVisible: boolean;
}

const initialState: AuthState = {
  type: "LOGIN",
  login: {},
  error: "",
  isAuthorized: false,
  isVisible: false,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    changeBoxType: (state, action: PayloadAction<AuthFormTypes>) => {
      state.type = action.payload;
    },
    toggleVisibility: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
    saveLoginResult: (state, action: PayloadAction<LogResponse>) => {
      state.login = action.payload;
    },
    saveError: (state, { payload }) => {
      state.error = payload;
    },
    clearForm: (state) => {
      return { ...initialState, type: state.type };
    },
  },
});

export const {
  changeBoxType,
  toggleVisibility,
  saveLoginResult,
  clearForm,
  saveError,
} = authSlice.actions;

export const authReducer = authSlice.reducer;

export const getFormType = (state: RootState) => state.authentication.type;
