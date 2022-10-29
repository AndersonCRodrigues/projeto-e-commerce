import '../../style/productContent.css';

import { useEffect } from "react";
import { useContext } from "react";
import { itemLoad, productLoad } from "../../context/actions";
import { ProductContext } from "../../context/context";
import { Product } from "../product";
import { useState } from "react";
import { InputSearch } from "../inputSearch";
import { ButtonSearch } from '../buttonSearch';
import { ButtonIndex } from '../buttonsIndex';

export const ProductsContent = () => {
  const productContext = useContext(ProductContext);
  const {productState, productDispacth } = productContext;
  const produtos = productState.products;

  const [index, setIndex] = useState({ inicio: 0, fim: 12});
  const [total, setTotal] = useState(0);
  const [seachBy, setSeachBy] = useState('')

  useEffect((handleSeach) => {
    productState.busca && handleSeach();
    setTotal((t) => t = produtos.length % 12 === 0
    ? parseInt(produtos.length / 12)
    : parseInt(produtos.length / 12) + 1);
  },[productState.busca, produtos.length]);

  const handleSeach = () => {
    productLoad(productDispacth, productState.product);
    setSeachBy(productState.product);
  }

  const handleIndex = ({target}) => {
    const { id } = target;
    setIndex({ inicio: id, fim: (Number(id) + 12)})
  }

  const handleGetId = ({target}) => {
    itemLoad(productDispacth, target.parentNode.id);
  }

  const nButtons = Array(parseInt(total)).fill('');
  const arrRender = produtos.slice(index.inicio, index.fim);

  return (
    <section >
      <InputSearch />
      <ButtonSearch handleSeach={handleSeach} />
      {seachBy && <h3>Você pesquisou por "{seachBy}"</h3>}
      <div className="productContent">
        {productState.loading
        ? <span>Carregando</span>
        : arrRender.map((product) => <Product
        key={product.id}
        id={product.id}
        title={product.title}
        thumbnail={product.thumbnail}
        price={product.price}
        handleGetId={ handleGetId }
        />)}
      </div>
      <ul className="indexBtn">
        {nButtons.map((_,index) =>
          <li key={index}>
            <ButtonIndex
              index={index}
              handleIndex={handleIndex}/>
          </li>)}
      </ul>
    </section>
  );
}