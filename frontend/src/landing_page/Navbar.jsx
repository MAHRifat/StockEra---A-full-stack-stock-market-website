import React from 'react';
import './home/css/navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {
    return ( 
        
        <div className="">
            <nav class="navbar navbar-expand-lg border-bottom" 
            style={{backgroundColor: "#FFF"}}
            >
                <div class="container-fluid">
                    <Link className='navbar-brand nav_a ms-2' to={"/"}>
                    <img className='nav_logo' src="/media/images/nav_logo.png" alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item mx-3">
                                <Link class="nav-link nav_a " aria-current="page" to={"/signup"}>Signup</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link nav_a" to={"/about"}>About</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link nav_a" to={"/product"}>Products</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link nav_a" to={"/pricing"}>Pricing</Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link nav_a mx-3" to={'/support'}>Support</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
     );
}

export default Navbar;