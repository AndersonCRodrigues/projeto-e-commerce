import { useEffect } from "react";
import { useContext } from "react";
import { productLoad } from "../../context/actions";
import { ProductContext } from "../../context/context";
import { Product } from "../product";
import '../../style/productContent.css';

export const ProductsContent = () => {
  const productContext = useContext(ProductContext);
  const {productState, productDispacth } = productContext;

  useEffect(() => {
    productLoad(productDispacth);
  },[productDispacth]);

  console.log(productState.results);

  return (
    <div className="productContent">
      <p>Produtos</p>
      {productState.loading
      ? <span>Carregando</span>
      : productState.products.map((product) => <Product
      key={product.id}
      title={product.title}
      thumbnail={product.thumbnail}
      price={product.price}
      />)}
    </div>
  );
}