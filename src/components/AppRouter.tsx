import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Merch from "../pages/Merch";
import Product from "./Product";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import News from "../pages/News";
import Products from "../pages/Products";


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/merch" element={<Merch />} />
      <Route path="/news" element={<News />} />
      <Route path="/products" element={<Products />} />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default AppRouter;
