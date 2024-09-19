import React, { useEffect, useState } from 'react';
import CommentSection from './component/CommentSection';
import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';
import { socket } from './Services/Socket';



function App() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      setTasks(data.tasks);
    };

    fetchTasks();

    // Listen for real-time task updates
    socket.on('task-updated', (updatedTask) => {
      setTasks((prevTasks) => prevTasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    });

    // Request notification permission
    const requestNotificationPermission = async () => {
      try {
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('FCM Token:', token);
      } catch (error) {
        console.error('Unable to get notification permission', error);
      }
    };
    requestNotificationPermission();

  }, []);

  return (
    <div className="App">
      <h1>Task Management</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
      <CommentSection/>
    </div>
  );
}

export default App;
