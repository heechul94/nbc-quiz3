import { useTodoQuery } from "@/hooks/useTodoQuery";
import Todo from "../todo/Todo";
import { TTodo } from "@/types/types";

const useTodoList = () => {
  const { data: todos, isLoading } = useTodoQuery();

  return { todos, isLoading };
};

const TodoList = ({ isDone }: { isDone: boolean }) => {
  const { todos, isLoading } = useTodoList();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <p>{isDone ? "Done!!" : "Working..."}</p>
      <ul>
        {todos
          ?.filter((todo: TTodo) => isDone === todo.isDone)
          .map((todo: TTodo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
