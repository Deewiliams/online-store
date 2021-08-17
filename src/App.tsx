import './App.css';
// import Product from './components/Product';
import Header from "./components/Header"
import SearchBar from './components/SearchBar';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      {/* <Product /> */}
      <ProductDetail />
    </div>
  );
}

export default App;
