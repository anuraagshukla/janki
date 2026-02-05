import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <img
            src="/final logo.png"
            alt="Logo"
            className="h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 font-medium items-center">
            <Link to="/" className="hover:text-purple-700">Home</Link>
            <Link to="/products" className="hover:text-purple-700">Products</Link>

            {/* Cart */}
            <div className="relative">
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>

            <Link to="/login" className="hover:text-purple-700">Login</Link>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
            <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
          </div>
        )}
      </nav>

      {/* Spacer so content is not hidden under fixed navbar */}
      <div className="h-16" />
    </>
  );
}
