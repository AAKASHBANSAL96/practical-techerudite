import React from "react";
import { Container, Row, Col, Stack, Card } from "react-bootstrap";
import User from "../../Assets/images/user.png";

const Testimonials = () => {
  const serviceData = [
    {
      image: User,
      title: "Josh brollins",
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      image: User,
      title: "Josh brollins",
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
  ];

  return (
    <Container fluid className="testimonials-sestion">
      <Container>
        <div className="testimonials-header">
          <span>Testimonials</span>
        </div>
        <div className="testimonials-body">
          <Row>
            {serviceData.map((subData) => (
              <Col sm={4} style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                <Card
                  style={{
                    width: "250px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    margin: "10px 0",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={subData.image}
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Card.Title>{subData.title}</Card.Title>
                    <Card.Text
                      style={{
                        color: "#606060",
                        fontSize: "14px",
                      }}
                    >
                      {subData.des}
                    </Card.Text>
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
export default Testimonials;
