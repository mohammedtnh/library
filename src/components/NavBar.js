import { NavItem } from "../styles";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-nav ml-auto">
        <NavItem exact to="/" className="nav-item">
          Home
        </NavItem>
        <NavItem to="/members" className="nav-item">
          Members
        </NavItem>
        <NavItem to="/books" className="nav-item">
          Books
        </NavItem>
      </div>
    </nav>
  );
};

export default NavBar;
