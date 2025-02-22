import { useState } from "react";
import { Button, Col, Container, Form, Image, InputGroup, Navbar } from "react-bootstrap";
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
    <Col sm={2}>
      <Navbar expand="md" className="fixed-left justify-content-between" id="sidebar">
        <Container className="flex-column align-items-start">
          <Link to="/" className="navbar-brand">
            <Image src="assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
          </Link>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Navbar.Collapse id="navbarNavAltMarkup">
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
                      <InputGroup className=" mt-3">
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
                      </InputGroup>
                    </Form>
                  </div>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <Button id="signup-btn" className="d-block ms-4">
            Sign Up
          </Button>
          <Button id="login-btn" className="d-block ms-4">
            Login
          </Button>
          <Link to="/404">Cookie Policy</Link> |<Link to="/404"> Privacy</Link>
        </div>
      </Navbar>
    </Col>
  );
};

export default SideBar;
