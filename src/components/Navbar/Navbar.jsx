import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info shadow p-3" id="menu">
      <div className="container justify-content-end">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="w-100">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
              <li className="nav-item fw-bold fs-4 text-uppercase">
                <NavLink
                  className="nav-link mx-lg-3 p-0 text-center"
                  aria-current="page"
                  to="/"
                >
                  Personajes
                </NavLink>
              </li>
              <hr />
              <li className="nav-item fw-bold fs-4 text-uppercase">
                <NavLink
                  className="nav-link mx-lg-3 p-0 text-center"
                  to="/chapters"
                >
                  Episodios
                </NavLink>
              </li>
              <hr />
              <li className="nav-item fw-bold fs-4 text-uppercase ">
                <NavLink
                  className="nav-link mx-lg-3 p-0 text-center"
                  to="/favorites"
                >
                  Favoritos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
