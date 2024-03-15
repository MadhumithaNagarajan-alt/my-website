import { Outlet, NavLink } from "react-router-dom";


const Layout = () => {
  return (
    <div className="App container  p-1 d-flex shadow">
      <nav className="navbar bg-accept text-light mb-3">
        <ul className="navbar-nav m-auto">
          <NavLink
            to={`/home/`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
           <li> Home</li>
</NavLink>  {" "}




<NavLink
            to={`/hooks/`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
           <li> React Hooks</li>
          </NavLink>{" "}
        
          <NavLink
            to={`/router/`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
           <li>React Router</li>
          </NavLink>{" "}

          <NavLink
            to={`/jsx/`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
           <li> React JSX</li>
          </NavLink>{" "}







          <NavLink
            to={`/about/`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
           <li> About Us</li>
          </NavLink>{" "}
          <NavLink
            to={`/contact/`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <li>Contact US</li>
          </NavLink>{" "}
          
          
        </ul>
      </nav>
      <Outlet />
      
    </div>
  );
}

export default Layout;