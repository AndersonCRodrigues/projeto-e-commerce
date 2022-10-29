import { ProductContext } from "./context"
import Props from 'prop-types';
import { useReducer } from "react";
import { reducer } from "./reducer";
import { data } from "./data";

export const ProductProvider = ({children}) => {
  const [productState, productDispacth] = useReducer(reducer, data);

  return (
    <ProductContext.Provider value={{productState, productDispacth}}>
      {children}
    </ProductContext.Provider>);
};

ProductProvider.propTypes = {
  children: Props.node.isRequired,
};