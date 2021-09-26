import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/userActions";

const initialState = {
  loading: true,
  users: [],
  userContainer: [],
  errors: {},
};

const userReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    filterUser: (state, action) => {
      state.users = state.userContainer.filter((user) =>
        user.name.toLowerCase().includes(action.payload)
      );
    },
    delUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.userContainer = action.payload;
    },
  },
});

export const { addUser, filterUser, delUser } = userReducer.actions;
export default userReducer.reducer;
