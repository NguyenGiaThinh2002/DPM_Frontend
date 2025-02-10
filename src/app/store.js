import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import {thunk} from "redux-thunk";
import settingSlice from "../features/settings/settingSlice";

const store = configureStore({
  reducer: {
    setting: settingSlice,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk), // Correct usage of middleware
});

export default store;
