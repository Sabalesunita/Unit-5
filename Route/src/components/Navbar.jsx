import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        diaplay: "flex",
        border: "2px solid red",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ border: "2px solid blue" }}
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/start">
                  Start
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sell">
                  Sell
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/market">
                  Market
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/manage">
                  Manage
                </Link>
              </li>
            </ul>

            {/* <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          </div>
        </div>
        <div>
          <ul
            style={{
              diaplay: "flex",
              flexDirection: "row",
              border: "2px solid green",
              //   justifyContent: "space-between",
            }}
          >
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/learn">
                Learn
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
