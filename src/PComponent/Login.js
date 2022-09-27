import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    setTimeout(() => {
      navigate("/");
    }, 10);
    props.handleSubmitUserInfo();
  };
  return (
    <div className="loginForm">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="loginInput">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={props.handleUserInfo}
            required
            placeholder="First Name"
            type="text"
            name="firstName"
            value={props.userInfo.firstName}
            id="firstName"
          />
        </div>
        <div className="loginInput">
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={props.handleUserInfo}
            required
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={props.userInfo.lastName}
            id="lastName"
          />
        </div>
        <div className="loginInput">
          <label htmlFor="email">Email</label>
          <input
            onChange={props.handleUserInfo}
            required
            placeholder="Email Address"
            type="text"
            name="email"
            value={props.userInfo.email}
            id="email"
          />
        </div>
        <div className="loginInput">
          <label htmlFor="country">Country</label>
          <input
            onChange={props.handleUserInfo}
            placeholder="Country"
            type="text"
            name="country"
            value={props.userInfo.country}
            id="country"
          />
        </div>
        <div className="loginInput">
          <label htmlFor="password">Password</label>
          <input
            onChange={props.handleUserInfo}
            required
            placeholder="password"
            type="password"
            name="password"
            value={props.userInfo.password}
            id="password"
          />
        </div>
        <div className="loginInput">
          <input className="loginBtn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
