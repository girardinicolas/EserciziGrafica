import React, { createContext, useContext, useMemo, useState } from "react";

export type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
};

type ProductsContextValue = {
  products: Product[];
  addProduct: (p: Omit<Product, "id">) => void;
};

const ProductsContext = createContext<ProductsContextValue | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (p: Omit<Product, "id">) => {
    const id = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    setProducts((prev) => [...prev, { id, ...p }]);
  };

  const value = useMemo(() => ({ products, addProduct }), [products]);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

export function useProducts(): ProductsContextValue {
  const ctx = useContext(ProductsContext);
  if (!ctx) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return ctx;
}



