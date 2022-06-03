import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFavRequest } from "../store/favorites";
import { useEffect } from "react";

const Sidebar = () => {
  const user = useSelector((state) => state.user);
  const favlist = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) return;
    dispatch(getFavRequest(user.id));
  }, [user]);

  return (
      <aside
        className="d-flex flex-column flex-shrink-0 p-3 bg-light aside"
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <a href="#bootstrap"></a>
          </svg>
          <span className="fs-4">Menu</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width="16" height="16">
                <a href="#home"></a>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <a href="#speedometer2"></a>
              </svg>
              Movies
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <a href="#table"></a>
              </svg>
              TV-Shows
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <a href="#grid"></a>
              </svg>
              Favorites
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <a href="#people-circle"></a>
              </svg>
              Users
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>perfil</strong>
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </aside>
  );
};

export default Sidebar;
