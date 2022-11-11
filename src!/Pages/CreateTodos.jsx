import { useCreateTodosMutation } from 'redux/todosSlice';
import { Navigate } from 'react-router-dom';

export const CreateTodos = () => {
  const [createTodo, { isLoading, isSuccess }] = useCreateTodosMutation();

  const handleSubmit = async event => {
    event.preventDefault();
    const newTodo = event.currentTarget.elements.content.value;
    event.currentTarget.reset();

    try {
      await createTodo(newTodo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isSuccess && <Navigate to="/" replace />}
      <div>createTodos</div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="content" />
        <button type="submit">{isLoading ? 'Loading....' : 'Create'}</button>
      </form>
    </>
  );
};
