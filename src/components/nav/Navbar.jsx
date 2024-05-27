import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black text-white">
        <ul className="flex space-x-5 justify-center font-bold text-3xl">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portforlio</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
