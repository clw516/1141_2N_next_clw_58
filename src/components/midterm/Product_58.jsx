import Wrapper from '../../assets/wrappers/midterm/Shop_58';

const Product_58 = ({
  pId,
  name,
  category,
  price,
  img_url,
  remote_img_url,
}) => {
  return (
    <div className='collection-item'>
      <img className='image' src={img_url} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <button className='custom-button'>Add to Cart</button>
    </div>
  );
};
export default Product_58;
