import React from "react";
import "./style.css"

const Header = (props) => {
    return (
        <div>
            <header className="header">
                <nav className="header-menu">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact Us</a>

                </nav>

                
                    <div id="sicon">
                    <a href="https://facebook.com/Faysalmeazi"><i class="fa fa-facebook mr-3"></i></a>
                    <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"><i
                        class="fa fa-linkedin mr-3"></i></a>
                    <a href="https://www.instagram.com/faysal_meazi/?hl=en"><i class="fa fa-instagram mr-3"></i></a>
                    <a><i class="fa fa-google-plus mr-3"></i></a>
                    <a> <i class="fa fa-twitter"></i></a>
                    </div>
                  


            </header>
        </div>
    )
}

export default Header;




