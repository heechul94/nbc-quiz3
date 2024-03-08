import AddForm from "@/components/addForm/AddForm";
import TodoList from "@/components/todoList/TodoList";

const Home = () => {
  return (
    <>
      <AddForm />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </>
  );
};

export default Home;
