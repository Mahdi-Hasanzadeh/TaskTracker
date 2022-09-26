// import React from "react";
// import Navbar from "./PComponent/Navbar.js";
// import Header from "./PComponent/Header.js";
// import Form from "./PComponent/Form.js";
// import Task from "./PComponent/Task.js";
// import EmptyTask from "./PComponent/EmptyTask.js";
// import Dashboard from "./PComponent/Dashboard.js";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import "./PappCss.css";

// export default function App() {
//   const [isUpdate, setIsUpdate] = React.useState(false);
//   const [showForm, setShowForm] = React.useState(false);
//   const [data, setData] = React.useState([]);
//   const [formData, setFormData] = React.useState({
//     title: "",
//     date: ""
//   });
//   const URL = "http://localhost:5000/tasks";

//   const handleFormDataChange = event => {
//     const { value, name } = event.target;
//     setFormData(prevData => {
//       return {
//         ...prevData,
//         [name]: value
//       };
//     });
//   };
//   const handleUpdate = async id => {
//     setShowForm(true);
//     setIsUpdate(true);
//     const response = await fetch(`http://localhost:5000/tasks/${id}`);
//     const answer = await response.json();
//     setFormData({
//       title: answer.title,
//       date: answer.date,
//       id: answer.id
//     });
//   };
//   const addTask = async (id = 0) => {
//     if (id === 0) {
//       const response = await fetch("http://localhost:5000/tasks", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });
//       const task = await response.json();
//       toast.success("Task Added Successfully", { autoClose: 2500 });
//       setTimeout(() => {
//         setData(prevData => {
//           const newArray = [];
//           prevData.map(item => {
//             return newArray.push(item);
//           });
//           newArray.push(task);

//           return newArray;
//         });
//       }, 1000);
//     } else {
//       const response = await fetch(`http://localhost:5000/tasks/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });
//       const answer = await response.json();
//       toast.success("Your Task has benn updated", { autoClose: 2500 });
//       let arr = [];
//       setTimeout(() => {
//         setData(prevData => {
//           prevData.map(item => {
//             return item.id === id ? arr.push(answer) : arr.push(item);
//           });

//           return arr;
//         });
//       }, 2000);
//     }
//     setIsUpdate(false);
//     setFormData({
//       title: "",
//       date: ""
//     });
//   };

//   const fetchData = async () => {
//     toast.info("Loading Data from Database", { autoClose: 2000 });
//     const response = await fetch(URL);
//     const Data = await response.json();
//     setData(Data);
//   };

//   React.useEffect(
//     () => {
//       fetchData();
//     },
//     [] //data.length use it in dependency array
//   );

//   /**
//    * delete task from database
//    * @param {*deleteTask} deleteTask
//    */
//   const deleteTask = async id => {
//     setIsUpdate(false);
//     setFormData({
//       title: "",
//       date: ""
//     });
//     if (window.confirm("Are sure to delete this task?")) {
//       await fetch(URL + "/" + id, {
//         method: "DELETE"
//       });
//       // fetchData();
//       //data.filter(item => item.id === id);
//       toast.success("Task Deleted Successfully", {
//         autoClose: 2000
//       });
//       setTimeout(() => {
//         setData(prevData => prevData.filter(item => item.id !== id));
//       }, 1000);
//     }
//   };

//   const TaskData = () => {
//     return data.map(item => {
//       return (
//         <Task
//           handleUpdate={handleUpdate}
//           handleDelete={deleteTask}
//           key={item.id}
//           task={item}
//         />
//       );
//     });
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/TaskTracker" element={<Navbar />}>
//           <Route
//             index
//             element={
//               <React.Fragment>
//                 <ToastContainer />
//                 <Header setShowForm={setShowForm} showForm={showForm} />
//                 {showForm && (
//                   <Form
//                     formData={formData}
//                     addTask={addTask}
//                     handleFormDataChange={handleFormDataChange}
//                     isUpdate={isUpdate}
//                   />
//                 )}
//                 {data.length !== 0 ? (
//                   <div className="taskContainer">
//                     <TaskData />{" "}
//                   </div>
//                 ) : (
//                   <EmptyTask />
//                 )}
//               </React.Fragment>
//             }
//           />
//           <Route path="TaskTracker/Dashboard" element={<Dashboard />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
