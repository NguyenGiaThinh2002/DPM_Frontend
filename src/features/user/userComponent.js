import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserComponent = () => {
  const users = useSelector((state) => state.user.users);
  const status = useSelector((state) => state.user.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div style={{marginTop: "150px"}}>
      <h1>Users List</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" &&
        users.map((user) => <p key={user.id}>{user.name}</p>)}
      {status === "failed" && <p>Failed to load users</p>}
    </div>
  );
};

export default UserComponent;
