import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    tasks: [
    // { id: 1, title: 'Update bug report', completed: false },
    // { id: 2, title: 'Complete PR comments on dasboard', completed: false },
    // { id: 3, title: 'Code review on user management', completed: true },
    // { id: 4, title: 'todo4', completed: false },
    // { id: 5, title: 'todo5', completed: false },
  ]
},
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: new Date(),
        title: action.payload.title,
        completed: action.payload.completed,
      };

      state.tasks.push(todo);
    },
    toggleComplete: (state, action) => {
      const index = state.tasks.findIndex((x) => x.id == action.payload.id);
      state[index]['completed'] = action.payload.completed;
    },
    removeTodo: (state, action) => {
      return state.tasks.filter((x) => x.id != action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
