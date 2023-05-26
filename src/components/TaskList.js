import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  
  return (
    <div className="tasks">
      {/* display a list of tasks */}

      <ul>
        {tasks.map((task) => (
          <Task
            key={task.text}
            text={task.text}
            category={task.category}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;



