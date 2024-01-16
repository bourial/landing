import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Pages/Sidebar";
import UserInfo from "./Pages/UserInfo";
import SearchMethods from "./Pages/SearchMethods";

const Users: React.FC = () =>{

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            
            <div className="userInfo-Container">
              <div className= "userInfo-sidebar">
                <Sidebar/>
              </div>

              <div className="userInfo-section">
                <nav className='Navbar-container2' style={{ backgroundColor: "white" }}>
                  {/* <NavLink to="/" className="logo"><img src="Frame.png" alt="frame" /></NavLink> */}
                  <button className='menu-icon' onClick={toggleMenu} hidden>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </button>
          
                  {/* Use a single container for both menu links and social links */}
                  <div className={`menu-links2 ${isMenuOpen ? 'show' : 'hide'}`}>
                    <NavLink className="navlink2" to="/about">ABOUT
                    <img src="/images/Arrow - Down 2.svg" alt="" className='menu-logo2'/>
                    </NavLink>
                    <NavLink className="navlink2" to="/membership">MEMBERSHIP
                    <img src="/images/Arrow - Down 2.svg" alt="" className='menu-logo2'/>
                    </NavLink>
                    <NavLink className="navlink2" to="/news">NEWS & EVENTS
                    <img src="/images/Arrow - Down 2.svg" alt="" className='menu-logo2'/>
                    </NavLink>
                    <NavLink className="navlink2" to="/contact">CONTACT US
                    <img src="/images/Arrow - Down 2.svg" alt="" className='menu-logo2'/>         
                    </NavLink>

                    <NavLink  className=" navlink2 " to="/account">
                        USER NAME
                        <img src="/images/Arrow - Down 2.svg" alt="" className='menu-logo2'/> &nbsp;  
                      <img src="/images/Profile.png" alt="account" className='account-logo' />
                    </NavLink>
                  </div>
                </nav>

                <hr className="hr2"></hr>
                <br></br>

                <div  className="search-container">
                  <div className="filterIConContainer"><img className="filter-iCon" src="/images/Filter.svg"/></div>
                  <input placeholder="Search by keyword" className="searchbar" />
                  <button className="search-btn">
                    <img src="/images/Search.svg" className="Search-icon"/>
                    SEARCH
                  </button>
                </div><br></br>

                  <SearchMethods/>

                <div className="userInfo-table">
                  <div className="first-cell-wrapper">
                    <UserInfo />
                  </div>
                </div>
              </div>
            </div>
            <br></br>
        </div>
  );
};

export default Users;