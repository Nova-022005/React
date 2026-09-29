import { createContext,React, useContext } from "react";

export const TodoContext=useContext({
  todo:[
    {
      id: 1,
      todo: " todo msg",
      completed: false
    }
  ],
  addTodo: (todo)=>{},
  updateTodo:(id,todo)=>{},
  deleteTodp:(id)=>{},
  toggleComplete:(id)=>{} 
});

export const useTodo=()=>{

  return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider