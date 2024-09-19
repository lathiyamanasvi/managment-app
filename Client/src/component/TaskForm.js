import React, { useState } from 'react';

function TaskForm() {
  const [taskName, setTaskName] = useState('');
  const [assignedUser, setAssignedUser] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { taskName, assignedUser };
    await fetch('/api/tasks/assign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Assign to"
        value={assignedUser}
        onChange={(e) => setAssignedUser(e.target.value)}
      />
      <button type="submit">Assign Task</button>
    </form>
  );
}

export default TaskForm;
