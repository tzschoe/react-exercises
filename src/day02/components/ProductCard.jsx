export default function ProductCard({ name, category, price, available, stock, featured }) {
  return (
    <article className={`product-card ${!available ? "product-not-available" : stock === 0 ? "product-sold-out" : ""}`}>
      
      {featured && <span className="badge badge-featured">Empfohlen</span>}
      
      <div className="product-info">
        <span className="category">{category}</span>
        <h3>{name}</h3>
        <p className="price">{price} €</p>
      </div>

      <div className="product-status">
        {!available ? (
          <p className="status-msg text-danger">Nicht verfügbar</p>
        ) : stock === 0 ? (
          <p className="status-msg text-danger">Ausverkauft</p>
        ) : stock <= 2 ? (
          <p className="status-msg text-warning">Nur noch wenige verfügbar</p>
        ) : (
          <p className="status-msg text-success">Auf Lager ({stock} Stk.)</p>
        )}
      </div>

      <button className="buy-btn" disabled={!available || stock === 0}>
        In den Warenkorb
      </button>
    </article>
  );
}
