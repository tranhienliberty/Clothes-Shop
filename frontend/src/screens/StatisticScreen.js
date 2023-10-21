import React, { useState, useEffect, useRef } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listOrders } from "../actions/orderActions";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function StatisticScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ref = useRef([]);
  const orderMain = useRef([]);
  const orderList = useSelector((state) => state.orderList);
  let { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [check, setCheck] = useState(0);
  const [date, setDate] = useState();

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo]);

  const handleDateTime = (str) => {
    const arr = str.split("T");
    let objectDate = new Date(arr[0]);
    let day = objectDate.getDate();
    let month = objectDate.getMonth() + 1;
    let year = objectDate.getFullYear();
    arr[0] = day + "/" + month + "/" + year;
    arr[1] = arr[1].substring(0, 8);
    return arr.join(" ");
  };

  if (orders != undefined && orders.length > 0 && check === 0) {
    orderMain.current = orders.filter((item) => {
      return item.isPaid == true;
    });
    ref.current = orderMain.current;
  }

  const handleGetMonth = (str) => {
    const arr = str.split("T");
    let objectDate = new Date(arr[0]);
    return objectDate.getMonth() + 1;
  };

  const handleStatistic = function () {
    setCheck((prev)=>{return prev + 1});
    const month = date
    if(month){
    orders = orderMain.current.filter((item) => {
      return month == handleGetMonth(item.createAt);
    });
  }
  else {
    orders = orderMain.current;
  }
    ref.current = orders;
  };

  return (
    <div className="mt-9 px-5">
      <Header></Header>
      <h1 style={{ textAlign: "center" }} className="highlight">
        Statistic By Month
      </h1>
      <div>
      <button onClick={handleStatistic} className="btn5-hover btn5">Click</button>
  <select className="input-month" onChange={(e) => {setDate(e.target.value)}}>
    <option selected disabled>Month</option>
    <option value="1">January</option>
    <option value="2">February</option>
    <option value="3">March</option>
    <option value="4">April</option>
    <option value="5">May</option>
    <option value="6">June</option>
    <option value="7">July</option>
    <option value="8">August</option>
    <option value="9">September</option>
    <option value="10">October</option>
    <option value="11">November</option>
    <option value="12">December</option>
  </select>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table
          striped
          bordered
          hover
          responsive
          className="table-sm"
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>CUSTOMER</th>
              <th>DATE</th>
              <th>Total</th>
              <th>PAID</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {ref.current.map((order) => {
              return (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.user && order.user.name}</td>
                  <td>{handleDateTime(order.createAt)}</td>
                  <td>${order.totalPrice}</td>

                  <td>
                    {order.isPaid ? (
                      handleDateTime(order.paidAt)
                    ) : (
                      <i className="fas fa-check" style={{ color: "red" }}></i>
                    )}
                  </td>

                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button variant="light" className="btn-sm">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                  
                </tr>
              );
            })}
            <tr>
              <td>TOTAL</td>
              <td colspan="5">
                $
                {ref.current.reduce((total, item) => {
                  return Number(item.totalPrice) + total;
                }, 0)}
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default StatisticScreen;
