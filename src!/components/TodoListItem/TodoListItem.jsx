import { useDeleteTodosMutation } from 'redux/todosSlice';

export const TodoListItem = ({ id, content }) => {
  const [onDeleteTodo, { isLoading, isDeleting }] = useDeleteTodosMutation();
  console.log(id);
  return (
    <li>
      <p>{content}</p>
      <button
        disabled={isLoading}
        type="bitton"
        onClick={() => onDeleteTodo(id)}
      >
        {isLoading ? 'Deleting.....' : 'Delete'}
      </button>
    </li>
  );
};
