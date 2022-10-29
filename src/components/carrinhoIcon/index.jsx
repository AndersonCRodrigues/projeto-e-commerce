import '../../style/carrinhoIcon.css';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/context";

export const CarrinhoIcon = () => {
  const productContext = useContext(ProductContext);
  const {productState} = productContext;
  const nItems = productState.items.length;

  const image = 'https://e7.pngegg.com/pngimages/856/675/png-clipart-shopping-cart-tablet4u-computer-icons-online-shopping-shopping-cart-angle-shopping-cart-software.png';

  return (
    <Link to='/carrinho' className='cartIcon'><img src={image} alt="carrinho" /><span>{nItems}</span></Link>
  );
}