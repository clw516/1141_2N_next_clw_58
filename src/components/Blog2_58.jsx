import { FaGlobe } from 'react-icons/fa6';
import { FaMugSaucer } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Blog2_58 = ({ id, img, category, descrip, title, removeItem }) => {
  return (
    <article key={id} className='blog'>
      <img src={img} alt='Coffee photo' className='img blog-img' />
      <div className='blog-content'>
        <span className='flex'>
          {category}
          {category === 'lifestyle' ? (
            <FaMugSaucer className='!ml-1' color='blue' />
          ) : (
            <FaGlobe className='!ml-1' color='blue' />
          )}
        </span>
        <h3>{title}</h3>
        <p>{descrip}</p>
        <div className='flex justify-between items-center'>
          <Link to='#'>read more</Link>
          <button
            type='button'
            className='text-red-700 bg-red-100 capitalize !px-;!py-1 hover:bg-red-300 rounded'
            onClick={() => removeItem(id)}
          >
            delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default Blog2_58;
