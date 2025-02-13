import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Services/axios";

// Async API call using Redux Thunk
export const fetchApiSettings = createAsyncThunk("apiSettings/fetchApiSettings", async (_, { getState }) => {
  const state = getState();  // Access the entire Redux state
  const users = state.user.users;  // Get users from the Redux state
  if (!users || !users._id) {
    throw new Error("User ID is missing");
  }

  const response = await axios.get(`apiSettings/getAllApiSettings/${users._id}`);
  console.log("fetchApiSettings", response);
  return response.data; // Directly access response.data
});

const loggingSlice = createSlice({
  name: "apiSetting",
  initialState: { apiSettings: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiSettings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchApiSettings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.apiSettings = action.payload; // Store the fetched users here
      })
      .addCase(fetchApiSettings.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default loggingSlice.reducer;
