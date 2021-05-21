import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";

import AuthContext from "../context/AuthContext";

const Navigation = () => {
  const [auth, setAuth] = useContext(AuthContext);

  const history = useHistory();

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      setAuth(null);
      history.push("/");
    }
  };

  return (
    <Navbar className="nav" bg="light" variant="light" expand="lg">
      <NavLink to="/" className="nav__logo">
        Holidaze
      </NavLink>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="nav__icon" id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            exact
            to="/"
            className="nav__link"
            activeClassName="nav__active"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/hotels"
            className="nav__link"
            activeClassName="nav__active"
          >
            Hotels
          </NavLink>
          <NavLink
            exact
            to="/contact"
            className="nav__link"
            activeClassName="nav__active"
          >
            Contact
          </NavLink>
          {auth ? (
            <>
              <NavLink
                exact
                to="/enquiries"
                className="nav__link"
                activeClassName="nav__active"
              >
                Enquiries
              </NavLink>
              <NavLink
                exact
                to="/messages"
                className="nav__link"
                activeClassName="nav__active"
              >
                Messages
              </NavLink>
              <NavLink
                exact
                to="/add"
                className="nav__link"
                activeClassName="nav__active"
              >
                Add
              </NavLink>
              <NavLink to="/" onClick={logout} className="nav__login">
                Log out
              </NavLink>
            </>
          ) : (
            <NavLink to="/login" className="nav__login">
              Login
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
