import { useEffect } from "react";
import { useContext } from "react";
import {  productChange, productLoad } from "../../context/actions";
import { ProductContext } from "../../context/context";
import { Product } from "../product";
import '../../style/productContent.css';

export const ProductsContent = () => {
  const productContext = useContext(ProductContext);
  const {productState, productDispacth } = productContext;

  useEffect(() => {
    productState.busca && handleSeach();
  });

  const handleSeach = () => productLoad(productDispacth, productState.product);

  const handleChange = ({target}) => {
    productChange(productDispacth, target.value)
  }

  return (
    <section >
      <p>Produtos</p>
      <input type="text" onChange={handleChange} name='product' value={productState.product}/>
      <button onClick={handleSeach}>Search</button>
      <div className="productContent">
        {productState.loading
        ? <span>Carregando</span>
        : productState.products.map((product) => <Product
        key={product.id}
        title={product.title}
        thumbnail={product.thumbnail}
        price={product.price}
        />)}
      </div>
    </section>
  );
}