import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  // navList Data
  const navList = (
    <ul className="flex space-x-3 text-gray-700 font-medium text-md px-5 ">
      {/* Home */}
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      {/* All Product */}
      <li>
        <Link to={"/allproduct"}>Mis productos</Link>
      </li>

      {/* Signup */}
      {!user ? (
        <li>
          <Link to={"/signup"}>Regístrame</Link>
        </li>
      ) : (
        ""
      )}

      {/* Signup */}
      {!user ? (
        <li>
          <Link to={"/login"}>Inicia sesión</Link>
        </li>
      ) : (
        ""
      )}

      {/* User */}
      {user?.role === "user" && (
        <li>
          <Link to={"/user-dashboard"}>Bienvenido, {user?.name}</Link>{" "}
          {/* User-Dashboard */}
        </li>
      )}

      {/* Admin */}
      {user?.role === "admin" && (
        <li>
          <Link to={"/admin-dashboard"}>Bienvenido, {user?.name}</Link>{" "}
          {/* Admin Dashboard */}
        </li>
      )}

      {/* logout */}
      {user && (
        <li className="cursor-pointer" onClick={logout}>
          Cierra sesión
        </li>
      )}

      {/* Cart */}
      <li>
        <Link to={"/cart"}>Mi carrito(0)</Link>
      </li>
    </ul>
  );
  return (
    <nav className="bg-purple-300 sticky top-0">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <img
              src="../../public/img/icons/Logo.png"
              alt="MiDulceOnline"
              className="h-12"
            />
          </Link>
        </div>

        {/* right  */}
        <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>

        {/* Search Bar  */}
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
