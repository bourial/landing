import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../../sideBar.css';
export default function Sidebar (){

    return (
        <div className="sidebar">
            <Link to = "/" className= "sidebar-item-heroIcon" >
                <img src="/images/Group 38263.png" className="sidebar-heroIcon"/>
            </Link>
            <Link to = "/" className= "sidebar-item">
                <img src="/images/Home.svg" className="sidebar-icon"/>
            </Link>
            <Link to = "/" className= "sidebar-item">
                <img src="/images/Category.svg" className="sidebar-icon"/>
            </Link>
            <Link to = "/" className= "sidebar-item">
                <img src="/images/Profile.svg" className="sidebar-icon"/>
            </Link>
            <Link to = "/" className= "sidebar-item">
                <img src="/images/Setting.svg" className="sidebar-icon"/>
            </Link>
            <Link to="/" className="sidebar-item-logout">
                <img src="/images/Logout.svg" className="sidebar-icon"/>
            </Link>
        </div>
    )

};