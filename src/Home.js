import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUsers } from "./actions/userActions";
import AddUser from "./AddUser";
import Loader from "./Loader";
import { delUser } from "./reducers/userReducer";
import SearchUsers from "./SearchUsers";

const Home = () => {
  const { users, loading } = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();
  const DeleteUser = (id) => {
    dispatch(delUser(id));
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return !loading ? (
    <div>
      <div className="addusers">
        <AddUser />
        <SearchUsers />
      </div>
      <div className="users">
        {users.map((user, i) => (
          <div key={i} className="user-item">
            <p>{user.name}</p>
            <button onClick={() => DeleteUser(user.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Home;
