import React from 'react';

function TodoItem({ todo, dispatch }) {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-2 mb-2 rounded">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
          className="mr-2"
        />
        <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
      </div>
      <button
        onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
