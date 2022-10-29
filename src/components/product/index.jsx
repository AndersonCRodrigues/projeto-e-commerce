import '../../style/product.css'

export const Product = ({id, title, thumbnail, price }) => {
  return (
    <div id={id} className='product'>
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
      <p>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}</p>
    </div>
  );
};