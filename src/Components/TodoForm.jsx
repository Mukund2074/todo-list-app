import React, { useState } from 'react';

function TodoForm({ dispatch }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text: task, completed: false } });
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex-col">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
        className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2 rounded ">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
