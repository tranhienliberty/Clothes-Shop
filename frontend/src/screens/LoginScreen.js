import { useState, useEffect, React } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { login } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "../assets/css/loginstyle.css";
function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const redirect = searchParams.get("redirect")
    ? searchParams.get("redirect").split("=")[1]
    : "/";
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  useEffect(() => {
    const inputs = document.querySelectorAll(".lginput");

    function focusFunx() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunx);
    });
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="prcontainer">
      <div className="lgcontainer">
        <div className="login-img">
          <img src={require("../assets/img/fas.png")} alt="" />
        </div>
        <div className="login-container">
          <form className="loginform" onSubmit={submitHandler}>
            <h2 className="signInTitle">Sign in</h2>
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <div className="inputSignin-div" one>
              <div className="i">
                <i className="fa fa-envelope"></i>
              </div>

              <div>
                <h5>Email</h5>
                <input
                  className="lginput"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="inputSignin-div" two>
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div>
                <h5>password</h5>
                <input
                  className="lginput"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <a href="/register" className="linkregister">
              Register new customer
            </a>
            <input type="submit" className="btnLg" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginScreen;
