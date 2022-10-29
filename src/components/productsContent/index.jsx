import { useEffect } from "react";
import { useContext } from "react";
import {  productChange, productLoad } from "../../context/actions";
import { ProductContext } from "../../context/context";
import { Product } from "../product";
import '../../style/productContent.css';
import { useState } from "react";

export const ProductsContent = () => {
  const productContext = useContext(ProductContext);
  const {productState, productDispacth } = productContext;
  const produtos = productState.products;

  const [index, setIndex] = useState({ inicio: 0, fim: 12});
  const [total, setTotal] = useState(0);

  useEffect((handleSeach) => {
    productState.busca && handleSeach();
    setTotal((t) => t = produtos.length % 12 === 0
    ? parseInt(produtos.length / 12)
    : parseInt(produtos.length / 12) + 1);
  },[productState.busca, produtos.length]);

  const handleSeach = () => productLoad(productDispacth, productState.product);

  const handleChange = ({target}) => {
    productChange(productDispacth, target.value)
  }

  const handleIndex = ({target}) => {
    const { id } = target;
    setIndex({ inicio: id, fim: (Number(id) + 12)})
  }

  const nButtons = Array(parseInt(total)).fill('');
  const arrRender = produtos.slice(index.inicio, index.fim);
  console.log(index);

  return (
    <section >
      <p>Produtos</p>
      <input type="text" onChange={handleChange} name='product' value={productState.product}/>
      <button type="submit" onClick={handleSeach}>Search</button>
      <div className="productContent">
        {productState.loading
        ? <span>Carregando</span>
        : arrRender.map((product) => <Product
        key={product.id}
        title={product.title}
        thumbnail={product.thumbnail}
        price={product.price}
        />)}
      </div>
      <ul className="indexBtn">
        {nButtons.map((_,index) => <li key={index}><button
          id={index * 12}
          onClick={handleIndex}>
            {index + 1}
          </button></li>)}
      </ul>
    </section>
  );
}