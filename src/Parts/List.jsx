import React from 'react';

export default function List({ todos, dispatch }) {
  const handleToggle = id => {
    dispatch({ type: 'TOGGLE_TASK', id });
  };

  const handleDelete = id => {
    dispatch({ type: 'DELETE_TASK', id });
  };



  return (
    <div className='mx-auto mt-[-30px] p-5 flex flex-wrap justify-center text-sm md:text-[20px] text-white font-bold bg-slate-800 w-[90%] rounded-[20px] '>
      {todos.map((todo, index) => (
        <div key={todo.id} className='bg-[#1e293b] w-[calc(30% - 8px)] shadow shadow-white justify-center rounded-2xl overflow-hidden m-4'>
          <div className='flex flex-col overflow-hidden'>
            <div className="p-2 text-[#6366f1] bg-[#111827] h-[50px] flex justify-center items-center text-[10px] md:text-[20px]">
              <input
                type="checkbox"
                className='self-center w-[15px] h-[15px] md:w-[25px] md:h-[25px] mr-2'
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              <label htmlFor={todo.id} className='mt-3'>{todo.completed ? "MARK AS PENDING" : "MARK AS COMPLETED"}</label>
            </div>
            <div className='flex justify-center bg-[#191854] p-4'>
              <span className={todo.completed ? "line-through" : ""}>Task No : {index + 1} <br /> {todo.text}</span>
            </div>
            <div className='bg-[#111827] flex justify-center w-[100%] h-[100%] overflow-hidden'>
              <button onClick={() => handleDelete(todo.id)}
                className='text-white m-4 bg-[#6366f1] rounded hover:bg-[#533fc1ce] p-4'
                style={{
                  boxShadow: '0 0 10px rgba(102, 51, 153, 0.8)',
                  transition: 'box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.boxShadow = '0 0 15px rgba(102, 51, 153, 1)')}
                onMouseLeave={(e) => (e.target.style.boxShadow = '0 0 10px rgba(102, 51, 153, 0.8)')}
              >Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
