import { Link } from 'react-router-dom'
import './navbar.scss';

const Navbar = () => {
  return (
    <div className='wrapper'>
      <header>
        <div className='logo'>
          <img src="/src/assets/lovoo-logo-new-no-type.svg" alt="" />
          <h1>Kiryl's Shop</h1>
        </div>
        <nav>
          <ul>
            <li><Link to='/'>Shop</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar;