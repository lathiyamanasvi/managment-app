import React from 'react';

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <strong>{task.taskName}</strong> (Assigned to: {task.assignedUser})
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
