import React from 'react';
import './home/css/footer.css';

function Footer() {
    return ( 
        <div className="footer border-top p-3 text-center">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <a href="/"><img className='footer_logo mb-2' src="/media/images/footer_logo.png" alt="" /></a>
                    <p className='text-muted para-1 pt-3 mb-4'>
                    © 2010 - 2024, Zerodha Broking Ltd. <br />
                    All rights reserved.
                    </p>
                    <p className='social_logo d-inline-block '>
                    <a href=""><i class="fa fa-facebook-square " aria-hidden="true"></i></a> &nbsp;
                    </p>
                    <p className='social_logo d-inline-block px-4'>          
                    <a href=""><i class="fa fa-instagram " aria-hidden="true"></i></a> &nbsp;    
                    </p>
                    <p className='social_logo d-inline-block'>
                    <a href=""><i class="fa fa-linkedin-square " aria-hidden="true"></i></a> &nbsp;
                    </p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 mt-1">
                    <h1 className='fs-4'>Company</h1>
                    <p className='foot'>
                        <a href="">About</a>
                        <a href="">Products</a>
                        <a href="">Pricing</a>
                        <a href="">Referral programme</a>
                        <a href="">Careers</a>
                        <a href="">StockEra.tech</a>
                        <a href="">Press & media</a>
                        <a href="">StockEra Cares (CSR)</a>
                    </p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 mt-1">
                    <h1 className='fs-4'>Support</h1>
                    <p className='foot'>
                        <a href="">Contact us</a>
                        <a href="">Support portal</a>
                        <a href="">Z-Connect blog</a>
                        <a href="">List of charges</a>
                        <a href="">Downloads & resources</a>
                        <a href="">Videos</a>
                        <a href="">Market overview</a>
                        <a href="">How to file a complaint?</a>
                        <a href="">Status of your complaints</a>
                    </p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 mt-1">
                    <h1 className='fs-4'>Account</h1>
                    <p className='foot'>
                        <a href="">Open an account</a>
                        <a href="">Fund transfer</a>
                    </p>
                </div>
            </div>
            <div className="row border-top">
            <p className='last_foot mt-4'>
                        <a href="">NSE</a>
                        <a href="">BSE </a>
                        <a href="">MCX</a>
                        <a href="">Terms & conditions</a>
                        <a href="">Policies & procudures</a>
                        <a href="">Privacy policy</a>
                        <a href="">Disclosure</a>
                        <a href="">For investor's attention</a>
                        <a href="">Investor charter</a>
                    </p>
            </div>
        </div>
     );
}

export default Footer;