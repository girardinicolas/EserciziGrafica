import { useState } from "react";
import { useProducts } from "../components/ProductsContext";
import "../styles/Products.css";

function Products() {
  const { products, addProduct } = useProducts();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validazione semplice
    if (!name.trim()) {
      setMessageType("error");
      setMessage("Inserisci il nome del prodotto");
      return;
    }
    const parsed = Number(price);
    if (!price.trim() || Number.isNaN(parsed) || parsed <= 0) {
      setMessageType("error");
      setMessage("Inserisci un prezzo valido (> 0)");
      return;
    }

    // Salvataggio nel context prodotti
    addProduct({ name: name.trim(), price: parsed, description: description.trim() || undefined });
    setMessageType("success");
    setMessage(`Prodotto creato: ${name} - €${parsed.toFixed(2)}`);
    // reset campi
    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <div className="products-page">
      <div className="products-card">
        <h2 className="products-title">Products</h2>
        <p className="products-subtitle">Crea un nuovo prodotto di merchandising.</p>
        <form onSubmit={handleSubmit} className="products-form">
          <label className="field">
            <span>Nome prodotto</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label className="field">
            <span>Prezzo (€)</span>
            <input
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label className="field">
            <span>Descrizione</span>
            <textarea rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <button type="submit">Crea prodotto</button>
        </form>
        {message && <p className={`message ${messageType ?? ""}`}>{message}</p>}
        {products.length > 0 && (
          <div className="products-list">
            <h3>Elenco prodotti</h3>
            <ul>
              {products.map((p) => (
                <li key={p.id}>
                  {p.name} - €{p.price.toFixed(2)}{p.description ? ` — ${p.description}` : ""}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;