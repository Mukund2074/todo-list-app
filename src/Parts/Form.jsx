import React, { useState } from 'react';

export default function Form({ dispatch }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (task.trim()) {
      // Dispatch action to add task
      dispatch({
        type: 'ADD_TASK',
        payload: { id: Date.now(), text: task, completed: false },
      });
      
      // Reset the input field
      setTask('');
    }
  };

  return (
   <div className='flex justify-center'>
     <div className='mt-[-29px] overflow-hidden rounded-[0 0 0 20px] p-7 w-[90%] bg-slate-800'>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col mt-11'>
          <input
            type='text'
            placeholder=' Enter task'
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className='rounded w-[40%] h-[40px] self-center text-[#6366f1] font-bold bg-transparent'
            style={{
              boxShadow: '0 0 10px rgba(102, 51, 153, 0.8)',
              transition: 'box-shadow 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.boxShadow = '0 0 15px rgba(102, 51, 153, 1)')}
            onBlur={(e) => (e.target.style.boxShadow = '0 0 10px rgba(102, 51, 153, 0.8)')}
          />
          <br />
          <button
            type='submit'
            className='text-white px-4 py-2 mt-2 bg-[#6366f1] rounded w-[20%] self-center hover:bg-[#533fc1ce]'
            style={{
              boxShadow: '0 0 10px rgba(102, 51, 153, 0.8)',
              transition: 'box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.boxShadow = '0 0 15px rgba(102, 51, 153, 1)')}
            onMouseLeave={(e) => (e.target.style.boxShadow = '0 0 10px rgba(102, 51, 153, 0.8)')}
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
   </div>
  );
}
