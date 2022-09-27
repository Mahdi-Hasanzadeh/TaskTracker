import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
export default function ProtectedRoute(props) {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState(props.userName);
  const handleIsEdit = () => {
    setIsEdit(prevData => !prevData);
  };
  const handleUserInfo = event => {
    const { name, value } = event.target;
    setUserInfo(prevData => {
      return {
        ...prevData,
        [name]: value
      };
    });
  };
  const handleSubmit = event => {
    if (
      userInfo.firstName === props.userName.firstName &&
      userInfo.lastName === props.userName.lastName &&
      userInfo.email === props.userName.email &&
      userInfo.country === props.userName.country &&
      userInfo.password === props.userName.password
    ) {
      event.preventDefault();
      toast.error("No Changes Detected", {
        autoClose: 2000
      });
    } else {
      props.handleCount();
      event.preventDefault();
      navigate("/");
      // await props.fetchUserName();
      props.handleSubmitUserInfo(userInfo);
    }
  };
  if (props.isLogin) {
    return (
      <React.Fragment>
        <div className="accountContainer">
          <div className="accountInfo">
            <h2>Account Info</h2>
          </div>
          <div className="userInfo">
            <div>
              <h4>First Name</h4>
              <p>{props.userName.firstName}</p>
            </div>
            <div>
              <h4>Last Name</h4>
              <p>{props.userName.lastName}</p>
            </div>
            <div>
              <h4>Email Address</h4>
              <p>{props.userName.email}</p>
            </div>
            <div>
              <h4>Country</h4>
              <p>{props.userName.country}</p>
            </div>
          </div>

          <button className="editBtn" onClick={handleIsEdit}>
            Edit Account Info
          </button>
        </div>
        {isEdit && (
          <div className="editContainer">
            <div className="loginForm">
              <form onSubmit={handleSubmit}>
                <div className="loginInput">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    maxLength="20"
                    onChange={handleUserInfo}
                    required
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    value={userInfo.firstName}
                    id="firstName"
                  />
                </div>
                <div className="loginInput">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    maxLength="20"
                    onChange={handleUserInfo}
                    required
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    value={userInfo.lastName}
                    id="lastName"
                  />
                </div>
                <div className="loginInput">
                  <label htmlFor="email">Email</label>
                  <input
                    maxLength="30"
                    onChange={handleUserInfo}
                    required
                    placeholder="Email Address"
                    type="text"
                    name="email"
                    value={userInfo.email}
                    id="email"
                  />
                </div>
                <div className="loginInput">
                  <label htmlFor="country">Country</label>
                  <input
                    maxLength="20"
                    onChange={handleUserInfo}
                    placeholder="Country"
                    type="text"
                    name="country"
                    value={userInfo.country}
                    id="country"
                  />
                </div>
                <div className="loginInput">
                  <label htmlFor="password">Password</label>
                  <input
                    maxLength="20"
                    onChange={handleUserInfo}
                    required
                    placeholder="password"
                    type="password"
                    name="password"
                    value={userInfo.password}
                    id="password"
                  />
                </div>
                <div className="loginInput">
                  <input className="loginBtn" type="submit" value="Update" />
                </div>
              </form>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  } else {
    return props.children;
  }
}
