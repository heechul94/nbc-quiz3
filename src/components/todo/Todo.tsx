import { useTodoMutation } from "@/hooks/useTodoMutation";
import styles from "./Todo.module.css";
import { TTodo } from "@/types/types";

const useTodo = () => {
  const { deleteMutation, updateMutation } = useTodoMutation();

  const onClickDelete = (id: string) => {
    const confirmResult = confirm("삭제 하시겠습니까?");
    if (confirmResult) {
      deleteMutation(id);
    }
  };

  const onClickIsDone = (todo: TTodo) => {
    const updatedTodo = { ...todo, isDone: !todo.isDone };
    updateMutation(updatedTodo);
  };

  return { onClickDelete, onClickIsDone };
};

const Todo = ({ todo }: { todo: TTodo }) => {
  const { onClickDelete, onClickIsDone } = useTodo();

  return (
    <li className={styles.wrapper}>
      <div>
        <div>
          <p>제목: {todo.title}</p>
          <p>내용: {todo.content}</p>
        </div>
        <button onClick={() => onClickDelete(todo.id)}>삭제</button>
      </div>
      <button
        className={styles.statusButton}
        onClick={() => onClickIsDone(todo)}
      >
        {todo.isDone ? "취소" : "완료"}
      </button>
    </li>
  );
};

export default Todo;
