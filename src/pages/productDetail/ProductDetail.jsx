/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/*  eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import { React, useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import MessageContext from "../../contexts/MessageContext";
import ProductsService from "../../services/ProductsService";
import LoadingContext from "../../contexts/LoadingContext";

import {
  ProductCard,
  Card,
  CardPriceStyle,
  CardSize,
  ButtomSizeStyle,
  SizeStyle,
  CardImg,
  CardDetailDescription,
  CardPrice,
  ButtomPriceStyleAdd,
  ButtomPriceStyle,
  Main,
  MainProduct,
  ProductRow,
  ProductList,
  CardInfo,
} from "./styles";

import BreadcrumbsDetail from "./breadcrumbsDetail/BreadcrumbsDetail";

function ProductCustomDetails({ image, name, price }) {
  const history = useHistory();
  const [selectedSize, setSelectedSize] = useState(0);
  return (
    <ProductCard>
      <Card>
        {image && <CardImg src={require(`./${image}`).default} alt="" />}
      </Card>
      <CardInfo>
        <Card>
          <CardDetailDescription>{name}</CardDetailDescription>
        </Card>
        <CardSize>
          <SizeStyle>Selecionar tamanho: </SizeStyle>
          <ButtomSizeStyle
            onClick={() => setSelectedSize(4)}
            isSelected={selectedSize === 4}
          >
            4
          </ButtomSizeStyle>
          <ButtomSizeStyle
            onClick={() => setSelectedSize(6)}
            isSelected={selectedSize === 6}
          >
            6
          </ButtomSizeStyle>
          <ButtomSizeStyle
            onClick={() => setSelectedSize(8)}
            isSelected={selectedSize === 8}
          >
            8
          </ButtomSizeStyle>
          <ButtomSizeStyle
            onClick={() => setSelectedSize(10)}
            isSelected={selectedSize === 10}
          >
            10
          </ButtomSizeStyle>
        </CardSize>
        <CardPriceStyle>
          <CardPrice>
            R$
            {price}
          </CardPrice>
          <ButtomPriceStyleAdd
            onClick={() => {
              alert("Produto adicionado à sacola");
              window.scrollTo(0, 0);
              history.push(`/`);
            }}
          >
            ADICIONAR À SACOLA
          </ButtomPriceStyleAdd>
          <ButtomPriceStyle
            onClick={() => {
              window.scrollTo(0, 0);
              history.push(`/`);
            }}
          >
            Cancelar
          </ButtomPriceStyle>
        </CardPriceStyle>
      </CardInfo>
    </ProductCard>
  );
}
function ProductDetail() {
  const { addRequest, removeRequest } = useContext(LoadingContext);
  const { setMessage } = useContext(MessageContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    console.log({ id });
  }, [id]);

  // eslint-disable-next-line
  useEffect(() => {
    addRequest();
    ProductsService.get()
      .then((r) => {
        console.log(r);
        const filtered = r.products.filter((item) => {
          return item.sku.toString() === id.toString();
        });
        console.log(filtered[0].image);
        setProduct(filtered[0]);
      })
      .catch(() => setMessage("Ocorreu um erro ao carregar os produtos..."))
      .finally(() => removeRequest());
  }, [id]);

  // eslint-disable-next-line

  return (
    <Main>
      <BreadcrumbsDetail name={product.name} />
      <MainProduct>
        <ProductCustomDetails
          image={product.image}
          name={product.name}
          price={product.price}
        />
        <ProductRow>
          <ProductList />
        </ProductRow>
      </MainProduct>
    </Main>
  );
}

export default ProductDetail;
