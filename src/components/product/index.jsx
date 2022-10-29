import '../../style/product.css'

export const Product = ({id, title, thumbnail, price }) => {
  return (
    <div id={id} className='product'>
      <p>{title}</p>
      <img src={thumbnail} alt={title} />
      <p>{price}</p>
    </div>
  );
};