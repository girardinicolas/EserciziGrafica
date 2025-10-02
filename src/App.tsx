// eslint-disable-next-line @typescript-eslint/no-unused-vars
 
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
 
import Hero from "./components/Hero";
import { CartProvider, useCart } from "./components/CartContext";
import CartModal from "./components/CartModal";
import AppRouter from "./components/AppRouter";
import { UserProvider } from "./components/UserContext";
import { ProductsProvider } from "./components/ProductsContext";
 

function AppContent() {
  const { openCart, totalCount } = useCart();

  return (
    <>
      <Hero />
      
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
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
