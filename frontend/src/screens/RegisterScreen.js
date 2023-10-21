import { useState, useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { register } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "../assets/css/loginstyle.css";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const redirect = searchParams.get("redirect")
    ? searchParams.get("redirect").split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

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
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div className="prcontainer">
      <div className="lgcontainer">
        <div className="login-img">
          <img src={require("../assets/img/fas2.png")} alt="img" />
        </div>
        <div className="login-container">
          <form className="loginform" onSubmit={submitHandler}>
            <h2 className="signInTitle">Sign Up</h2>
            {message && <Message variant="danger">{message}</Message>}
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <div className="inputSignin-div" one>
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div>
                <h5>Name</h5>
                <input
                  className="lginput"
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
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
                <h5>Password</h5>
                <input
                  className="lginput"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="inputSignin-div" three>
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div>
                <h5>Confirm password</h5>
                <input
                  className="lginput"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <a href="/login" className="linkregister">
              Login to continue
            </a>
            <input type="submit" className="btnLg" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
