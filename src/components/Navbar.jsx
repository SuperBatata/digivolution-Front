import { useEffect, useState } from "react";
import logo from "../assets/logoA.gif";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { set } from "mongoose";
import { redirect } from "next/dist/server/api-utils";
function Nav() {
  const [connected, setConnected] = useState(false);
  const [email, setEmail] = useState("");
  const Logout = () => {
    localStorage.clear();
    window.location = "/";
  };
  useEffect(() => {
    // check if user is logged in
    const loggedInUser = localStorage.getItem("email");
    setEmail(loggedInUser);
    if (loggedInUser) {
      setConnected(true);
    }
  }, []);

  return (
    <>
      <nav className="menu-container">
        <a href="#" className="menu-logo">
          <img src={logo} alt="Digivolution" id="logo" />
        </a>

        <div className="menu">
          <ul>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/#clients">Clients</a>
            </li>
            <li>
              <a href="/#work">Work</a>
            </li>
            <li>
              <a href="/#prices">Prices</a>
            </li>
            <li>
              <a href="/#contact">Contact Us</a>
            </li>
          </ul>
          <ul>
            <li>
              {connected ? (
                <>
                  <span
                    style={{
                      color: "white",
                      marginRight: "10px",
                      fontSize: "14px",
                    }}
                  >
                    you are connected as {email}
                  </span>
                  <button onClick={() => Logout()}>Logout</button>
                </>
              ) : (
                <a href="/login">Login</a>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <div className="bg">
        <div className="bg-img">
          <h1 className="bg-text">
            Making Content <br></br>Creation Easier
          </h1>
        </div>
      </div>
    </>
  );
}

export default Nav;
