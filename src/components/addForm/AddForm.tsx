import { useState } from "react";
import styles from "./AddForm.module.css";
import { useTodoMutation } from "@/hooks/useTodoMutation";
import { TNewTodo } from "@/types/types";

const useAddForm = () => {
  const [formValue, setFormValue] = useState<TNewTodo>({
    title: "",
    content: "",
    isDone: false,
  });
  const { createMutation } = useTodoMutation();

  const onChangeFormValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createMutation(formValue);
    event.currentTarget.reset();
  };

  return { onChangeFormValue, onSubmitForm };
};

const AddForm = () => {
  const { onChangeFormValue, onSubmitForm } = useAddForm();
  return (
    <form className={styles.wrapper} onSubmit={onSubmitForm}>
      <label>
        제목: <input type="text" name="title" onChange={onChangeFormValue} />
      </label>
      <label>
        내용: <input type="text" name="content" onChange={onChangeFormValue} />
      </label>
      <button type="submit">등록</button>
    </form>
  );
};

export default AddForm;
