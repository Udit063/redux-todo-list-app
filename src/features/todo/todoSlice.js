// slice helps to create big object and responsible for tracking initial state and reducers are collected here

// nanoid -> unique id provided by redux
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello", completed: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //nothing but objects for updating the store
    // action is something you can send the data
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload); // don't include id you are passing
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
// this will help individually for the dispatch

export default todoSlice.reducer;
// this will store in the store
