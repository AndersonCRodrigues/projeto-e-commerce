import { useContext } from "react";
import { productChange } from "../../context/actions";
import { ProductContext } from "../../context/context";

export const InputSearch = () => {
  const productContext = useContext(ProductContext);
  const {productState, productDispacth } = productContext;

  const handleChange = ({target}) => {
    productChange(productDispacth, target.value)
  }

  return (
    <input type="text" onChange={handleChange} name='product' value={productState.product}/>
  );
}