import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ChevronDown } from "lucide-react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  // Temporary cart count
  const cartCount = 1;

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>

            <span className="text-xl font-bold text-gray-900">
              Pujan Cake and Gift House
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {/* Home */}
            <Link
              to="/"
              className="text-gray-700 hover:text-black font-medium transition"
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-pink-600 font-medium transition">
                Products
                <ChevronDown size={16} />
              </button>

              <div className="absolute z-50 left-0 top-full mt-2 w-48 rounded-xl bg-white shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                <Link
                  to="/products/cakes"
                  className="block px-5 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                >
                  Cakes
                </Link>

                <Link
                  to="/products/accessories"
                  className="block px-5 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                >
                  Accessories
                </Link>

                <Link
                  to="/products/gifts"
                  className="block px-5 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                >
                  Gifts
                </Link>

              </div>
            </div>

            {/* About */}
            <Link
              to="/about"
              className="text-gray-700 hover:text-black font-medium transition"
            >
              About Us
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="text-gray-700 hover:text-black font-medium transition"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-pink-600 transition"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={24} />

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-pink-600 text-white text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Login */}
            <Link
              to="/login"
              className="px-4 py-2 text-gray-700 font-medium hover:text-black transition"
            >
              Login
            </Link>

            {/* Get Started */}
            <Link
              to="/signup"
              className="px-5 py-2.5 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition"
            >
              Get Started
            </Link>

          </div>

          {/* Mobile Right Side */}
          <div className="md:hidden flex items-center gap-3">

            {/* Mobile Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-pink-600 transition"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={23} />

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-pink-600 text-white text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col gap-1">

              {/* Home */}
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100 hover:text-black transition"
              >
                Home
              </Link>

              {/* Mobile Products */}
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition"
              >
                <span>Products</span>

                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Product Categories */}
              {productsOpen && (
                <div className="ml-4 flex flex-col border-l-2 border-pink-100">

                  <Link
                    to="/cakes"
                    onClick={() => setMenuOpen(false)}
                    className="px-5 py-2.5 text-gray-600 hover:text-pink-600 transition"
                  >
                    Cakes
                  </Link>

                  <Link
                    to="/accessories"
                    onClick={() => setMenuOpen(false)}
                    className="px-5 py-2.5 text-gray-600 hover:text-pink-600 transition"
                  >
                    Accessories
                  </Link>

                  <Link
                    to="/gifts"
                    onClick={() => setMenuOpen(false)}
                    className="px-5 py-2.5 text-gray-600 hover:text-pink-600 transition"
                  >
                    Gifts
                  </Link>

                </div>
              )}

              {/* About */}
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100 hover:text-black transition"
              >
                About
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100 hover:text-black transition"
              >
                Contact
              </Link>

              {/* Cart Mobile Link */}
              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition"
              >
                <div className="flex items-center gap-3">
                  <ShoppingCart size={20} />
                  <span>Cart</span>
                </div>

                {cartCount > 0 && (
                  <span className="min-w-6 h-6 px-1 flex items-center justify-center rounded-full bg-pink-600 text-white text-xs font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Login + Get Started */}
              <div className="border-t border-gray-100 mt-3 pt-3 flex flex-col gap-2">

                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-center rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-center rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition"
                >
                  Get Started
                </Link>

              </div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;