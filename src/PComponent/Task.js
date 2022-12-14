import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";

export default function Task(props) {
  //const location = useLocation();
  return (
    <div className="task">
      <h2 className="taskTitle">
        <span className="taskTitleSpan">Title</span>:{" "}
        <span className="userTask">{props.task.title} </span>
        <span>
          <FaTimes
            onClick={() => {
              props.handleDelete(props.task.id);
            }}
            className="faTimes"
          />

          <FaEdit
            className="faEdit"
            onClick={() => {
              props.handleUpdate(props.task.id);
            }}
          />
        </span>
      </h2>
      <h3>
        Date: <span className="userTask">{props.task.date}</span>
      </h3>
    </div>
  );
}
