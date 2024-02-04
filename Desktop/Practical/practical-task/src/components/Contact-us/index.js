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
import _ from "lodash";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    desc: "",
  });
  const [validationMessages, setValidationMessages] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    desc: "",
  });

  const [message, setMessage] = useState("");

  const budgetOpions = [5000, 10000, 15000, 20000, 25000];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newValidationMessages = {};

    if (_.isEmpty(formData.name.trim())) {
      newValidationMessages.name = "Name is required";
    }

    if (_.isEmpty(formData.lastName.trim())) {
      newValidationMessages.lastName = "Last Name can not be blank";
    }
    if (_.isEmpty(formData.email.trim())) {
      newValidationMessages.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newValidationMessages.email = "Invalid email address";
    }

    if (_.isEmpty(formData.phone.trim())) {
      newValidationMessages.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newValidationMessages.phone = "Invalid phone number (10 digits)";
    }

    if (_.isEmpty(formData.budget.trim())) {
      newValidationMessages.budget = "Budget is required";
    }

    if (_.isEmpty(formData.desc.trim())) {
      newValidationMessages.desc = "Description is required";
    }
    setValidationMessages(newValidationMessages);

    return Object.keys(newValidationMessages).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setMessage("Form submitted successfully:");

      const data = JSON.stringify({
        fname: formData.name,
        lname: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        budget: formData.budget,
        description: formData.desc,
      });

      const responseData = await fetch("http://3.7.81.243:3253/api/contact/send", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then();
      console.log("handleSubmit -> responseData", responseData);
    }
  };
  return (
    <Container
      fluid
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container className="contact-section">
        <div className="contact-header">
          <span>
            <small>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua
            </small>
          </span>
        </div>
        <div className="contact-body">
          <Form className="contact-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row className="mb-3">
                <Col sm={6}>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="name"
                    onChange={handleChange}
                  />
                  <span className="validation-message">
                    {validationMessages.name}
                  </span>
                </Col>
                <Col sm={6}>
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    onChange={handleChange}
                  />
                  <span className="validation-message">
                    {validationMessages.lastName}
                  </span>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm={6}>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                  />
                  <span className="validation-message">
                    {validationMessages.email}
                  </span>
                </Col>
                <Col sm={6}>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                  />
                  <span className="validation-message">
                    {validationMessages.phone}
                  </span>
                </Col>
              </Row>
              <Row className="mb-5">
                <Col sm={6}>
                  <Form.Select name="budget" onChange={handleChange}>
                    <option key={0}>Budget</option>
                    {budgetOpions.map((optionVal, idx) => (
                      <option key={idx + 1}>{optionVal}</option>
                    ))}
                  </Form.Select>
                  <span className="validation-message">
                    {validationMessages.budget}
                  </span>
                </Col>
                <Col sm={6}>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="Description"
                    name="desc"
                    onChange={handleChange}
                  />
                  <span className="validation-message">
                    {validationMessages.desc}
                  </span>
                </Col>
              </Row>
              {!_.isEmpty(message) && (
                <Row
                  className="mb-3 text-success"
                  style={{ fontWeight: "bold" }}
                >
                  <span>{message}</span>
                </Row>
              )}
              <Row>
                <Col md={{ span: 12, offset: 4 }}>
                  <Button
                    style={{
                      outline: "none",
                      border: "none",
                      width: "248px",
                      height: "45px",
                      fontWeight: "bold",
                    }}
                    type="submit"
                    onClick={(e) => {}}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </Container>
  );
};

export default Contactus;
