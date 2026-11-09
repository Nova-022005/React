import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
}


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload // payload is a object 
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id == action.payload.id);
      if (todo) {
        //! As Redux use Immer we can use the second and it will automatically create a new immutable state 
        todo.text = action.payload.text;
      }
    }



  }
})

export const {addTodo,removeTodo,updateTodo}=> todoSlice.actions

export default to