import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Services/axios";

// Async API call using Redux Thunk
export const fetchLoggings = createAsyncThunk("loggins/fetchLoggings", async () => {
//   const response = await axios.get("users/getUser?userName=nguyengiathinh1&passWord=nguyengiathinh2");
//   return response.data; 
});

const loggingSlice = createSlice({
  name: "logging",
  initialState: { users: [], status: "idle" },
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

export default userSlice.reducer;
