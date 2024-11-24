import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserReducer from "../store/reducers/UserReducer";

const Users = () => {
  const { users } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  const DeleteHandler = (index) => {
    dispatch(userdelete(index));
  };
  console.log(users);
  return (
    <div className="m-auto container p-10 mt-5 bg-red-100">
      <h1 className="text-2xl font-bold text-red-500">User List</h1>
      {users.map((user, index) => (
        <li style={{ listStyle: "none" }} key={user.id}>
          <h1>
            {user.firstname}
            <span
              onClick={() => DeleteHandler(index)}
              className=" px-2 text-red-500 font-bold cursor-pointer"
            >
              X
            </span>
          </h1>
        </li>
      ))}
    </div>
  );
};

export default Users;
