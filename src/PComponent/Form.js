import React from "react";
import { toast } from "react-toastify";
export default function Form(props) {
  
  const handleSubmit = event => {
    event.preventDefault();
    if (props.isUpdate) {
      if (props.formData.title && props.formData.date) {
        props.addTask(props.formData.id);
      } else {
      }
    } else {
      if (props.formData.title && props.formData.date) {
        props.addTask();
      } else {
        toast.error("Please Fill out the form", {
          autoClose: 2000
        });
      }
    }
  };
  return (
    <div className="formContainer">
      <form method="POST" onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="task">Task</label>
          <input
            onChange={props.handleFormDataChange}
            maxLength="35"
            className="textInput"
            type="text"
            id="task"
            placeholder="Task"
            name="title"
            value={props.formData.title}
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            onChange={props.handleFormDataChange}
            maxLength="35"
            className="textInput"
            type="text"
            id="date"
            placeholder="Date & Time"
            name="date"
            value={props.formData.date}
          />
        </div>
        <div>
          <input
            className="submitBtn"
            type="submit"
            value={props.isUpdate ? "Update Task" : "Save Task"}
          />
        </div>
      </form>
    </div>
  );
}
