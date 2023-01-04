import React, { useState } from "react";
import {  Link ,useNavigate} from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  const InputChangeHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = input;
    const res = await fetch("http://localhost:8000/register", {
      method: "POST",
      mode:"cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data= await res.json()
    if(!data || data.status===422){
      alert("registration fail")
      console.log("registration fail")
    }
    else{
      alert('registered succefully')
      console.log('registered succefully')
      navigate('/login');
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sign Up</h1>
      <br />
      <form method="POST">
        <div>
          <label htmlFor="name" style={{ padding: "20px" }}>
            <i className="zmdi zmdi-account"></i>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={input.name}
            onChange={InputChangeHandler}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="email" style={{ padding: "20px" }}>
            <i className="zmdi zmdi-email"></i>
          </label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={InputChangeHandler}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="phone" style={{ padding: "20px" }}>
            <i className="zmdi zmdi-phone-in-talk"></i>
          </label>
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={input.phone}
            onChange={InputChangeHandler}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="work" style={{ padding: "20px" }}>
            <i className="zmdi zmdi-slideshow"></i>
          </label>
          <input
            type="text"
            placeholder="Your Profession"
            name="work"
            value={input.work}
            onChange={InputChangeHandler}
            autoComplete="off"
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
            value={input.password}
            onChange={InputChangeHandler}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="cpassword" style={{ padding: "20px" }}>
            <i className="zmdi zmdi-lock"></i>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="cpassword"
            value={input.cpassword}
            onChange={InputChangeHandler}
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
            name="signup"
            value="Register"
            onClick={handleClick}
          />
        </div>
      </form>
      <br />
      <div>
        <Link to="/login">I am already register</Link>
      </div>
    </div>
  );
};

export default Signup;
