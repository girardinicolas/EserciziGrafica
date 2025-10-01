import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Merch from "../pages/Merch";
import Profile from "../pages/Profile";
import Product from "./Product";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/merch" element={<Merch />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default AppRouter;