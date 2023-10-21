import React, { useState, useEffect, useRef } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listOrders } from "../actions/orderActions";
import { useNavigate } from "react-router-dom";
import ApexCharts from "apexcharts";
import Header from "../components/Header";
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { listTopProducts } from '../actions/productActions'


function PieChartScreen() {

  
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const productTopRated = useSelector(state => state.productTopRated)
  const { error, loading, products } = productTopRated

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listTopProducts())
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo]);

  useEffect(() => {
    if(products.length > 0) {
        var options = {
          series: [{
          data: products.map((item) => { return Number(item.rating)})
        }],
          chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: products.map((item) => {
            return item.name;
          }),
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();}
  },[]);


  return (
    <div>
      <Header></Header>
      <div style={{marginTop:'10rem'}}>
      <h1 style={{ textAlign: "center" }} className="highlight">
         Top Product
      </h1>
      <div id="chart" style={{ maxWidth: "900px", margin: "35px auto" }}></div>
      </div>
    </div>
  );
}

export default PieChartScreen;
