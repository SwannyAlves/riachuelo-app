import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsPage from "../pages/products/ProductsPage";
import ProductDetail from "../pages/productDetail/ProductDetail";
import NotFound from "../pages/notFound/NotFound";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductsPage />
        </Route>
        <Route exact path="/detalhes/:id">
          <ProductDetail />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
