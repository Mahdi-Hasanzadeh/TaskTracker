import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [char, setChar] = React.useState({
    firstName: 0,
    lastName: 0,
    email: 0,
    country: 0,
    password: 0
  });
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    setChar(prevData => {
      return {
        firstName: props.userInfo.firstName.length,
        lastName: props.userInfo.lastName.length,
        email: props.userInfo.email.length,
        country: props.userInfo.country.length,
        password: props.userInfo.password.length
      };
    });
    const namelenght = 7;
    if (
      char.firstName >= 3 &&
      char.lastName >= 4 &&
      char.email >= 16 &&
      char.password >= 8
    ) {
      setTimeout(() => {
        navigate("/");
      }, 10);
      props.handleSubmitUserInfo();
    // } else {
    //   if (char.firstName < 3) {
    //     toast.error("First Name too short, minimum-lenght:3 characters");
    //   }
    //   if (char.lastName < 4) {
    //     toast.error("Last Name too short, minimum-lenght:4 characters");
    //   }
    //   if (char.email < 16) {
    //     toast.error(
    //       "email is too short, minimum-length:15 characters including (@gmail.com)"
    //     );
    //   }
    //   if (char.password < 7) {
    //     toast.error("Weak Password, minimum-lenght:8 characters");
    //   }
     }
  };
  // console.table(props.userInfo);
  return (
    <div className="loginForm">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="loginInput">
          <label htmlFor="firstName">First Name</label>
          <input
            maxLength="20"
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
            maxLength="20"
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
            maxLength="30"
            onChange={props.handleUserInfo}
            required
            placeholder="Email Address"
            type="email"
            name="email"
            value={props.userInfo.email}
            id="email"
          />
        </div>
        <div className="loginInput">
          <label htmlFor="country">Country (Optional)</label>
          <input
            maxLength="20"
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
            maxLength="25"
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
