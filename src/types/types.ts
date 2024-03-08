export type TTodo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export type TNewTodo = Omit<TTodo, "id">;
