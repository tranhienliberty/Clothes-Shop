import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../actions/cartActions";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function ShippingScreen() {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <div>
        <Header></Header>
      <main className="py-3 mt-9">
        <Container>
          <FormContainer>
            <CheckoutSteps step1 step2 />
            <Row className="justify-content-md-center">
              <Col md={6}>
                <h1 style={{ textAlign: "center" }}>Shipping</h1>
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId="address">
                    <Form.Label className="mt-2">Address</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter address"
                      value={address ? address : ""}
                      className="rounded-pill mt-1"
                      onChange={(e) => setAddress(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="city">
                    <Form.Label className="mt-2">City</Form.Label>
                    <Form.Control
                      className="rounded-pill mt-1"
                      required
                      type="text"
                      placeholder="Enter city"
                      value={city ? city : ""}
                      onChange={(e) => setCity(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="postalCode">
                    <Form.Label className="mt-2">Postal Code</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter postal code"
                      value={postalCode ? postalCode : ""}
                      className="rounded-pill mt-1"
                      onChange={(e) => setPostalCode(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="country">
                    <Form.Label className="mt-2">Country</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter country"
                      value={country ? country : ""}
                      className="rounded-pill mt-1"
                      onChange={(e) => setCountry(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    className="mt-4 rounded-pill w-100 btn-sign-in blackbgr"
                  >
                    Continue
                  </Button>
                </Form>
              </Col>
            </Row>
          </FormContainer>
        </Container>
      </main>
    </div>
  );
}

export default ShippingScreen;
