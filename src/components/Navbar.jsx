import { NavLink, Link } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
const [animateCart, setAnimateCart] = useState(false);

useEffect(() => {
  if (cartCount > 0) {
    setAnimateCart(true);
    const t = setTimeout(() => setAnimateCart(false), 400);
    return () => clearTimeout(t);
  }
}, [cartCount]);
const linkClass = ({ isActive }) =>
  `relative text-sm font-medium transition
   ${
     isActive
       ? "text-accent after:w-full after:opacity-100"
       : "text-gray-300 hover:text-white after:w-0 after:opacity-0"
   }
   after:content-['']
   after:absolute after:left-0 after:-bottom-1
   after:h-[2px]
   after:bg-accent
   after:rounded-full
   after:shadow-[0_0_8px_rgba(230,179,37,0.9)]
   after:transition-all after:duration-300`;

  return (
    <>
      <nav className="fixed top-4 inset-x-0 z-50 px-4">
        <div className="max-w-7xl mx-auto">

          {/* DARK GLASS CONTAINER */}
      <div className="
  relative
  h-14
  px-6
  flex items-center justify-between
  rounded-2xl
  bg-gradient-to-r
  from-[#7b7b7b]
  via-[#d6d6d6]
  to-[#7b7b7b]
  border border-black/10
  shadow-md
">

            {/* LEFT */}
            <div className="hidden md:flex items-center gap-6">
              <NavLink to="/" className={linkClass}>Home</NavLink>
              <NavLink to="/products" className={linkClass}>Products</NavLink>
              <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            </div>

            {/* CENTER BRAND */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold tracking-wider text-white"
            >
               <img
    src="/final logo.png"
    alt="Janki Enterprise"
    className="h-12 object-contain"
  />
            </Link>

            {/* RIGHT */}
            <div className="hidden md:flex items-center gap-4">
             <NavLink
  to="/cart"
  className={`relative text-white ${animateCart ? "animate-cart" : ""}`}
>
  🛒
  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-accent text-black text-xs px-1.5 rounded-full">
      {cartCount}
    </span>
  )}
</NavLink>

              <NavLink
                to="/login"
                className="
                  bg-accent text-black
                  px-4 py-1.5
                  rounded-full
                  text-sm font-semibold
                  hover:scale-105
                  transition
                "
              >
                Sign in / Up
              </NavLink>
            </div>

            {/* MOBILE */}
            <button
              className="md:hidden text-xl text-white"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="
              md:hidden
              mt-3
              bg-black/80
              backdrop-blur-xl
              border border-white/10
              rounded-xl
              shadow-lg
              p-4
              space-y-3
            ">
              <Link to="/" onClick={() => setOpen(false)} className="block text-white">Home</Link>
              <Link to="/products" onClick={() => setOpen(false)} className="block text-white">Products</Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="block text-white">Contact</Link>
              <Link to="/cart" onClick={() => setOpen(false)} className="block text-white">Cart</Link>
              <Link to="/login" onClick={() => setOpen(false)} className="block text-white">Login</Link>
            </div>
          )}
        </div>
      </nav>

      <div className="h-24" />
    </>
  );
}
