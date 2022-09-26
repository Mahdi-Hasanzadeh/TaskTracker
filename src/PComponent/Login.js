import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

export default function Login(props) {
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    setTimeout(() => {
      navigate("/");
    }, 1000);
    props.handleSubmitUserInfo();
  };
  const Login = () => {
    if (props.isLogin) {
      return (
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

          <button className="editBtn">Edit Accout Info</button>
        </div>
      );
    } else {
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
      </div>;
    }
  };
  return <Login />;
}
