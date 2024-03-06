import styles from "./AddForm.module.css";

const AddForm = () => {
  return (
    <form className={styles.wrapper} onSubmit={() => {}}>
      <label>
        제목: <input type="text" name="title" />
      </label>
      <label>
        내용: <input type="text" name="content" />
      </label>
      <button type="submit">등록</button>
    </form>
  );
};

export default AddForm;
