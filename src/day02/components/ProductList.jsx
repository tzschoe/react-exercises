
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="catalog-container">
      <header className="catalog-header">
        <h2>Unser Produktkatalog</h2>
        <p>Entdecke unsere Auswahl mit exklusiven Angeboten</p>
      </header>
      
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            name={product.name}
            category={product.category}
            price={product.price}
            available={product.available}
            stock={product.stock}
            featured={product.featured}
          />
        ))}
      </div>
    </div>
  );
}
