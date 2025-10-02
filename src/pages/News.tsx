import { useState } from "react";
import "../styles/News.css";

function News() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted) {
      setMessage("Devi accettare termini e condizioni");
      setMessageType("error");
      return;
    }
    // semplice validazione
    if (!username.trim() || !email.trim()) {
      setMessage("Compila username ed email");
      setMessageType("error");
      return;
    }
    setMessage(`Registrazione inviata per ${username} (${email})`);
    setMessageType("success");
  };

  return (
    <div className="news-page">
      <div className="news-card">
        <h2 className="news-title">News - Registrazione</h2>
        <form onSubmit={handleSubmit} className="news-form">
          <label className="field">
            <span>Username</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => {
                setAccepted(e.target.checked);
                if (e.target.checked) {
                  setMessage(null);
                  setMessageType(null);
                }
              }}
            />
            <span>Accetto termini e condizioni</span>
          </label>
          <button type="submit">Registrati</button>
        </form>
        {message && <p className={`message ${messageType ?? ""}`}>{message}</p>}
      </div>
    </div>
  );
}

export default News;