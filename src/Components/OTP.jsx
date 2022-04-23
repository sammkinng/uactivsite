import React, { useState } from "react";
import "../Styles/OTP.css";
import Phone from "../Assets/images/phone-img-png.png";
import logo from "../Assets/images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function OTP() {
  const [otp1, setOTP1] = useState("");
  const [otp2, setOTP2] = useState("");
  const [otp3, setOTP3] = useState("");
  const [otp4, setOTP4] = useState("");
  const [otp5, setOTP5] = useState("");
  const [otp6, setOTP6] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  let name = "Yashpal";
  let phoneno = 9876543210;
  if (state) {
    const { name, phoneno } = state;
  }
  const btnClick = (e) => {
    e.preventDefault();
    if (
      otp1.length === 0 &&
      otp2.length === 0 &&
      otp3.length === 0 &&
      otp4.length === 0 &&
      otp5.length === 0 &&
      otp6.length === 0
    ) {
      document.getElementById("inp1").style.borderColor = "red";
      document.getElementById("inp2").style.borderColor = "red";
      document.getElementById("inp3").style.borderColor = "red";
      document.getElementById("inp4").style.borderColor = "red";
      document.getElementById("inp5").style.borderColor = "red";
      document.getElementById("inp6").style.borderColor = "red";
    } else if (
      otp1 === "1" &&
      otp2 === "2" &&
      otp3 === "3" &&
      otp4 === "4" &&
      otp5 === "5" &&
      otp6 === "6"
    ) {
      document.getElementById("inp1").style.borderColor = "green";
      document.getElementById("inp2").style.borderColor = "green";
      document.getElementById("inp3").style.borderColor = "green";
      document.getElementById("inp4").style.borderColor = "green";
      document.getElementById("inp5").style.borderColor = "green";
      document.getElementById("inp6").style.borderColor = "green";
      setTimeout(function () {
        navigate("/workout");
      }, 5000);
    } else {
      document.getElementById("inp1").style.borderColor = "red";
      document.getElementById("inp2").style.borderColor = "red";
      document.getElementById("inp3").style.borderColor = "red";
      document.getElementById("inp4").style.borderColor = "red";
      document.getElementById("inp5").style.borderColor = "red";
      document.getElementById("inp6").style.borderColor = "red";
    }
  };
  const ip1 = (event) => {
    var key = event.keyCode || event.charCode;
    if (key === 8) {
      if (otp2.length === 0) {
        document.getElementById("inp1").focus();
      }
    }
  };
  const ip2 = (event) => {
    var key = event.keyCode || event.charCode;
    if (key === 8) {
      if (otp3.length === 0) {
        document.getElementById("inp2").focus();
      }
    }
  };
  const ip3 = (event) => {
    var key = event.keyCode || event.charCode;
    if (key === 8) {
      if (otp4.length === 0) {
        document.getElementById("inp3").focus();
      }
    }
  };
  const ip4 = (event) => {
    var key = event.keyCode || event.charCode;
    if (key === 8) {
      if (otp5.length === 0) {
        document.getElementById("inp4").focus();
      }
    }
  };
  const ip5 = (event) => {
    var key = event.keyCode || event.charCode;
    if (key === 8) {
      if (otp6.length === 0) {
        document.getElementById("inp5").focus();
      }
    }
  };

  return (
    <div className="cont">
      <img className="img1" src={Phone} alt="Phone" />
      <div className="rect2">
        <img className="lgo" src={logo} alt="Logo" />
        <p className="para1">Personal Training is now simpler,</p>
        <p className="para2">smarter and more accessible.</p>
        <p className="para3">
          Enter your details below to access our closed beta.
        </p>
        <p className="para4">
          We promise to use your information for feedback purposes only.
        </p>
        <div className="rectinn">
          <form>
            <br />
            <label className="labl5">
              Hey {name},We have sent OTP to {phoneno}.
            </label>
            <br />
            {/* <input className="ipt" name="name" /> */}
            <br />
            <label className="labl2">Enter OTP</label>
            <br />
            <input
              className="ipt"
              name="mobileno"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              maxLength={1}
              value={otp1}
              id="inp1"
              autoFocus
              onChange={(e) => {
                setOTP1(e.target.value);
                if (otp1.length === 0) {
                  document.getElementById("inp2").focus();
                }
              }}
            />
            <input
              className="ipt"
              name="mobileno"
              maxLength={1}
              id="inp2"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={otp2}
              onKeyDown={ip1}
              onChange={(e) => {
                setOTP2(e.target.value);
                if (otp2.length === 0) {
                  document.getElementById("inp3").focus();
                }

                if (e.key === "Backspace") {
                  document.getElementById("inp1").focus();
                }
              }}
            />
            <input
              className="ipt"
              name="mobileno"
              maxLength={1}
              id="inp3"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={otp3}
              onKeyDown={ip2}
              onChange={(e) => {
                setOTP3(e.target.value);

                if (otp3.length === 0) {
                  document.getElementById("inp4").focus();
                }
              }}
            />
            <input
              className="ipt"
              name="mobileno"
              maxLength={1}
              id="inp4"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={otp4}
              onKeyDown={ip3}
              onChange={(e) => {
                setOTP4(e.target.value);
                if (otp4.length === 0) {
                  document.getElementById("inp5").focus();
                }
              }}
            />
            <input
              className="ipt"
              name="mobileno"
              maxLength={1}
              id="inp5"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={otp5}
              onKeyDown={ip4}
              onChange={(e) => {
                setOTP5(e.target.value);
                if (otp5.length === 0) {
                  document.getElementById("inp6").focus();
                }
              }}
            />
            <input
              className="ipt"
              name="mobileno"
              maxLength={1}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              id="inp6"
              value={otp6}
              onKeyDown={ip5}
              onChange={(e) => {
                setOTP6(e.target.value);
                if (
                  otp1.length === 0 &&
                  otp2.length === 0 &&
                  otp3.length === 0 &&
                  otp4.length === 0 &&
                  otp5.length === 0 &&
                  otp6.length === 0
                ) {
                  document.getElementById("inp1").style.borderColor = "red";
                  document.getElementById("inp2").style.borderColor = "red";
                  document.getElementById("inp3").style.borderColor = "red";
                  document.getElementById("inp4").style.borderColor = "red";
                  document.getElementById("inp5").style.borderColor = "red";
                  document.getElementById("inp6").style.borderColor = "red";
                } else if (
                  otp1 === "1" &&
                  otp2 === "2" &&
                  otp3 === "3" &&
                  otp4 === "4" &&
                  otp5 === "5" &&
                  e.target.value === "6"
                ) {
                  document.getElementById("inp1").style.borderColor = "green";
                  document.getElementById("inp2").style.borderColor = "green";
                  document.getElementById("inp3").style.borderColor = "green";
                  document.getElementById("inp4").style.borderColor = "green";
                  document.getElementById("inp5").style.borderColor = "green";
                  document.getElementById("inp6").style.borderColor = "green";
                  setTimeout(function () {
                    navigate("/workout");
                  }, 500);
                } else {
                  document.getElementById("inp1").style.borderColor = "red";
                  document.getElementById("inp2").style.borderColor = "red";
                  document.getElementById("inp3").style.borderColor = "red";
                  document.getElementById("inp4").style.borderColor = "red";
                  document.getElementById("inp5").style.borderColor = "red";
                  document.getElementById("inp6").style.borderColor = "red";
                }
              }}
            />
            <br />
            <Link to="/otp">
              <label className="labl3">Resend</label>
            </Link>
            {/* <Link to="/" params={{ testvalue: "VIVEKKKKKKKKKKKKKKKKKKKKK" }}> */}
            {/* <Link
              to={{
                pathname: "/",
                state: { fromDashboard: true }
              }}
            > */}
            <Link to="/">
              <label className="labl4">Change Number?</label>
            </Link>
            <button className="btn1" onClick={btnClick}>
              Verify and go to workout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OTP;
