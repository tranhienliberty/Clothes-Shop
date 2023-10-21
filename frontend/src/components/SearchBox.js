import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/shop/?keyword=${keyword}`);
    } else {
      navigate(`/shop`);
    }
  };
  return (
    <Form onSubmit={submitHandler} inline classsName="mt-9">
      <Row
        className="justify-content-md-left"
        style={{ justifyContent: "flex-end" }}
      >
        <Col md={5} className="ml-4"></Col>
        <Col md={5}>
          <Row style={{ justifyContent: "flex-end" }}>
            <Col md={5}>
              <Form.Control
                type="text"
                name="q"
                onChange={(e) => setKeyword(e.target.value)}
                className="mr-sm-2 ml-sm-5 rounded-pill"
                style={{ border: "2px solid black" }}
              ></Form.Control>
            </Col>
            <Col md={5} className="ml-4">
              <Button
                type="submit"
                variant="outline-success"
                className="p-2 rounded-pill fluid"
              >
                Search
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBox;
