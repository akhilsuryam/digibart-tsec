// import logo from './logo.svg';
// import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">digi-bart</a>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <main>
        <h1>Featured products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div classname="product" key={product.slug}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
