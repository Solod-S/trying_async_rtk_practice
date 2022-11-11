import { useFetchTodosQuery, useDeleteTodosMutation } from 'redux/todosSlice';
import { TodoList } from 'components/TodoList/TodoList';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
export const Todos = () => {
  const { data, isFetching } = useFetchTodosQuery();

  return (
    <div>
      <Link to="create">Create New Todos</Link>
      <Outlet />
      {isFetching && <div>LOADING.....</div>}
      {data && <TodoList todos={data} />}
    </div>
  );
};
