export default function ProtectedRoute(props) {
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

        <button className="editBtn">Edit Account Info</button>
      </div>
    );
  } else {
    return props.children;
  }
}
