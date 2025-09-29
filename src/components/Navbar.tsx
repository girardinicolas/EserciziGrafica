import React from "react";
import "./Navbar.css";

interface NavbarProps {
  title: string;
  cartCount: number;
  onCartClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ title, cartCount, onCartClick }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">{title}</h1>
      <button className="cart-button" onClick={onCartClick} aria-label="Carrello">
        <span className="cart-icon">🛒</span>
        <span className="cart-text">Your Cart</span>
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </button>
    </nav>
  );
};

export default Navbar;
