import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  // function untuk di ekspor ke "todo/src/components/TableComponents"
  name: "todos",
  initialState: { value: [] }, // lupa buat apaan
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
      state.value.map((todo) => {
        if (todo.id === action.payload.id) { // jika todo id dari FakeData.js sama dengan todo id yang dikirim dari TableTodo maka:
          todo.todo = action.payload.todo; // todo = input todo yang di input sebelumnya
        }
      });
    },
  },
});

export const { addTask, deleteTask, updateTask } = todoSlice.actions;
export default todoSlice.reducer;
