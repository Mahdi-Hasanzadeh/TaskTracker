import React from "react";

import Navbar from "./PComponent/Navbar.js";
import Header from "./PComponent/Header.js";
import Form from "./PComponent/Form.js";
import Task from "./PComponent/Task.js";
import EmptyTask from "./PComponent/EmptyTask.js";
import Dashboard from "./PComponent/Dashboard.js";
import Login from "./PComponent/Login.js";
import About from "./PComponent/About.js";
import ProtectedRoute from "./PComponent/ProtectedRoute.js";
import { HashRouter, Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./PappCss.css";

export default function App() {
  const [count, setCount] = React.useState(0);
  const [userInfo, setUserInfo] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    password: ""
  });

  const [userName, setUserName] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    password: ""
  });
  const [isLogin, setIsLogin] = React.useState(false);
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [showForm, setShowForm] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [formData, setFormData] = React.useState({
    title: "",
    date: ""
  });
  const URL = "http://localhost:5000/tasks";
  const fetchUserName = async () => {
    try {
      const res = await fetch("http://localhost:5000/userInfo");
      const answer = await res.json();
      if (answer.length !== 0) {
        setUserName(prevData => {
          return {
            firstName: answer[0].firstName,
            lastName: answer[0].lastName,
            email: answer[0].email,
            country: answer[0].country,
            password: answer[0].password
          };
        });
        setIsLogin(true);
        if (count === 0) {
          toast.success(
            `Welcome back Mr.${answer[0].firstName} ${answer[0].lastName}`,
            {
              autoClose: 6000,
              position: toast.POSITION.TOP_CENTER
            }
          );
        } else {
          toast.success("Your Account Info Has been updated");
        }
      }
    } catch (error) {}
  };

  const handleCount = () => {
    setCount(prevData => prevData + 1);
  };
  React.useEffect(
    () => {
      //console.log("fetched");
      fetchUserName();
      fetchData();
    },
    [count] //data.length use it in dependency array
  );

  //console.table(userInfo);

  const handleUserInfo = event => {
    const { name, value } = event.target;
    setUserInfo(prevData => {
      return {
        ...prevData,
        [name]: value
      };
    });
  };

  const handleSubmitUserInfo = async (id = 0) => {
    if (id === 0) {
      toast.success("Your Account has been created successfully", {
        autoClose: 3500
      });
      setTimeout(() => {
        toast.success("redirecting.....", { autoClose: 4000 });
      }, 2000);
      await fetch("http://localhost:5000/userInfo", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(userInfo)
      });
      setTimeout(() => {
        window.location.reload();
      }, 6000);
      setIsLogin(true);
    } else {
      toast.success("Your Account Info has been updated", {
        autoClose: 4000
      });
      setTimeout(() => {
        toast.success("redirecting.....", { autoClose: 4000 });
      }, 4300);

      await fetch("http://localhost:5000/userInfo/1", {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(id)
      });
      setTimeout(() => {
        window.location.reload();
      }, 8500);
    }
  };

  const handleFormDataChange = event => {
    const { value, name } = event.target;
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      };
    });
  };
  const handleUpdate = async id => {
    setShowForm(true);
    setIsUpdate(true);
    window.scrollTo(50, 50);
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`);
      const answer = await response.json();
      setFormData({
        title: answer.title,
        date: answer.date,
        id: answer.id
      });
    } catch (error) {}
  };
  const addTask = async (id = 0) => {
    if (id === 0) {
      try {
        const response = await fetch("http://localhost:5000/tasks", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        const task = await response.json();
        toast.success("Task Added Successfully", { autoClose: 2500 });
        setTimeout(() => {
          setData(prevData => {
            const newArray = [];
            prevData.map(item => {
              return newArray.push(item);
            });
            newArray.push(task);

            return newArray;
          });
        }, 1000);
      } catch (error) {}
    } else {
      try {
        const response = await fetch(`http://localhost:5000/tasks/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        const answer = await response.json();
        toast.success("Your Task has been updated", { autoClose: 2500 });
        let arr = [];
        setTimeout(() => {
          setData(prevData => {
            prevData.map(item => {
              return item.id === id ? arr.push(answer) : arr.push(item);
            });

            return arr;
          });
        }, 2000);
      } catch (error) {}
    }
    setIsUpdate(false);
    setFormData({
      title: "",
      date: ""
    });
  };

  const fetchData = async () => {
    toast.info("Loading Data from Database", {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_RIGHT
    });
    try {
      const response = await fetch(URL);
      const Data = await response.json();
      setTimeout(() => {
        setData(Data);
      }, 1500);
    } catch (error) {}
  };

  /**
   * delete task from database
   * @param {*deleteTask} deleteTask
   */
  const deleteTask = async id => {
    setIsUpdate(false);
    setFormData({
      title: "",
      date: ""
    });
    if (window.confirm("Are sure to delete this task?")) {
      try {
        await fetch(URL + "/" + id, {
          method: "DELETE"
        });
        // fetchData();
        //data.filter(item => item.id === id);
        toast.success("Task Deleted Successfully", {
          autoClose: 2000
        });
        setTimeout(() => {
          setData(prevData => prevData.filter(item => item.id !== id));
        }, 1000);
      } catch (error) {}
    }
  };

  const TaskData = () => {
    return data.map(item => {
      return (
        <Task
          handleUpdate={handleUpdate}
          handleDelete={deleteTask}
          key={item.id}
          task={item}
        />
      );
    });
  };
  const TaskRender = () => {
    if (data.length !== 0 && isLogin) {
      return (
        <div className="taskContainer">
          <TaskData />{" "}
        </div>
      );
    } else {
      return <EmptyTask />;
    }
  };
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route
            index
            element={
              <React.Fragment>
                <Header
                  isLogin={isLogin}
                  setShowForm={setShowForm}
                  showForm={showForm}
                />
                {showForm && (
                  <Form
                    formData={formData}
                    addTask={addTask}
                    handleFormDataChange={handleFormDataChange}
                    isUpdate={isUpdate}
                  />
                )}
                <TaskRender />
                {/* {data.length !== 0 && isLogin ? (
                  <div className="taskContainer">
                    <TaskData />{" "}
                  </div>
                ) : (
                  <EmptyTask />
                )} */}
              </React.Fragment>
            }
          />
          <Route path="About" element={<About />} />
          <Route path="Dashboard" element={<Dashboard data={data} />} />

          <Route
            path="Login"
            element={
              <ProtectedRoute
                fetchUserName={fetchUserName}
                handleCount={handleCount}
                userInfo={userInfo}
                handleSubmitUserInfo={handleSubmitUserInfo}
                userName={userName}
                isLogin={isLogin}
              >
                <Login
                  handleSubmitUserInfo={handleSubmitUserInfo}
                  userInfo={userInfo}
                  handleUserInfo={handleUserInfo}
                />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}
