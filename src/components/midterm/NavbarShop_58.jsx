import Wrapper from '../../assets/wrappers/midterm/Shop_58';
//import { Link } from 'react-router-dom'
import Link from 'next/link';

const NavbarShop_58 = () => {
  return (
    <Wrapper>
      <div className='header'>
        <Link href='/exams/midterm/p2_10' className='logo-container'>
          <img src='/images/midterm/assets/crown.svg' />
        </Link>
        <div className='options'>
          <Link href='/' className='option'>
            TKUdemo
          </Link>
          <Link href='./overview.html' className='option'>
            Shop
          </Link>
          <Link href='/shop' className='option'>
            Contact
          </Link>
          <Link href='/signin' className='option'>
            Sign In
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default NavbarShop_58;
