import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const activeUrl = location.pathname;

  return (
    <div className='md:flex md:min-h-screen'>
      <div className='md:w-1/4 bg-blue-900 px-5 py-10'>
        <h2 className='text-4xl font-black text-center text-white mb-5'>
          Customers Manager App
        </h2>
        <div className='no-underline text-lg text-white text-center hover:text-blue-300'>
          <a
            href='https://carlos-londono.dev/'
            target='_blank'
            rel='noreferrer'
          >
            by <span className='font-bold'>carlos-londono.dev</span>
          </a>
        </div>
        <nav className='mt-10 '>
          <Link
            className={`${
              activeUrl === '/' ? 'text-blue-300' : 'text-white'
            } text-2xl block mt-2 hover:text-blue-300`}
            to='/'
          >
            Customers
          </Link>

          <Link
            className={`${
              activeUrl === '/new' ? 'text-blue-300' : 'text-white'
            } text-2xl block mt-2 hover:text-blue-300`}
            to='/new'
          >
            New Customer
          </Link>
        </nav>
      </div>
      <div className='md:w-3/4 p-10 bg-slate-50 md:h-screen overflow-scroll'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
