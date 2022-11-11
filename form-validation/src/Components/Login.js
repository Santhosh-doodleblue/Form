import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";
import "./login.css";

function Login() {
  let navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(handleErr(loginDetails));
    if (
      loginDetails.userName === "Santhosh" &&
      loginDetails.password === "123"
    ) {
      navigate("/home");
    }
  };
  const handleErr = (loginDetails) => {
    let error = {};
    if (loginDetails.userName !== "Santhosh") {
      error.userName = "*Enter Valid Username";
    }
    if (loginDetails.password !== "123") {
      error.password = "*Password is Incorrect";
    }

    return error;
  };

  return (
    <>
      <div className="wrap">
        <div className="container text-start py-5 d-flex justify-content-center  ">
          <div className="row py-5">
            <div className="col-md-12 mt-5 py-2 text-white ">
              <h1 className="my-4">Login Form</h1>
              <form>
                <label>UserName</label>
                <br></br>
                <input
                  className="my-3"
                  type={"text"}
                  name="userName"
                  placeholder="Enter Your Username..."
                  value={loginDetails.userName}
                  onChange={handleChange}
                />
                <p className="text-danger">{error.userName}</p>
                <label>Password</label>
                <br></br>
                <input
                  className="my-3"
                  type={"password"}
                  name="password"
                  placeholder="Enter Your Password..."
                  value={loginDetails.password}
                  onChange={handleChange}
                />
                <p className="text-danger">{error.password}</p>
                <button
                  className="px-3 mx-5 mt-3 login-submit "
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
