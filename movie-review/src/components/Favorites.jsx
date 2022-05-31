import { useState, useEffect } from "react";
import { useParams, Route, Routes, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { deleteFavRequest, sendFavRequest } from "../store/favorite";
import { getFavRequest } from "../store/favorites";

import Item from "../commons/Item";
import Home from "./Home";

const Favorites = () => {
  const user = useSelector((state) => state.user);
  const media = useSelector((state) => state.favorites);

  const { type, id } = useParams();
  const [cont, setCont] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavRequest(user.id)).catch(() => {
      navigate("/404");
    });
  }, [id, cont, type]);

  //EL ADD NO VA EN ESTE COMPONENTE
  const addToFav = (media) => {
    dispatch(
      sendFavRequest({
        idApi: media.id,
        title: media.title || media.name,
        description: media.overview,
        year: media.release_date,
      })
    ).then(() => {
      alert("Element added successfully!");
      dispatch(getFavRequest(user.id));
      setCont(cont + 1);
      navigate(`/favorites/${type}/${id}`);
    });
  };

  const removeToFav = (media) => {
    dispatch(deleteFavRequest(media.id)).then(() => {
      alert("Element eliminated!");
      setCont(cont + 1);
      navigate(`/favorites/${type}/${id}`);
    });
  };

  return (
    <div>
      <Routes>
        <Route path="add" element={<Home addToFav={addToFav} />} />
        <Route
          path="delete"
          element={
            <div>
              <table>
                <thead>
                  <tr>
                    <th>{type.toUpperCase()}</th>
                  </tr>
                </thead>
                <tbody>
                  {media.map((element, i) => (
                    <div key={i}>
                      <Link to={`/home/${type}/${element.idApi}`}>
                        <Item
                          data={element}
                          key={element.id}
                          removeToFav={removeToFav}
                        />
                      </Link>
                    </div>
                  ))}
                </tbody>
              </table>
            </div>
          }
        />
        <Route
          path=""
          element={
            <div>
              <table>
                <thead>
                  <tr>
                    <th>{type.toUpperCase()}</th>
                  </tr>
                </thead>
                <tbody>
                  {media.map((element, i) => (
                    <div key={i}>
                      <Link to={`/home/${type}/${element.idApi}`}>
                        <Item data={element} key={element.id} />
                      </Link>
                    </div>
                  ))}
                </tbody>
              </table>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default Favorites;
