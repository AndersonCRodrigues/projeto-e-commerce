import { useContext } from "react";
import { productSearch } from "../../context/actions";
import { ProductContext } from "../../context/context";

export const ButtonSearch = () => {
  const productContext = useContext(ProductContext);
  const {productState, productDispacth } = productContext;

  const handleSearch = () => {
    productState.product && productSearch(productDispacth);
  }

  return (
    <div>
      <button type="submit" onClick={handleSearch}>Search</button>
    </div>
  )
}