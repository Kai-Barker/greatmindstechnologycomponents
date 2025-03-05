import './Nav.css';
import logo from './images/logo.jpg'


function Nav() {
  return (
    <div className="Nav">
      <div className='Nav-logo'>
      <img src={logo}></img>
      </div>
     
    
      <div className='NavLinks'>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Gallery</a>
      </div>
      <div className='NavSearch'>
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
}

export default Nav;
