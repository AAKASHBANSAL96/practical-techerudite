import React, { useState, useEffect } from "react";
import { Container, Row, Col, Stack, Card } from "react-bootstrap";
import Blog1 from "../../Assets/images/Blogs/blog1.png";
import Blog2 from "../../Assets/images/Blogs/blog2.png";
import Blog3 from "../../Assets/images/Blogs/blog3.png";
import _ from "lodash";
import { useHistory } from "react-router-dom";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const history = useHistory();

  const fetchBlogs = async () => {
    const response = await fetch("http://3.7.81.243:3253/api/blog/")
      .then((res) => res.json())
      .then();
    setBlogData(response.data);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Container fluid className="blogs-section">
      <Container>
        <div className="blogs-header">
          <span>Blogs</span>
          <span
            className="view-all"
            onClick={(e) => {
              window.location.href = "/viewall";
            }}
          >
            View all
          </span>
        </div>
        <div className="blogs-body">
          <Row>
            {!_.isEmpty(blogData) &&
              blogData.map(
                (subData, idx) =>
                  idx < 3 && (
                    <Col
                      key={idx}
                      sm={4}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Card
                        key={idx}
                        style={{
                          width: "300px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "left",
                          margin: "10px 0",
                          border: "none",
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={subData.image_url}
                          style={{
                            height: "200px",
                          }}
                        />
                        <Card.Body>
                          <Card.Title>{subData.seo_title}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                            {`${formatDate(subData.createdAt)} by`}
                            <span
                              style={{
                                color: "red",
                                marginLeft: "5px",
                              }}
                            >
                              {subData.writer_name}
                            </span>
                          </Card.Subtitle>
                          <Card.Text
                            style={{ overflow: "hidden", height: "50px" }}
                          >
                            {subData.seo_description}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
              )}
          </Row>
        </div>
      </Container>
    </Container>
  );
};
export default Blogs;
