import React, { useState, useReducer, useEffect, useRef } from 'react';
import Form from './Parts/Form';
import './index.css';
import List from './Parts/List';

// Reducer function to manage state
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    default:
      return state;
  }
};

function App() {
  const [showForm, setShowForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState('ALL'); // Default filter status is 'ALL'
  const [heightClass, setHeightClass] = useState('h-screen');
  const containerRef = useRef(null);

  // Initial state
  const initialState = {
    todos: [], // Initial list of todos
  };

  // UseReducer hook to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Filter tasks based on status
  const filterTasks = status => {
    setFilterStatus(status);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Update height class based on content height
  useEffect(() => {
    const updateHeightClass = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.clientHeight;
        const windowHeight = window.innerHeight;
        setHeightClass(containerHeight > windowHeight ? 'h-full' : 'h-screen');
      }
    };

    // Run on mount and every time todos or showForm changes
    updateHeightClass();
    window.addEventListener('resize', updateHeightClass);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', updateHeightClass);
  }, [state.todos, showForm]);

  return (
    <div ref={containerRef} className={`mx-auto p-4 bg-gray-900 w-full ${heightClass}`}>
      <div className='flex justify-center mt-4 p-4  '>
        <div className='flex justify-center flex-col bg-slate-800 rounded-[20px] w-[92.5%] '>
          <h1 className='text-xl mt-4 md:text-4xl self-center font-bold text-[#6366f1]'>
            TODO LIST
          </h1>
          <div className='flex flex-col md:flex-row justify-between items-center m-4 gap-2 font-small md:font-bold '>
            <div className='flex flex-col md:flex-row gap-2 '>
              <button
                className='text-white px-4 py-2 mt-2 bg-[#6366f1] rounded hover:bg-[#533fc1ce]'
                onClick={() => filterTasks('ALL')}
              >
                ALL
              </button>
              <button
                className='text-white px-4 py-2 mt-2 bg-[#6366f1] rounded hover:bg-[#533fc1ce]'
                onClick={() => filterTasks('COMPLETED')}
              >
                COMPLETED
              </button>
              <button
                className='text-white px-4 py-2 mt-2 bg-[#6366f1] rounded hover:bg-[#533fc1ce]'
                onClick={() => filterTasks('PENDING')}
              >
                PENDING
              </button>
            </div>
            <button
              className='text-white px-4 py-2 mt-2 bg-[#6366f1] rounded hover:bg-[#533fc1ce]'
              onClick={toggleForm}
            >
              + ADD NEW
            </button>
          </div>
        </div>
      </div>
      {showForm && <Form dispatch={dispatch} />}
      <List
        todos={state.todos.filter(todo =>
          filterStatus === 'ALL' ||
          (filterStatus === 'COMPLETED' ? todo.completed : !todo.completed)
        )}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
