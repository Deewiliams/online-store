import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Header from "./components/Header";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Product />
          </Route>
          <Route path="/product-details/:productId" exact>
            <ProductDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
