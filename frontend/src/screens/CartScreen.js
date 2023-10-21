import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CartScreen({ match }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const qty = searchParams.get("qty") ? Number(searchParams.get("qty")) : 1;
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;
  const userLogin = useSelector((state) => state.userLogin);
  const userInfo = userLogin.userInfo;

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    if (userInfo) {
      navigate("/shipping");
    } else {
      navigate("/login?redirect=shipping");
    }
  };

  return (
    <div>
      <Header></Header>
      <main className="py-3 mt-9">
        <Container>
          <Row>
            <Col md={8}>
              <h1>Shopping Cart</h1>
              {cartItems.length === 0 ? (
                <Message variant="info">
                  Your cart is empty <Link to="/">Go Back</Link>
                </Message>
              ) : (
                <ListGroup variant="flush">
                  {cartItems.map((item) => (
                    <ListGroup.Item key={item.product}>
                      <Row>
                        <Col md={2}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col md={3}>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>

                        <Col md={2}>${item.price}</Col>

                        <Col md={2}>
                          <input
                            type="number"
                            min={1}
                            max={Number(item.countInStock)}
                            className="input-number"
                            name="name"
                            value={Number(item.qty)}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                          />
                        </Col>

                        <Col md={2}>
                          <Button
                            type="button"
                            variant="light"
                            onClick={() => removeFromCartHandler(item.product)}
                          >
                            <i className="fa fa-trash"></i>
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h2>
                      Subtotal (
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)})
                      items
                    </h2>
                    $
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      type="button"
                      className="btn-block rounded-pill btn-proceed-checkout blackbgr"
                      disabled={cartItems.length === 0}
                      onClick={checkoutHandler}
                      
                    >
                      Proceed To Checkout
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default CartScreen;
