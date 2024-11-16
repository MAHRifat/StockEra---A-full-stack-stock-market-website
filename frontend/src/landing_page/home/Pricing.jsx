import React from 'react';

import './css/Pricing.css';

function Pricing() {
    return ( 
        <div className="container mb-5 p-1">
            <div className="row ">
                <div className="col-lg-5 col-md-12 col-sm-12 mb-4">
                    <h1 className='fs-2'>Unbeatable pricing</h1>
                    <p>
                    We pioneered the concept of discount broking and price
                     transparency in India. Flat fees and no hidden charges.
                    </p>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12">
                    <div className="row">

                        <div className="col-4 price ">
                            <div className="row">
                                <div className="col-4">
                                    <img className='price_img' src="/media/images/pricing1.svg" alt="" />
                                </div>
                                <div className="col-8">
                                    <p className='price_para pt-4 ps-3'>
                                        Free account
                                        opening
                                    </p>
                                </div>
                            </div>   
                        </div>

                        <div className="col-4 price"> 
                            <div className="row">
                                <div className="col-4">
                                    <img className='price_img' src="/media/images/pricing1.svg" alt="" />
                                </div>
                                <div className="col-8">
                                    <p className='price_para pt-4 ps-3'>
                                        Free equity delivery
                                        and direct mutual funds
                                    </p>
                                </div>
                            </div>   
                            
                            
                        </div>
                        <div className="col-4 price">
                            <div className="row">
                                <div className="col-4">
                                    <img className='price_img' src="/media/images/pricing2.svg" alt="" />
                                </div>
                                <div className="col-8">
                                    <p className='price_para pt-4 ps-4'>
                                        Intraday and
                                        F&O
                                    </p>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            <a style={{textDecoration: "none"}} href="#">See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
     );
}

export default Pricing;