import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ShopScreen from "./screens/ShopScreen";
import BlogScreen from "./screens/BlogScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import StatisticScreen from "./screens/StatisticScreen";
import StatisticScreenByDay from "./screens/StatisticScreenByDay";
import StatisticScreenByYear from "./screens/StatisticScreenByYear";
import PieChartScreen from "./screens/PieChartScreen";
import BlogDetailScreen from "./screens/BlogDetailScreen";
import BlogDetailBScreen from "./screens/BlogDetailBScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/cart/:id/*" element={<CartScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/admin/userlist" element={<UserListScreen />} />
        <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
        <Route path="/admin/productlist" element={<ProductListScreen />} />
        <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} />
        <Route path="/admin/orderlist" element={<OrderListScreen />} />
        <Route path="/admin/statistic" element={<StatisticScreen />} />
        <Route path="/admin/statisticbymonth" element={<StatisticScreen />} />
        <Route path="/admin/statisticbyday" element={<StatisticScreenByDay />} />
        <Route path="/admin/statisticbyyear"element={<StatisticScreenByYear />} />
        <Route path="/admin/piechart" element={<PieChartScreen />} />
        <Route path="/blogdetail" element={<BlogDetailScreen />} />
        <Route path="/blogbdetail" element={<BlogDetailBScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
