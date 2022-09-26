import { toast } from "react-toastify";
//import { useNavigate } from "react-router-dom";
export default function Header(props) {
  //const navigate = useNavigate();
  //console.log(props.isLogin);
  const styles = {
    backgroundColor: props.showForm ? "red" : "green"
  };
  const HandleShowForm = () => {
    if (props.isLogin) {
      props.setShowForm(prevData => !prevData);
    } else {
      toast.info("First create an account from login page", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2750
      });

      // setTimeout(() => {
      //   toast.info("Loading Login Page", { autoClose: 3000 });
      // }, 5000);

      // setTimeout(() => {
      //   navigate("/login");
      // }, 9000);
    }
  };
  return (
    <div className="headerContainer">
      <div id="id" className="header">
        <div>
          <h4 className="headerTitle">Save your time by Saving your task</h4>
        </div>
        <div>
          <button style={styles} onClick={HandleShowForm} className="headerBtn">
            {props.showForm ? "Close Form" : "Show Form"}
          </button>
        </div>
      </div>
    </div>
  );
}
