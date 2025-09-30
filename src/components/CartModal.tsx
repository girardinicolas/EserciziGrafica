import React from "react";
import { useCart, formatPrice } from "./CartContext";
import "./CartModal.css";

const CartModal: React.FC = () => {
  const {
    items,
    increment,
    decrement,
    remove,
    totalPrice,
    isOpen,
    closeCart,
    clear,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="cart__backdrop" onClick={closeCart} role="presentation">
      <div className="cart__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="cart__title">Your Cart</h3>

        {items.length === 0 ? (
          <p className="cart__empty">Your cart is empty.</p>
        ) : (
          <ul className="cart__list">
            {items.map((it) => (
              <li key={it.id} className="cart__row">
                <div className="cart__info">
                  <strong>{it.name}</strong>
                  <span className="cart__price">{formatPrice(it.price)}</span>
                </div>
                <div className="cart__qty">
                  <button onClick={() => decrement(it.id)} aria-label="Decrease">
                    −
                  </button>
                  <span>{it.quantity}</span>
                  <button onClick={() => increment(it.id)} aria-label="Increase">
                    +
                  </button>
                </div>
                <button className="cart__remove" onClick={() => remove(it.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="cart__footer">
          <div className="cart__total">
            Total: <strong>{formatPrice(totalPrice)}</strong>
          </div>
          <div className="cart__actions">
            <button className="cart__btn cart__btn--ghost" onClick={clear}>
              Clear
            </button>
            <button className="cart__btn cart__btn--ghost" onClick={closeCart}>
              Close
            </button>
            <button className="cart__btn cart__btn--primary" disabled={items.length === 0}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
