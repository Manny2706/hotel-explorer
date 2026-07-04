import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHotel,
  FaArrowRight,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 80);
  };
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative transition duration-300 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-slate-700 hover:text-blue-600"
    }`;

  return (
    <header
  className={`sticky top-0 z-50 transition-all duration-300 ${
    scrolled
      ? "border-b border-slate-200 bg-white/80 shadow-sm backdrop-blur-xl"
      : "bg-transparent"
  }`}
>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30">

            <FaHotel size={20} />

          </div>

          <div>

            <h1 className="text-xl font-black tracking-tight text-slate-900">

              StayFinder

            </h1>

            <p className="text-xs text-slate-500">

              Luxury Hotel Discovery

            </p>

          </div>

        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-10 md:flex">

          <NavLink
            to="/"
            className={navLinkClass}
          >
            Home
          </NavLink>

          <a
            href="#hotels"
            className="text-slate-700 transition hover:text-blue-600"
          >
            Hotels
          </a>

        </nav>

        {/* CTA */}

        <div className="hidden md:flex">

          <a
            href="#hotels"
            className="group flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30"
          >

            Explore

            <FaArrowRight className="transition group-hover:translate-x-1" />

          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl p-2 transition hover:bg-slate-100 md:hidden"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-64 border-t" : "max-h-0"
        }`}
      >
        <nav className="space-y-2 bg-white p-6">

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-4 py-3 transition hover:bg-slate-100"
          >
            Home
          </NavLink>

          <a
            href="#hotels"
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-4 py-3 transition hover:bg-slate-100"
          >
            Hotels
          </a>

          <a
            href="#hotels"
            onClick={() => setIsOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white"
          >
            Explore Hotels

            <FaArrowRight />
          </a>

        </nav>
      </div>
    </header>
  );
};

export default Header;