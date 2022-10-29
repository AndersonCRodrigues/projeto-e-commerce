import '../../style/productContent.css';

import { useEffect, useRef } from "react";
import { useContext } from "react";
import { Product } from "../product";
import { useState } from "react";
import { InputSearch } from "../inputSearch";
import { ButtonSearch } from '../buttonSearch';
import { ButtonIndex } from '../buttonsIndex';
import { ProductContext } from '../../context/context';
import { itemLoad, productLoad, productSearch } from '../../context/actions';

export const ProductsContent = () => {
  const isMounted = useRef(true);
  const productContext = useContext(ProductContext);
  const {productState, productDispacth } = productContext;
  const produtos = productState.products;

  const [index, setIndex] = useState({ inicio: 0, fim: 12});
  const [total, setTotal] = useState(0);
  const [searchBy, setSearchBy] = useState('')

  useEffect(() => {
    productState.busca && productLoad(productDispacth, productState.product)
      .then(dispatch => isMounted && dispatch());

    return () => isMounted.current = false;
  },[productState.busca, productDispacth, productState.product]);

  useEffect(() => {
    setTotal((t) => t = produtos.length % 12 === 0
    ? parseInt(produtos.length / 12)
    : parseInt(produtos.length / 12) + 1);
  }, [produtos.length])

  const handleSearch = () => {
    productState.product && productSearch(productDispacth);
    setSearchBy(productState.product);
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
      <ButtonSearch handleSearch={handleSearch} />
      {searchBy && <h3>Você pesquisou por "{searchBy}"</h3>}
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