import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="nav">
      <Link to="/login">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg"
          alt="login"
          className="userButton"
        />
        <p id="username">Log in to save sounds...</p>
      </Link>
      <Link to="/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          alt="go home"
          className="homeButton"
        />
      </Link>
    </section>
  );
};
export default Navbar;
