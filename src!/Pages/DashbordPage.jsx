import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const DashbordPage = () => {
  return (
    <>
      <Link to="pokemon">Pokemon</Link>
      <Link to="todos">Todos</Link>
      <div>Dashbord Page</div>
      <Outlet />
    </>
  );
};
// export default DashbordPage;
