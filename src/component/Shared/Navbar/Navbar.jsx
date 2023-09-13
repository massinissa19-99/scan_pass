import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import sonatrach from "../../../Assets/sonatrach.png";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const scrollTop = () => window["scrollTo"]({ top: 0, behavior: "smooth" });
  return (
    <Navbar
      className={`navbar navbar-expand-lg navbar-light ${
        isSticky ? "navStyle" : "navDefault"
      }`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={scrollTop}
          className="navBrn"
          style={{
            display: "flex",
            padding: "0px",
          }}
        >
          {/* <FontAwesomeIcon icon={faBuffer} className="brnIcon" /> Scan{" "}
          <span className="navHighlight">Pass</span> */}
          <img
            src={sonatrach}
            alt="logo"
            style={{
              width: "20%",
              height: "20%",
              marginTop: "0px",
              padding: "0px",
              marginRight: "0px",
              marginLeft: "0px",
            }}
            className="brnIcon"
          />
          <span
            style={{ marginTop: "15px", marginRight: "1%", fontSize: "25px" }}
          >
            SONATRACH
          </span>
          <span
            style={{ marginTop: "20px", fontSize: "20px" }}
            className="navHighlight"
          >
            Dz
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ width: "100%" }}>
          {isSticky ? (
            <Nav className="ms-auto mainNav" activeKey="/home">
              <Nav.Item>
                <Nav.Link
                  href="#contacts"
                  className="nav-link"
                  style={{ marginTop: "20px", width: "100%" }}
                >
                  Prendre un Rendez-Vous ?
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ marginTop: "15px" }}>
                <Link to="/login">
                  <button className="loginBtn">Employé</button>
                </Link>
              </Nav.Item>
            </Nav>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
