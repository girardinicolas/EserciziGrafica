import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Product.css"; // Importa il CSS con le classi specifiche

interface ProductData {
  title: string;
  description: string;
}

function Product() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Errore nel caricare il prodotto");
        return res.text(); // leggere come testo per evitare errore JSON vuoto
      })
      .then(text => {
        if (!text) throw new Error("Risposta vuota dal server");
        return JSON.parse(text);
      })
      .then(data => {
        setProduct({ title: data.title, description: data.description });
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="product-container">Caricamento in corso...</p>;
  if (error) return <p className="product-container">Errore: {error}</p>;
  if (!product) return <p className="product-container">Prodotto non trovato</p>;

  return (
    <div className="product-container">
      <h1 className="product-title">{product.title}</h1>
      <p className="product-description">{product.description}</p>
    </div>
  );
}

export default Product;
