import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import {thunk} from "redux-thunk";
import settingSlice from "../features/settings/settingSlice";
import loggingSlice from "../features/loggings/loggingSlice";
import apiSettingSlice from "../features/apiSettings/apiSettingSlice";
import openCollapseReducer from "../features/common/openCollapse";

const store = configureStore({
  reducer: {
    setting: settingSlice,
    user: userReducer,
    logging: loggingSlice,
    apiSetting: apiSettingSlice,
    collapse: openCollapseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk), // Correct usage of middleware
});

export default store;
