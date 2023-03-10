import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
//import axios from 'axios';
function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/api/products');
      const result = await response.json();
      setProducts(result);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Bid</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
