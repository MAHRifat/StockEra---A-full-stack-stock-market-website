import React from 'react';
import './home/css/navbar.css'
function Navbar() {
    return ( 
        
        <div className="">
            <nav class="navbar navbar-expand-lg border-bottom" 
            style={{backgroundColor: "#FFF"}}
            >
                <div class="container-fluid">
                    <a href="navbar-brand ms-0 nav_a">
                    <img className='nav_logo' src="/media/images/nav_logo.png" alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item mx-3">
                                <a class="nav-link nav_a " aria-current="page" href="#">Signup</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link nav_a" href="#">About</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link nav_a" href="#">Products</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link nav_a" href="#">Pricing</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link nav_a mx-3" href="#">Support</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
     );
}

export default Navbar;