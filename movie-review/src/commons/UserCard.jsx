import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUserRequest } from "../store/user";
import { getFavRequest } from "../store/favorites";
import pefilImage from "../assets/perfil.png";

const UserCard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.user);
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getSingleUserRequest(id));
    dispatch(getFavRequest(id));
  }, [id]);

  return (
    <div>
      <div>
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
      <div>
        <figure>
          <img
            src={user.image}
            alt={pefilImage}
            style={{ width: "94px", height: "141px" }}
          />
        </figure>
      </div>
      <table>
        <thead>
          <tr>
            <th>Favorites</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((list, i) => (
            <li key={i}>
              <Link to={`/favorites/${list.type}/${list.id}`}>
                <a>{list.name}</a>
              </Link>
            </li>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserCard;
