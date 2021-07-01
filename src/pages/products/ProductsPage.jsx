/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  ProductCard,
  Card,
  CardImg,
  CardDescription,
  CardPrice,
  Main,
  MainProduct,
  ProductRow,
  ProductList,
} from "./styles";
import FilterContext from "../../contexts/FilterContext";
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";
import ProductsService from "../../services/ProductsService";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Filters from "./components/filters/Filters";

function Product({ image, name, price, id }) {
  const history = useHistory();
  return (
    <ProductCard
      onClick={() => {
        window.scrollTo(0, 0);
        history.push(`/detalhes/${id}`);
      }}
    >
      <Card>
        <CardImg src={image} alt="" />
        <CardDescription>{name}</CardDescription>
        <CardPrice>
          R$
          {price}
        </CardPrice>
      </Card>
    </ProductCard>
  );
}
function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const { filter } = useContext(FilterContext);
  const { addRequest, removeRequest } = useContext(LoadingContext);
  const { setMessage } = useContext(MessageContext);
  // eslint-disable-next-line
  useEffect(() => loadProducts(), []);
  function loadProducts() {
    addRequest();
    ProductsService.get()
      .then((r) => {
        setProducts(r.products);
        setFilters(r.filters);
      })
      .catch(() => setMessage("Ocorreu um erro ao carregar os produtos..."))
      .finally(() => removeRequest());
  }

  return (
    <Main>
      <Breadcrumbs />
      <Filters filters={filters} />
      <MainProduct>
        <ProductRow>
          <ProductList>
            {products
              .filter((p) =>
                filter
                  ? p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1
                  : true
              )
              .map((p) => (
                <Product
                  key={p.sku}
                  id={p.sku}
                  image={p.image}
                  name={p.name}
                  price={p.price}
                />
              ))}
          </ProductList>
        </ProductRow>
        <ProductRow>
          <ProductList />
        </ProductRow>
      </MainProduct>
    </Main>
  );
}

export default ProductsPage;
