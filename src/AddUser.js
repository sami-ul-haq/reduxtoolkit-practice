import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./reducers/userReducer";

const AddUser = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const chnageHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(data));
  };

  return (
    <form onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="enter firstName"
        name="name"
        value={data.name}
        onChange={chnageHandler}
      />
      <input
        type="email"
        placeholder="enter email"
        name="email"
        value={data.email}
        onChange={chnageHandler}
      />
      <input
        type="text"
        placeholder="enter address"
        name="address"
        value={data.address}
        onChange={chnageHandler}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddUser;
