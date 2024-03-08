import { useQuery } from "@tanstack/react-query";
import * as todoApi from "@apis/index";

export const useTodoQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: async () => {
      return await todoApi.getTodos();
    },
  });

  return { data, isLoading };
};
