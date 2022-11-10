import { Link } from "react-router-dom";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info text-dark p-3" id="menu">
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
          <div className="d-flex justify-content-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item fw-bold fs-4">
                <Link className="nav-link mx-lg-3" aria-current="page" to="/">
                  Personajes
                </Link>
              </li>
              <li className="nav-item fw-bold fs-4">
                <Link className="nav-link mx-lg-3" to="/chapters">
                  Episodios
                </Link>
              </li>
              <li className="nav-item fw-bold fs-4">
                <Link className="nav-link mx-lg-3" to="/favorites">
                  Favoritos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
