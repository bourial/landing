import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../styles.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav'>
      <div>
      <NavLink to="/" className="logo"><img src="Frame.png" alt="frame" /></NavLink>
      </div>
      <nav className='Navbar-container' > {/* style={{ backgroundColor: "black" }} */}
        <button className='menu-icon' onClick={toggleMenu} hidden>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <div className={`menu-links ${isMenuOpen ? 'show' : 'hide'}`}>
          <NavLink className="navlink" to="/about">ABOUT
          <img src="/images/Group 3133.png" alt="" className='menu-logo'/>
          </NavLink>
          <NavLink className="navlink" to="/membership">MEMBERSHIP
          <img src="/images/Group 3133.png" alt="" className='menu-logo'/>
          </NavLink>
          <NavLink className="navlink" to="/news">NEWS & EVENTS
          <img src="/images/Group 3133.png" alt="" className='menu-logo'/>
          </NavLink>
          <NavLink className="navlink" to="/contact">CONTACT US
          <img src="/images/Group 3133.png" alt="" className='menu-logo'/>         
          </NavLink>

          <ul className="social-container">
            <li className='social-cont-li'>
              <NavLink className="navlink navlink-talk " to="/users">
                <img src="/images/SMS.png" className='talk-logo' alt="talk" />
                <span >LET'S TALK</span>
              </NavLink>
            </li>
            <li className='social-cont-li'>
              &nbsp;  
              {/* <img src='/images/Vector 61 (1).svg' style={{height:"30px", top:"20px"}}/> */}
              <NavLink className="navlink" to="/account">
                <img src="/images/Group 37648.png" alt="account" className='account-logo' />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
