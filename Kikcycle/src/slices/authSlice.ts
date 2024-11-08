import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  id: "",
  name: null,
  email: null,
  image: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<Omit<AuthState, "isAuthenticated">>) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.image = action.payload.image;
      state.isAuthenticated = true;
    },
    clearAuth(state) {
      state.id = "";
      state.name = null;
      state.email = null;
      state.image = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
