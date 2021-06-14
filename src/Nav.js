import {Link} from 'react-router-dom'

function Nav() {
  const navStyle = {
    color: 'white',
    justifyContent: 'center',
    //margin: '0 -500px 10px 10px'
  }

  return (
    <div>
      <nav>
        <h3>Space X Info</h3>
        <ul className='nav-links'>
          <Link to='/about' style={navStyle}>
            <li>About</li>
          </Link>
          <Link to='/Ship' style={navStyle}>
            <li>Ships</li>
          </Link>
          <Link to='/missions' style={navStyle}>
            <li>Missions</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
