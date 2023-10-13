// Task.js
import React from "react";

function Task({ task, onDelete }) {
  return (
    <div>
      {task}
      <button className="delete-button" onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Task;
