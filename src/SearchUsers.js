import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterUser } from "./reducers/userReducer";

const SearchUsers = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setQuery(e.target.value);
    dispatch(filterUser(query));
  };

  return (
    <input
      type="text"
      value={query}
      placeholder="Search User"
      onChange={changeHandler}
    />
  );
};

export default SearchUsers;
