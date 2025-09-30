import React, { createContext, useContext, useMemo, useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type AddPayload = { id: string; name: string; price: number };

type CartContextValue = {
  items: CartItem[];
  addItem: (item: AddPayload, qty?: number) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  totalCount: number;
  totalPrice: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (item: AddPayload, qty = 1) => {
    setItems((prev) => {
      const totalQuantity = prev.reduce((acc, it) => acc + it.quantity, 0);
      const allowedQty = Math.min(qty, 999 - totalQuantity);
      if (allowedQty <= 0) {
        alert("Limite massimo di 999 articoli raggiunto nel carrello");
        return prev;
      }

      const i = prev.findIndex((x) => x.id === item.id);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], quantity: copy[i].quantity + allowedQty };
        return copy;
      }
      return [...prev, { ...item, quantity: allowedQty }];
    });
    setIsOpen(true);
  };

  const increment = (id: string) =>
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, quantity: it.quantity + 1 } : it))
    );

  const decrement = (id: string) =>
    setItems((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, quantity: it.quantity - 1 } : it))
        .filter((it) => it.quantity > 0)
    );

  const remove = (id: string) => setItems((prev) => prev.filter((it) => it.id !== id));
  const clear = () => setItems([]);

  const totalCount = useMemo(() => items.reduce((s, it) => s + it.quantity, 0), [items]);
  const totalPrice = useMemo(() => items.reduce((s, it) => s + it.price * it.quantity, 0), [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        increment,
        decrement,
        remove,
        clear,
        totalCount,
        totalPrice,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
};

export const formatPrice = (n: number) => `$${n.toFixed(2)}`;
