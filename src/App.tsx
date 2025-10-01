// eslint-disable-next-line @typescript-eslint/no-unused-vars
 
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Hero from "./components/Hero";
import { CartProvider, useCart } from "./components/CartContext";
// import Meals from "./components/Meals";
import CartModal from "./components/CartModal";
import AppRouter from "./components/AppRouter";
import { UserProvider } from "./components/UserContext";
 

function AppContent() {
  const { openCart, totalCount } = useCart();

  return (
    <>
      <Hero />
      <Card
        title="Delicious Food, Delivered To You"
        description1="Choose your favourite meal from our broad selection..."
        description2="All our meals are cooked with high-quality ingredients..."
      />
      <Navbar
        title="React Meal"
        cartCount={totalCount}
        onCartClick={openCart}
      />

      <AppRouter />
      <CartModal />
    </>
  );
}

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
