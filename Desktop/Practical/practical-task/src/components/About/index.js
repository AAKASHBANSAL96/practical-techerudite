import React from "react";
import { Container, Row, Col, Stack, Card } from "react-bootstrap";
import GroupImg from "../../Assets/images/about/group.png";
import BackgroundImg from "../../Assets/images/about/Rectangle.png";
const Aboutus = () => {
  return (
    <Container fluid className="about-us-section">
      <Container>
        <Row>
          <Col
            sm={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
              paddingLeft: "50px",
            }}
          >
            <div className="about-us-text">
              <span
                style={{
                  fontSize: "23px",
                  fontWeight: "bold",
                }}
              >
                About us
              </span>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
                sadipscing elitr
              </p>
              <button
                className="btn"
                style={{
                  width: "150px",
                  fontWeight: "bold",
                }}
              >
                click here
              </button>
            </div>
          </Col>
          <Col sm={6}>
            <img src={GroupImg} height="350px" width="480px"></img>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Aboutus;
