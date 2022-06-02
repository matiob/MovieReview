import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendLogoutRequest } from "../store/user";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  console.log("USER->", user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(sendLogoutRequest())
      .then(() => navigate("/"))
      .catch(() => navigate("/404"));
  };

  return (
    <nav className="navBarContainer">
      <div className="navLogo">
        <Link to="/" className="link">
          <h3 className="logo">MovieReview</h3>
        </Link>
      </div>
      <div className="navPages">
        {user.id ? (
          <>
            <Link to="/home/movies">
              <strong>Movies</strong>
            </Link>
            <Link to="/home/shows">
              <strong>TV-Shows</strong>
            </Link>
            <Link to="/users">
              <strong>Users</strong>
            </Link>
          </>
        ) : null}
      </div>
      <div className="navButtons">
        {user.id ? (
          <>
            <button onClick={handleLogout} className="boton">
              <p>{user.name}</p>
              <img src={user.image} alt="user logo" />
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="link">
              <button className="boton">Log in</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
