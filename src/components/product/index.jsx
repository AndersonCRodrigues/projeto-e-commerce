import '../../style/product.css'

export const Product = ({id, title, thumbnail, price, handleGetId }) => {
  return (
    <div id={id} className='product' onClick={handleGetId}>
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
      <p>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}</p>
    </div>
  );
};