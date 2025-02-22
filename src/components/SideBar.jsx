import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchQueryRowSongsAction } from "../redux/actions";
import { Link } from "react-router-dom";

const SideBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchQueryRowSongsAction(query));
  };

  return (
    <div className="col col-2">
      <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <a className="navbar-brand" href="index.html">
            <img src="assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <Link to="/" className="nav-item nav-link d-flex align-items-center">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </Link>
                </li>
                <li>
                  <Link to="/favourites" className="nav-item nav-link d-flex align-items-center" href="#">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </Link>
                </li>
                <li>
                  <div>
                    <Form onSubmit={handleSubmit}>
                      <div className="input-group mt-3">
                        <Form.Control
                          type="search"
                          aria-label="Search"
                          placeholder="Search"
                          onChange={(e) => setQuery(e.target.value)}
                        />
                        <div className="input-group-append">
                          <Button type="submit" variant="btn btn-outline-secondary btn-sm h-100">
                            GO
                          </Button>
                        </div>
                      </div>
                    </Form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
