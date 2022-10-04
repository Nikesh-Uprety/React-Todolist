
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { Addtodo } from "./MyComponents/Addtodo";
import React, { useState } from 'react';
function App() {
  const onDelete = (todo1) =>{
    console.log("I am onDelete",todo1);

    setTodos(todo.filter((e) => {
      return e!==todo1;
    }))
  }

  const addtodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno=todo[todo.length-1].sno + 1;
    const mytodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todo, mytodo]);
    console.log(mytodo)
  }

  const [todo, setTodos] = useState([
    {
      sno:1,
      title: "Go to the gym",
      desc: "Work hard in the gym to make yourself motivated"
    },
    {
      sno:2,
      title: "Go to the shop", 
      desc: "Work hard in the shop to make money"
    },
    {
      sno:3,
      title: "Go to the kitchen",
      desc: "Work hard in the kitchen to make a deleicious food"
    }
  ]);
  return (
   <>
   <Header title="My todos list" searchbar={false}/> 
   <Addtodo addtodo={addtodo}/>
   <Todos todo={todo} onDelete={onDelete}/>
   <Footer/>
   </>
  );
}
export default App;
