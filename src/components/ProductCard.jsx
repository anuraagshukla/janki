import { useState } from "react";
import QuickViewModal from "./QuickViewModal";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);
  const { addToCart } = useCart();

  return (
    <>
      <div className="group bg-surface rounded-xl shadow hover:shadow-xl transition p-4 relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-40 object-contain"
        />

   
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-xl">
          <button
            onClick={() => setOpen(true)}
            className="bg-accent text-black hover:opacity-90 px-4 py-2 rounded-lg font-semibold transition hover:scale-[1.02] active:scale-95"
          >
            Quick View
          </button>
        </div>

        <h3 className="mt-4 font-semibold">{product.name}</h3>
        <p className="text-muted-700 font-bold">₹{product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full bg-accent text-black hover:opacity-90 py-2 rounded-lg hover:bg-purple-800 transition hover:scale-[1.02] active:scale-95"
        >
          Add to Cart
        </button>
      </div>

      {open && (
        <QuickViewModal
          product={product}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
