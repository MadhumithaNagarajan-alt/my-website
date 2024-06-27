import { Outlet, NavLink } from "react-router-dom";
import { ImHome3 } from "react-icons/im";
import { IoLogoReact } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";


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
            <ImHome3 size={18} color='#FFFFFF' /> Home
</NavLink>  {" "}




<NavLink
            to={`/hooks/`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
          <IoLogoReact size={18} color='#FFFFFF'/> React Hooks
          </NavLink>{" "}
        
          <NavLink
            to={`/router/`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
          <IoLogoReact size={18} color='#FFFFFF'/> React Router
          </NavLink>{" "}

          <NavLink
            to={`/jsx/`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
          <IoLogoReact size={18} color='#FFFFFF'/>  React JSX
          </NavLink>{" "}







          <NavLink
            to={`/about/`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
          <FcAbout size={18} color='#FFFFFF' /> About Us
          </NavLink>{" "}
          <NavLink
            to={`/contact/`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
         <IoCall size={18} color='#FFFFFF' /> Contact US
          </NavLink>{" "}
          
          
        </ul>
      </nav>
      <Outlet />
      
    </div>
  );
}

export default Layout;