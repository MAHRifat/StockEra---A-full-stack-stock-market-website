import React from 'react';
import './css/Hero.css';
import { Link } from 'react-router-dom';
 
function Hero() {
    return ( 
        <div className='Container p-2'>
            <div className='row text-center col-sm-12'>               
                <img src="/media/images/homeHero.png" alt="Hero Image" className='mb-5 img'/>               
                <p id='hero_header' className='mt-5'>Invest in everything</p>
                <p id='hero_p' className=''>
                    Online platform to invest in stocks, derivatives, mutual 
                    funds, ETFs, bonds, and more.
                </p>
                <Link className='text-center uni-link' style={{width: "15rem"}} to={"/signup"}>
                <button className='mt-3 p-2 btn btn-primary fs-5 mb-5' id='hero_btn'>Sign up for free</button>
                </Link>
            </div>
        </div>
     );
}

export default Hero;