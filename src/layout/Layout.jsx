import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <h1>From Layout</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
