import { TNewTodo, TTodo } from "@/types/types";
import axios from "axios";

const todoApi = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
});

todoApi.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.error(error);
    return Promise.reject(error);
  }
);

todoApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error(error);
    return Promise.reject(error);
  }
);

export const getTodos = async () => {
  const response = await todoApi.get("/todos");
  return response.data;
};

export const postTodo = async (todo: TNewTodo): Promise<TTodo> => {
  const response = await todoApi.post("/todos", todo);
  return response.data;
};

export const updateTodo = async (updatedTodo: TTodo): Promise<TTodo> => {
  const response = await todoApi.patch(`/todos/${updatedTodo.id}`, updatedTodo);
  return response.data;
};

export const deleteTodo = async (id: string): Promise<TTodo> => {
  const response = await todoApi.delete(`/todos/${id}`);
  return response.data;
};
