import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../../assets/speedy-wheels.png";
import { AuthContext } from "../../../providers/AuthProvider";
import "./NavBar.css";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
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
          to="/add-a-toy"
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

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          logOut();
          Swal.fire("Logout!", "Successfully Logout.");
        }
      })

      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          title: "Error!",
          text: `${errorMessage}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
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
          <img src={logo} alt="Logo" className="h-24 w-24 rounded-full" />
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
          {user?.email ? (
            <button
              onClick={handleLogOut}
              className="btn btn-active tooltip"
              data-tip="Log Out"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-active tooltip" data-tip="Login">
                Login
              </button>
            </Link>
          )}
        </div>
        {user?.email && (
          <div className="avatar online">
            <div className="w-14 rounded-full cursor-pointer">
              <img
                src={user?.photoURL && user?.photoURL}
                title={user?.displayName && user?.displayName}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
