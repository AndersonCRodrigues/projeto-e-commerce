import { useContext } from "react";
import { ProductContext } from "../../context/context";

export const Cart = () => {
  const productContext = useContext(ProductContext);
  const {productState} = productContext;
  const item = productState.items.length;
  const total = productState.items.reduce((act, curr) => (act + curr.price),0)

  return (
    <aside className='cart'>
      <h3>aqui fica o carrinho de compras</h3>
      <h4>Carrinho possui {item} item(s)!</h4>
      <h4>Total do Carrinho {total}</h4>
      {productState.items.map((item, index) =>
        <div key={index}>
          <img src={item.thumbnail} alt={item.title} />
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      )}
    </aside>
  )
}