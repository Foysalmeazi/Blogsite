import React,{useState} from 'react';
import './style.css';
import {NavLink} from 'react-router-dom'
const Navbar = (props) => {

    const[search,setSearch]=useState(false);
    
    const submitSearch = (event) => {
        event.preventDefault();
        alert("Searched");
    };

    

    const openSearch=()=>
    {
        setSearch(true);
    };

    const searchClass = search?'searchInput active':'searchInput';

    return (
        <div>
            <div className="nab">
                <div className="navbarmenu">
                    <ul>
                        <li><NavLink to="/" >Home</NavLink ></li>
                        <li><NavLink to="/about-us" >About Us</NavLink ></li>
                        <li><NavLink to="/post">Post</NavLink ></li>
                        <li><NavLink to= '/contact-us'>Contact Us</NavLink ></li>
                    </ul>

                </div>

                <div className="search">
                    <form onSubmit={submitSearch}>
                        <input type="text" className={searchClass} placeholder="Search Here"></input>
                        <img onClick={openSearch} className="searchimg" src={require("../../Assets/Images/search.png")} alt="search"></img>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default Navbar;
