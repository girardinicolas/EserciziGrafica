import React from "react";
import { NavLink } from "react-router-dom";
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
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/merch" className={({ isActive }) => (isActive ? "active" : "")}>
          Merch
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
          Profile
        </NavLink>
      </div>
      <button className="cart-button" onClick={onCartClick} aria-label="Carrello">
        <span className="cart-icon">🛒</span>
        <span className="cart-text">Your Cart</span>
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </button>
    </nav>
  );
};

export default Navbar;
