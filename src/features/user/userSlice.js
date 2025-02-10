import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Services/axios";

// Async API call using Redux Thunk
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get("users/getUser?userName=nguyengiathinh1&passWord=nguyengiathinh2");
  console.log("thuinh", response);
  return response.data; // Directly access response.data
});

const userSlice = createSlice({
  name: "user",
  initialState: { users: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload; // Store the fetched users here
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;
