import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "task",
  initialState: {
    task: [],
  },
  reducers: {
    initializeTask: (state, action) => {
      state.task = action.payload;
    },
    deleteTask: (state, action) => {
      const filteredTask = state.task.filter((task) => {
        return task.id !== action.payload.id;
      });
      state.task = filteredTask;
    },
    addTask: (state, action) => {
      const { id, name, description } = action.payload;
      const newTask = { id, name, description };
      const duplicateTask = state.task.find((task) => {
        return task.id === id;
      });
      if (!duplicateTask) {
        state.task.push(newTask);
      } else {
        alert(`La tarea con id ${id} ya fue creada`);
      }
    },
    changeStateTask: (state, action) => {
      const { taskId, complete } = action.payload;
      state.task = state.task.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            complete,
          };
        }
        return task;
      });
    },
  },
});

const { actions } = tasksSlice;
export const { deleteTask, initializeTask, changeStateTask, addTask } = actions;
export default tasksSlice.reducer;
