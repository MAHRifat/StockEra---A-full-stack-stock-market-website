import React from 'react';
import './css/PricingPage.css';
function Hero() {
    return ( 
        <>
            <div className="container align-items-center">
                <div className="row text-center mt-5 mb-5">
                    <h1 className='text-muted pricing-h1'>Charges</h1>
                    <p className='mb-5 fs-5 text-muted'>List of all charges and taxes</p>
                </div>
                <div className="row pricing text-center mx-auto">

                        <div className="col-lg-4 col-md-4 col-sm-12 price ">
                            <div className="row text-center">
                                <div className="">
                                    <img src="/media/images/pricing1.svg" alt="" style={{width: "14rem"}}/>
                                    <h4>Free equity delivery</h4>
                                    <p className='pricing_para pt-4 ps-3'>
                                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                                    </p>
                                </div>
                            </div>   
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 price ">
                            <div className="row text-center">
                                <div className="">
                                    <img style={{width: "14rem"}} src="/media/images/pricing2.svg" alt="" />
                                    <h4>Intraday and F&O trades</h4>
                                    <p className='pricing_para pt-4 ps-3'>
                                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across 
                                        equity, currency, and commodity trades. Flat ₹20 on all option trades.
                                    </p>
                                </div>
                            </div>   
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 price ">
                            <div className="row text-center">
                                <div className="">
                                    <img style={{width: "14rem"}} src="/media/images/pricing1.svg" alt="" />
                                    <h4>Free direct MF</h4>
                                    <p className='pricing_para pt-4 ps-3'>
                                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                                    </p>
                                </div>
                            </div>   
                        </div>
                    </div>
            </div>
        </>
     );
}

export default Hero;