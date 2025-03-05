import logo from 'l'

function Nav() {
  return (
    <div className="Nav">
        <img src={logo} className="Nav-logo" alt="logo" />
        <div className='NavLinks'>
            <a>Home</a>
            <a>About</a>
            <a>Gallery</a>
        </div>
        <div className='NavSearch'>
            <input> search bar</input>
        </div>
      
    </div>
  );
}