import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  // function untuk di ekspor ke "todo/src/components/TableComponents"
  name: "todos",
  initialState: {
    value: [
      { id: 1, task: "Tugas 1", completed: false },
      { id: 2, task: "Meeting 1", completed: true },
      { id: 3, task: "Tugas 2", completed: false },
      { id: 4, task: "Tugas 3", completed: false },
    ],
  }, // lupa buat apaan
  reducers: {
    // membuat function { addTodo } untuk di eksport ke "todo/src/components/CreateModal.js/"
    addTask: (state, action) => {
      // menambahkan data todo
      state.value.push(action.payload); // aksi dimana data akan di tambahkan
    },

    // membuat function { deleteTodo } untuk di eksport ke "todo/src/components/TableTodo.js/" untuk menghapus data
    deleteTask: (state, action) => {
      // aksi dimana data akan di filter
      state.value = state.value.filter(
        (todo) => todo.id !== action.payload.id // dan menyesuaikan jika *id tidak samadengan (id yang akan di delete)* todo tidak akan di hapus (mungkin?)
      );
    },

    // membuat function { deleteTask } untuk di eksport ke "todo/src/components/TableTodo.js/" untuk menghapus data
    updateTask: (state, action) => {
      // ngeloop data
      state.value.map((task) => {
        if (task.id === action.payload.id) {
          // jika task id dari FakeData.js sama dengan task id yang dikirim dari TableTodo maka:
          task.task = action.payload.task; // task = input todo yang di input sebelumnya
        }
      });
    },

    completeTask: (state, action) => {
      // ngeloop data
      state.value.map((task) => {
        if (task.id === action.payload.id) {
          // jika task id dari FakeData.js sama dengan task id yang dikirim dari TableTodo maka:
          task.completed = action.payload.completed; // task = input todo yang di input sebelumnya
        }
      });
    },
  },
});

export const { addTask, deleteTask, updateTask, completeTask } =
  todoSlice.actions;
export default todoSlice.reducer;
