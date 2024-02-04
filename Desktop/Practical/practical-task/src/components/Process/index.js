import React from "react";
import { Container, Row, Col, Stack, Card } from "react-bootstrap";
import GroupImg from "../../Assets/images/about/group.png";
import BackgroundImg from "../../Assets/images/about/Rectangle.png";
const Process = () => {
  const serviceData = [
    {
      title: "Step 1",
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      title: "Step 2",
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      title: "Step 3",
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
  ];

  return (
    <Container fluid className="process-section">
      <Container>
        <div className="process-header">
          <span>Our process</span>
        </div>
        <div className="process-body">
          <Row style={{
            display: 'flex',
          }}>
            {serviceData.map((subData) => (
              <Col sm={4} style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                <Card
                  style={{
                    height: "250px",
                    width: "250px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    margin: "10px 0",
                    borderRadius: "50%",
                    borderColor: "#FF9048",
                    borderWidth: "2px",
                    padding: "10px",
                  }}
                >
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
export default Process;
