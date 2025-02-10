import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Services/axios";

// Async API call using Redux Thunk
export const fetchSettings = createAsyncThunk("settings/fetchSettings", async (_, { getState }) => {
  const state = getState();  // Access the entire Redux state
  const users = state.user.users;  // Get users from the Redux state
  if (!users || !users._id) {
    throw new Error("User ID is missing");
  }

  const response = await axios.get(`settings/getSettings/${users._id}`);
  console.log("fetchSettings", response);
  return response.data; // Directly access response.data
});


const settingSlice = createSlice({
  name: "setting",
  initialState: { settings: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSettings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.settings = action.payload; // Store the fetched settings here
      })
      .addCase(fetchSettings.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default settingSlice.reducer;
