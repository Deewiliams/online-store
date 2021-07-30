import './App.css';
import Product from './components/Product';
import Header from "./components/Header"
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Product />
      
    </div>
  );
}

export default App;
