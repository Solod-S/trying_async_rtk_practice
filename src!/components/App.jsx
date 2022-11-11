import { Route, Routes, Navigate } from 'react-router-dom';
import { Pokemon } from 'components/Pokemon/Pokemon';
import { DashbordPage } from 'Pages';
import { Todos } from './Todos/Todos';
import { CreateTodos } from 'Pages/CreateTodos';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashbordPage />}>
        <Route path="todos" element={<Todos />}>
          <Route path="create" element={<CreateTodos />} />
        </Route>
        <Route path="pokemon" element={<Pokemon />} />
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Route>
    </Routes>
  );
};
