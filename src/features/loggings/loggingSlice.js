import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Services/axios";

// Async API call using Redux Thunk
export const fetchLoggings = createAsyncThunk("settings/fetchLoggings", async (_, { getState }) => {
  const state = getState();  // Access the entire Redux state
  const users = state.user.users;  // Get users from the Redux state
  if (!users || !users._id) {
    throw new Error("User ID is missing");
  }

  const response = await axios.get(`loggings/getLoggings/${users._id}`);
  console.log("fetchSettings", response);
  return response.data; // Directly access response.data
});

const loggingSlice = createSlice({
  name: "logging",
  initialState: { loggings: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLoggings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loggings = action.payload; // Store the fetched users here
      })
      .addCase(fetchLoggings.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default loggingSlice.reducer;
