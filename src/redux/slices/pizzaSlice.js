import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { currentPage, category, sortBy, order, search } = params;
    console.log(search);
    const { data } = await axios.get(
      `https://63c04ab1a177ed68abc42df0.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&search=${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "", //loading | success | error
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItems } = pizzaSlice.actions;
export const selectPizzaData = (state) => state.pizza;

export default pizzaSlice.reducer;
