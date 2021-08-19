import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./components/Product";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductDetail from "./components/ProductDetail";
import SignUp from "./components/SignUp"

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Product />
          </Route>
          <Route path="/product-details/:productId" exact>
            <ProductDetail />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
