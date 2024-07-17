import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUSer = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};
type TAuth = {
  user: null | TUSer;
  token: null | object;
};

const initialState: TAuth = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      (state.user = user), (state.token = token);
    },
    logOut: (state) => {
      (state.user = null), (state.token = null);
    },
  },
});
export const { setUser, logOut } = authSlice.actions;
export const useCurrentToken = (state: RootState) => state.auth.token;
export default authSlice.reducer;
