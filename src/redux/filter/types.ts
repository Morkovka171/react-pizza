export type TSort = {
  name:
    | "популярности ↑"
    | "популярности ↓"
    | "цене ↑"
    | "цене ↓"
    | "алфавиту ↑"
    | "алфавиту ↓";
  sortProperty: "rating" | "title" | "price" | "-rating" | "-title" | "-price";
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: TSort;
}
