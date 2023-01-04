import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import myImg from "../images/Priyanka.jpg";

const AboutUs = () => {
  const navigate = useNavigate();
 
  const callAboutPage = async () => {
    try {
      const res = await fetch("http://localhost:8000/about", {
        method: "GET",
       
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
   
      });
    
      const data = await res.json();
      console.log(data);
      if (!res.status === 200) {
        throw new Error("User not found");
      }
    } catch (err) {
      console.log(err);
      // navigate("/login");
    }
  };
  useEffect(() => {
    callAboutPage();
  },[]);
  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontFamily: "verdana",
          marginTop: "20px",
        }}
      >
        <h1>About Me</h1>
        <div style={{ border: "3px solid black", margin: "20px 300px" }}>
          <br />
          <div>
           
          </div>
        
          <div className="row">
            <div className="col-md-4">
            <img
              src={myImg}
              alt="img"
              style={{ height: "220px", width: "200px", borderRadius: "50%" }}
            />
            </div>
            <div className="col-md-6">

           <h4>Name : Priyanka Eknath Salunke</h4>
          
          <h5>Highest Qualification: BE E&Tc</h5>
        
          <h5>Email : prisad29nov@gmail.com</h5>
     
          <h5>Phone : 9011569814</h5>
          
          <h5>Profession : Web Developer</h5>
         
          <h5>Maritial Status : Married</h5>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
