import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
export default function Cart() {
  const { cart, addToCart, decreaseQty, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

if (cart.length === 0) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <div className="text-6xl mb-4">🛒</div>

      <h2 className="text-2xl font-bold mb-2">
        Your cart is empty
      </h2>

      <p className="text-muted mb-6 max-w-sm">
        Looks like you haven’t added anything yet.
      </p>

      <a
        href="/products"
        className="bg-accent text-black px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
      >
        Browse Products
      </a>
    </div>
  );
}


  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-surface p-4 rounded-xl animate-slide-in"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="h-16" />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-primary font-bold">
                  ₹{item.price}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 border rounded-lg overflow-hidden">
  <button
    onClick={() => decreaseQty(item.id)}
    className="px-3 py-1 hover:bg-black/5"
  >
    −
  </button>

  <span className="px-3">{item.qty}</span>

  <button
    onClick={() => addToCart(item)}
    className="px-3 py-1 hover:bg-black/5 transition hover:scale-[1.02] active:scale-95"
  >
    +
  </button>
</div>


            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 transition hover:scale-[1.02] active:scale-95"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-surface p-6 rounded-xl flex justify-between items-center">
  <h2 className="text-xl font-bold">
    Total: ₹{total}
  </h2>

 <Link
  to="/checkout"
  className="bg-accent text-black px-6 py-3 rounded-xl font-semibold"
>
  Proceed to Checkout
</Link>
</div>
    </div>
  );
}
