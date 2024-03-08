import { deleteTodo, postTodo, updateTodo } from "@/apis";
import { queryClient } from "@/main";
import { TNewTodo, TTodo } from "@/types/types";
import { useMutation } from "@tanstack/react-query";

export const useTodoMutation = () => {
  const { mutate: createMutation } = useMutation({
    mutationFn: async (todo: TNewTodo) => {
      await postTodo(todo);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todo"] });
    },
  });
  const { mutate: deleteMutation } = useMutation({
    mutationFn: async (id: string) => {
      await deleteTodo(id);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todo"] });
    },
  });
  const { mutate: updateMutation } = useMutation({
    mutationFn: async (updatedTodo: TTodo) => {
      await updateTodo(updatedTodo);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todo"] });
    },
  });

  return { createMutation, deleteMutation, updateMutation };
};
