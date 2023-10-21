import { useState, useEffect, React } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Form, Button, Row, Col, Table, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import { listMyOrders } from "../actions/orderActions";
import Header from "../components/Header";

function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  
  const handleDateTime = (str) => {
    const arr = str.split("T");
    let objectDate = new Date(arr[0]);
    arr[0] = objectDate.getDate() + "/" + (objectDate.getMonth() + 1) + "/" + objectDate.getFullYear();
    arr[1] = arr[1].substring(0, 8);
    return arr.join(" ");
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          name: name,
          email: email,
          password: password,
        })
      );
      setMessage("Success");
    }
  };

  console.log(orders);

  return (
    <div>
      <Header></Header>
      <main className="py-3 mt-9">
        <Container>
          <Row>
            <Col md={3}>
              <h2>User Profile</h2>
              {message && <Message variant="danger">{message}</Message>}
              {error && <Message variant="danger">{error}</Message>}
              {loading && <Loader />}
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="name"
                    placeholder="Enter name"
                    value={name}
                    className="rounded-pill mt-1"
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label className="mt-3">Email Address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    className="rounded-pill mt-1"
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label className="mt-3">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    className="rounded-pill mt-1"
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="passwordConfirm">
                  <Form.Label className="mt-3">Confirm password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    className="rounded-pill mt-1"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>


                <div className="update-profile">
                <Button
                  type="submit"
                  variant="primary"
                  // className="mt-4 rounded-pill w-100 btn-sign-in"
                  // style={{backgroundColor:"white",color: "black" ,width: "100px", padding: "14px 28px",  border: "2px solid black", margin: "4px 0px 0px"}}
                >
                  Update
                </Button>
                </div>
              </Form>
            </Col>

            <Col md={9}>
              <h2>My Orders</h2>
              {loadingOrders ? (
                <Loader />
              ) : errorOrders ? (
                <Message variant="danger">{errorOrders}</Message>
              ) : (
                <Table striped responsive className="table-sm">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
                      <th>Total</th>
                      <th>Paid</th>
                      <th>Delivered</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders.map((order) => (
                      <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{handleDateTime(order.createAt)}</td>
                        <td>${order.totalPrice}</td>
                        <td>
                          {order.isPaid ? (
                            handleDateTime(order.paidAt)
                          ) : (
                            <i
                              className="fas fa-times"
                              style={{ color: "red" }}
                            ></i>
                          )}
                        </td>
                        <td>
                          <LinkContainer to={`/order/${order._id}`}>

                          <div className="ABCD">
                            <Button 
                            className=""
                            style={{width:'100%'}}
                            >
                              Details
                            </Button>
                          </div>
                          </LinkContainer>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default ProfileScreen;
