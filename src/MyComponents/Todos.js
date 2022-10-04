import React from 'react'
import {TodoItems} from './TodoItems'

export const Todos = (props) => {
  let myStyle ={
    minHeight:"70vh"
  }
  return (
    <div className='container my-3' style={myStyle}>
       
    <h3 className='mt-3 '>Todos List</h3>
    {props.todo.length===0? "No todos to display":
    props.todo.map((todo1) => {
      return (
      <>
      <TodoItems todo1={todo1} key={todo1.sno} onDelete ={props.onDelete}/> <hr/>
      </>
      )
      })
    }
    </div>
  )
}
