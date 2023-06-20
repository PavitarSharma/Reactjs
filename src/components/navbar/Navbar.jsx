import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("token"));
const navigate = useNavigate()
  const logoutUser = () => {
    localStorage.removeItem("token")
    navigate("/login")
  };

  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="navbar-logo">Dashboard</h1>
      </Link>
      <div className="profile">
        <div className="profile-user">{user?.username}</div>
        <button onClick={logoutUser} type="button" className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
