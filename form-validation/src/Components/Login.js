import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";
import "./login.css";

function Login() {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "Santhosh" && password === "123") {
      navigate("/home");
    }
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
                  placeholder="Enter Your Username..."
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <br></br>
                <label>Password</label>
                <br></br>
                <input
                  className="my-3"
                  type={"password"}
                  placeholder="Enter Your Password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
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
