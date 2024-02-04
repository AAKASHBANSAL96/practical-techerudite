import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Stack,
  Card,
  Form,
  Button,
} from "react-bootstrap";

function Footer() {
  const [footerData, setFooterData] = useState([]);

  const fetchFooter = async () => {
    const responseData = await fetch(
      "http://3.7.81.243:3253/api/settings/fetch-frontend-details"
    )
      .then((res) => res.json())
      .then();
    setFooterData(responseData.data);
    console.log("fetchFooter -> responseData", responseData.data);
  };
  useEffect(() => {
    fetchFooter();
  }, []);

  return (
    <div className="footer-section">
      <Row className="">
        <Col style={{ borderRight: "1px solid black", width: "500px" }} sm={6}>
          <Container
            fluid
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Tagline will go here. Lorem ipsum doler sit amet…
            </span>
            <span
              style={{
                cursor: "pointer",
                color: "#00D5F8",
                fontWeight: "bold",
              }}
            >
              {footerData?.inquiry_mail}
            </span>
          </Container>
        </Col>
        <Col>
          <Container fluid>
            <Row>
              <Col style={{ display: "flex", flexDirection: "column" }}>
                <span className="mb-3 fw-bold">Address</span>
                <span className="text-wrap">{footerData?.address}</span>
              </Col>
              <Col style={{ display: "flex", flexDirection: "column" }}>
                <span className="mb-3 fw-bold">Contact</span>
                <span>{footerData?.contact_mail}</span>
                <span>{footerData?.contact_no}</span>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
