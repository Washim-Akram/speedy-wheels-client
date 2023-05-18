import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/react.svg";
import "./NavBar.css";

const NavBar = () => {
  const navItems = (
    <>
      <li className="tooltip" data-tip="Home">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li className="tooltip" data-tip="All Toys">
        <NavLink
          to="/all-toys"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          All Toys
        </NavLink>
      </li>

      <li className="tooltip" data-tip="My Toys">
        <NavLink
          to="/my-toys"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          My Toys
        </NavLink>
      </li>

      <li className="tooltip" data-tip="Add a Toy">
        <NavLink
          to="/add-toy"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Add a Toy
        </NavLink>
      </li>

      <li className="tooltip" data-tip="Blogs">
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-20 md:mt-6 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link
          to="/"
          className="normal-case text-xl tooltip tooltip-bottom"
          data-tip="Speedy Wheels"
        >
          <img src={logo} alt="Logo" />
        </Link>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl tooltip tooltip-bottom inline-flex items-center"
          data-tip="Speedy Wheels"
        >
          Speedy Wheels
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="mr-5">
          <button className="btn btn-active tooltip" data-tip="Log Out">
            Log Out
          </button>

          <Link to="/login">
            <button className="btn btn-active tooltip" data-tip="Login">
              Login
            </button>
          </Link>
        </div>
        <div className="avatar online">
          <div className="w-14 rounded-full cursor-pointer">
            <img
              src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className="tooltip"
              data-tip="User"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
