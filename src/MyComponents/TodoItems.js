import React from 'react'

export const TodoItems = ({todo1 , onDelete}) => {
  return (
    <div>
     <h4>{todo1.title}</h4>
     <p>{todo1.desc}</p>
     <button className='btn btn-sm btn-danger' onClick={() =>{onDelete(todo1)}}>Delete</button>
    </div>
    
  )
}
