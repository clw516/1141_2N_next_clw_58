import Wrapper from '../../assets/wrappers/midterm/Shop_58';
import { Link } from 'react-router-dom';

const P1_StaticPage_58 = () => {
  return (
    <Wrapper>
      <div>
        {' '}
        <div className='collection-page'>
          <h1 className='flex items-center justify-center gap-1.5 mt-4'>
            P1_StaticPage_58,
          </h1>
          <h1 className='flex items-center justify-center gap-4 mt-4'>
            clw, 213410458
          </h1>

          <h1 className='title'>Mens</h1>
          <div className='items'>
            <div className='collection-item'>
              <img className='image' src='/images/midterm/mens/camo-vest.png' />
              <div className='collection-footer'>
                <span className='name'>Camo Down Vest</span>
                <span className='price'>325</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/mens/floral-shirt.png'
              />
              <div className='collection-footer'>
                <span className='name'>Floral T-shirt</span>
                <span className='price'>20</span>
              </div>
              <button className='custom-button'>Add to Card</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/mens/long-sleeve.png'
              />
              <div className='collection-footer'>
                <span className='name'>Black & White Longsleeve</span>
                <span className='price'>25</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/mens/pink-shirt.png'
              />
              <div className='collection-footer'>
                <span className='name'>Pink T-shirt </span>
                <span className='price'>25</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/mens/roll-up-jean-shirt.png'
              />
              <div className='collection-footer'>
                <span className='name'>Jean Long Sleeve</span>
                <span className='price'>40</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/mens/polka-dot-shirt.png'
              />
              <div className='collection-footer'>
                <span className='name'>Burgundy T-shirt</span>
                <span className='price'>25</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default P1_StaticPage_58;
