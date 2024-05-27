import React from 'react'

export default function Items({todo , dispatch}) {
  return (
    <div>
        <input type="checkbox" 
        checked={todo.completed} 
        onChange={() => dispatch({type: "TOGGLE" , id: todo.id})}/>
        <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
        <button onClick={() => dispatch({type: "DELETE" , id: todo.id})}>Delete</button>
    </div>
  )
}
