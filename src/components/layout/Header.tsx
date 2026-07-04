import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHotel, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-slate-600 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
            <FaHotel size={18} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              HotelFinder
            </h1>
            <p className="text-xs text-slate-500">
              Find Your Perfect Stay
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <a
            href="#hotels"
            className="text-slate-600 transition hover:text-blue-600"
          >
            Hotels
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="flex flex-col p-4">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-100"
            >
              Home
            </NavLink>

            <a
              href="/hotels"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-100"
            >
              Hotels
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;