import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import BrandLogo from "../Assets/images/Bitmap.png";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const scrollTo = (section) => {
    console.log("scrollTo -> section", section);
    if (section == "service") {
      window.scroll({
        top: 780,
        left: 0,
        behavior: "smooth",
      });
    }
    if (section == "about") {
      window.scroll({
        top: 1400,
        left: 0,
        behavior: "smooth",
      });
    }
    if (section == "blog") {
      window.scroll({
        top: 3200,
        left: 0,
        behavior: "smooth",
      });
    }
    if (section == "contact") {
      window.scroll({
        top: 3800,
        left: 0,
        behavior: "smooth",
      });
    }
    
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      expand="md"
      className={`justify-content-end ${navColour ? "sticky" : "navbar"}`}
    >
      <Container>
        <Navbar.Brand>
          <img src={BrandLogo} style={{ width: "180px", height: "80px" }}></img>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                onClick={() => {
                  updateExpanded(false);
                  scrollTo("service");
                }}
              >
                Services
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                onClick={() => {
                  scrollTo("about");

                  updateExpanded(false);
                }}
              >
                About us
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                onClick={() => {
                  scrollTo("blog");

                  updateExpanded(false);
                }}
              >
                Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                onClick={() => {
                  updateExpanded(false);
                }}
              >
                Case Studies
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                onClick={() => {
                  scrollTo("contact");
                  updateExpanded(false);
                }}
                className="btn"
              >
                Contact us
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
