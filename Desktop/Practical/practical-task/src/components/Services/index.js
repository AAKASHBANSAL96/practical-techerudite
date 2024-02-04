import React from "react";
import { Container, Row, Col, Stack, Card } from "react-bootstrap";
import Audit from "../../Assets/images/service/search.png";
import Budget from "../../Assets/images/service/budget.png";
import Revenue from "../../Assets/images/service/revenue.png";
import Setting from "../../Assets/images/service/setting.png";
import Tax from "../../Assets/images/service/tax.png";
import Statistics from "../../Assets/images/service/statistics.png";

const Service = () => {
  const serviceData = [
    {
      image: Audit,
      title: "Audit & Account",
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      image: Budget,
      title: "Budget & Projections",
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      image: Revenue,
      title: "Payroll & Bookkeeping",
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      image: Setting,
      title: "Software Training & IT",
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      image: Tax,
      title: "Tax planning & Returns",
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      image: Statistics,
      title: "Managment Information",
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
  ];

  return (
    <Container fluid className="service-section">
      <Container>
        <div className="service-header">
          <span>Services</span>
        </div>
        <div className="service-body">
          <Row>
            {serviceData.map((subData) => (
              <Col sm={4}>
                <Card
                  style={{
                    width: "250px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    margin: "10px 0",
                    border: "none",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={subData.image}
                    style={{
                      height: 80,
                      width: 80,
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{subData.title}</Card.Title>
                    <Card.Text>{subData.des}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Container>
  );
};
export default Service;
