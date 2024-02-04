import React, { useRef } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import Navbar from "../Navbar";
import Service from "../Services/index";
import Aboutus from "../About/index";
import Process from "../Process/index";
import Testimonials from "../Testimonials/index";
import Blogs from "../Blogs/index";
import Contactus from "../Contact-us/index";
import Footer from "../Footer";

const HeaderComponent = () => {
  return (
    <Container fluid>
      <div className="top-header">
        <div className="left-content">
          <div className="top-content">
            <span
              style={{
                textTransform: "capitalize",
                fontSize: "30px",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              how much <br />
              colud you save?
            </span>
            <br />
            <span className="mt-2">
              Answer the questions below to get a fixed price quotation for us
              to take your accountancy hassles away from you.
            </span>
          </div>
          <div className="bottom-content">
            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Is your turnover expected to be more <br /> than £85k?
            </span>
            <div className="button-content">
              <button className="btn" style={{ width: "80px" }}>
                Yes
              </button>
              <button className="btn" style={{ width: "80px" }}>
                No
              </button>
            </div>
          </div>
          <span>Takes less than 30 seconds</span>
        </div>
      </div>
      <div className="right-content"></div>
      <div className="header-image"></div>
    </Container>
  );
};

const Home = () => {

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Navbar/>
        <Stack>
          <HeaderComponent />
          <Service />
          <Aboutus />
          <Process />
          <Testimonials />
          <Blogs />
          <Contactus />
          <Footer />
        </Stack>
      </Container>
    </section>
  );
};

export default Home;
