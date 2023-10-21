import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function PaymentScreen() {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  if (!shippingAddress.address) {
    navigate("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
  return (
    <div>
    <Header></Header>
      <main className="py-3">
        <Container>
          <FormContainer>
            <CheckoutSteps step1 step2 step3 />
            <Form onSubmit={submitHandler}>
              <Form.Group>
                <Form.Label as="legend">Select Method</Form.Label>
                <Col className="mt-2">
                  <Form.Check
                    type="radio"
                    label="PayPal or Credit Card"
                    id="paypal"
                    name="paymentMethod"
                    checked
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></Form.Check>
                </Col>

                <Col className="mt-2">
                  <Form.Check
                    type="radio"
                    label="Momo"
                    id="momo"
                    name="paymentMethod"
                    checked
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></Form.Check>
                </Col>
              </Form.Group>

              <Button
                type="submit"
                variant="primary"
                className=" rounded-pill btn-proceed-checkout mt-2 blackbgr"
              >
                Continue
              </Button>
            </Form>
          </FormContainer>
        </Container>
      </main>
    </div>
  );
}

export default PaymentScreen;
