import React from "react";

export default function Signin() {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const emailRef = React.useRef(null);
  const pswdRef = React.useRef(null);

  const handleSubmit = () => {
    setEmail(emailRef.current.value);
    setPassword(pswdRef.current.value);
    console.log(email);
    console.log(password);
  };
  return (
    <div className="signIn">
      <h2>Sign In</h2>
      <form>
        <div>
          <label>Email</label>
          <input
            ref={emailRef}
            style={{ marginLeft: "10px", width: "300px", height: "20px" }}
            id="email"
            placeholder="email"
            type="email"
          ></input>
        </div>
        <div ref={pswdRef} style={{ marginTop: "20px" }}>
          <label>Password</label>
          <input
            style={{
              marginLeft: "10px",
              marginBottom: "20px",
              width: "270px",
              height: "20px",
            }}
            id="password"
            placeholder="password"
            type="password"
          ></input>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        <div>{email}</div>
        <div>{password}</div>
      </form>
    </div>
  );
}
