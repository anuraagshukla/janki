import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      
      {/* FORM */}
      <div>
        <h1 className="text-3xl font-bold mb-6">
          Checkout
        </h1>

        <form className="space-y-4">
          <input
            className="w-full border rounded-lg px-4 py-2 bg-surface"
            placeholder="Full Name"
          />
          <input
            className="w-full border rounded-lg px-4 py-2 bg-surface"
            placeholder="Phone Number"
          />
          <input
            className="w-full border rounded-lg px-4 py-2 bg-surface"
            placeholder="Address"
          />
          <textarea
            className="w-full border rounded-lg px-4 py-2 bg-surface"
            rows="4"
            placeholder="Delivery instructions (optional)"
          />

          <button
            type="button"
            onClick={() => {
              console.log("Order placed", cart);
              alert("Order placed (demo)");
            }}
            className="w-full bg-accent text-black py-3 rounded-xl font-semibold transition hover:scale-[1.02] active:scale-95"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* SUMMARY */}
      <div className="bg-surface p-6 rounded-xl h-fit">
        <h2 className="text-xl font-bold mb-4">
          Order Summary
        </h2>

        <div className="space-y-3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-sm"
            >
              <span>
                {item.name} × {item.qty}
              </span>
              <span>
                ₹{item.price * item.qty}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t mt-4 pt-4 font-bold">
          Total: ₹{total}
        </div>
      </div>
    </div>
  );
}
