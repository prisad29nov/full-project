import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onClickHandler = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/login", {
      method: "POST",
     
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    
const data=await res.json()
    if (data.status === 400 || !data) {
      alert("Invalid Credentials");
    } else {
      alert("login successful");
      navigate("/about");
    }
  };

  
  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <h2>Log In</h2>
      <br />
      <div>
        <Link to="/signup">Create an account</Link>
      </div>
      <br />
      <br />
      <form method="POST">
        <div>
          <label htmlFor="email" style={{ padding: "20px" }}>
            <i className="zmdi zmdi-email"></i>
          </label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="password" style={{ padding: "20px" }}>
            <i className="zmdi zmdi-lock"></i>
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div>
          <input
            style={{
              backgroundColor: "green",
              padding: "10px",
              borderRadius: "10%",
            }}
            type="submit"
            name="login"
            value="Log In"
            onClick={onClickHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
