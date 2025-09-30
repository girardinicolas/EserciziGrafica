import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Merch from "./pages/Merch";
import Profile from "./pages/Profile";
import Card from "./components/Card";
import Hero from "./components/Hero";
import { CartProvider, useCart } from "./components/CartContext";
import Meals from "./components/Meals";
import CartModal from "./components/CartModal";

function AppContent() {
  const { isOpen, openCart, totalCount } = useCart();

  return (
    <>
      <Hero />
      <Card
        title="Delicious Food, Delivered To You"
        description1="Choose your favourite meal from our broad selection..."
        description2="All our meals are cooked with high-quality ingredients..."
      />
      <Navbar title="React Meal" cartCount={totalCount} onCartClick={openCart} />
      <Meals />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <CartModal />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
