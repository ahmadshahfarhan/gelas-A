import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  // Tutup menu saat klik di luar menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="w-full bg-transparent py-4 px-6 md:px-12 top-3 left-0 right-0 z-50 absolute">
      <div className="flex items-center justify-between">
        <h1 className="base-white-text title-font text-3xl md:text-4xl">
          GELAS A
        </h1>

        {/* Burger button */}
        <div className="md:hidden" ref={burgerRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-11 base-white-text text-md">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Testimoni</li>
          <li className="cursor-pointer">Produk</li>
        </ul>

        <div className="hidden md:block">
          <button className="text-black font-semibold text-[15px] base-white-bg py-2 px-5 rounded-4xl">
            Order Now
          </button>
        </div>
      </div>

      {/* Mobile menu with smooth transition */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        } bg-white/90 rounded-lg shadow-lg px-4 py-2`}
      >
        <ul className="flex flex-col gap-4 text-black font-medium">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Testimoni</li>
          <li className="cursor-pointer">Produk</li>
        </ul>
        <button className="mt-4 w-full text-white font-semibold bg-black py-2 px-5 rounded-4xl">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
