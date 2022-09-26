import React from "react";
import TaskDashboard from "./TaskDashboard.js";
import EmptyTask from "./EmptyTask.js";
export default function Dashboard({ data }) {
  const TaskData = () => {
    return data.map(item => {
      return <TaskDashboard key={item.id} task={item} />;
    });
  };
  const TaskRender = () => {
    if (data.length !== 0) {
      return (
        <div className="taskContainer">
          <TaskData />{" "}
        </div>
      );
    } else {
      return <EmptyTask />;
    }
  };
  return <TaskRender />;
}
