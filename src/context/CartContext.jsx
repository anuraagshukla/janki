import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

//   ---add item section---
const addToCart = (product) => {
  setCart((prev) => {
    const found = prev.find((p) => p.id === product.id);
    toast.success(`${product.name} added to cart`);
    if (found) {
      return prev.map((p) =>
        p.id === product.id ? { ...p, qty: p.qty + 1 } : p
      );
    }
    return [...prev, { ...product, qty: 1 }];
  });
};

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, qty: p.qty - 1 } : p
        )
        .filter((p) => p.qty > 0)
    );
  };

const removeFromCart = (id) => {
  setCart((prev) => {
    const item = prev.find((p) => p.id === id);
    if (item) toast.info(`${item.name} removed`);
    return prev.filter((p) => p.id !== id);
  });
};

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseQty, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
