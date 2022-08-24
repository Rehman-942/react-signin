import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar" style={{ marginTop: "20px" }}>
      <nav>
        <Link
          to="/signin"
          style={{
            marginLeft: "10px",
            backgroundColor: "aqua",
          }}
        >
          SignIn
        </Link>
        <Link
          to="/signup"
          style={{
            marginLeft: "10px",
            backgroundColor: "aqua",
          }}
        >
          SignUp
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
