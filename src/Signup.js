import React from "react";

export default function Signup() {
  return (
    <div className="signIn">
      <h2>Sign Up</h2>
      <form>
        <div>
          <label>Name</label>
          <input
            style={{ marginLeft: "10px", width: "300px", height: "20px" }}
            placeholder="Full Name"
          ></input>
        </div>
        <div style={{ marginTop: "20px" }}>
          <label>Email</label>
          <input
            style={{ marginLeft: "10px", width: "300px", height: "20px" }}
            placeholder="email"
            type="email"
          ></input>
        </div>
        <div style={{ marginTop: "20px" }}>
          <label>Password</label>
          <input
            style={{
              marginLeft: "10px",
              marginBottom: "20px",
              width: "270px",
              height: "20px",
            }}
            placeholder="password"
            type="password"
          ></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
