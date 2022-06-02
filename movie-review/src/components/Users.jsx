import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsersRequest } from "../store/users";
import UserItem from "../commons/UserItem";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);
  console.log("USER->", user);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Users</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <Link to={`/users/${user.id}`}>
              <UserItem user={user} key={user.id} />
            </Link>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Users;
