import { useCart } from "../context/CartContext";

export default function QuickViewModal({ product, onClose }) {
  if (!product) return null;

  const { addToCart } = useCart();

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl"
        >
          ✕
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="h-48 mx-auto"
        />

        <h2 className="mt-4 text-2xl font-bold">
          {product.name}
        </h2>

        <p className="text-purple-700 font-bold text-xl mt-1">
          ₹{product.price}
        </p>

        <p className="mt-3 text-gray-600">
          Refreshing taste loved across India.
        </p>

        <button
          onClick={() => {
            addToCart(product);
            onClose();
          }}
          className="mt-6 w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
