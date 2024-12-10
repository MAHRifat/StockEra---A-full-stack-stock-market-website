import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return ( 
        <>
            <div className="container">
                <div className="row text-center ms-auto mx-auto mb-4">
                    <h1 className='p-head'>The StockEra Universe</h1>
                    <p className='mb-5'> 
                        Extend your trading and investment experience even further 
                        with our partner platforms
                    </p>

                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                        <a className='uni-a text-muted' href="">
                            <img className='uni-img' src="/media/images/fund.png" alt="" />
                            <p className='uni-p'>
                                Our asset management venture
                                that is creating simple and transparent index
                                funds to help you save for your goals.
                            </p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                        <a className='uni-a text-muted' href="">
                            <img className='uni-img mb-4 mt-3' src="/media/images/sen.svg" alt="" />
                            <p className='uni-p'>
                                Options trading platform that lets you
                                create strategies, analyze positions, and examine
                                data points like open interest, FII/DII, and more.
                            </p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5 mt-2">
                        <a className='uni-a text-muted' href="">
                            <img className='uni-img' src="/media/images/tij.svg" alt="" />
                            <p className='uni-p'>
                                Investment research platform
                                that offers detailed insights on stocks,
                                sectors, supply chains, and more.
                            </p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                        <a className='uni-a text-muted' href="">
                            <img className='uni-img' src="/media/images/streak.png" alt="" />
                            <p className='uni-p'>
                                Systematic trading platform
                                that allows you to create and backtest
                                strategies without coding.
                            </p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5 mt-2">
                        <a className='uni-a text-muted' href="">
                            <img className='uni-img' src="/media/images/smallcase.png" alt="" />
                            <p className='uni-p'>
                                Thematic investing platform
                                that helps you invest in diversified
                                baskets of stocks on ETFs.
                            </p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                        <a className='uni-a text-muted' href="">
                            <img className='uni-img' src="/media/images/ditto.png" alt="" />
                            <p className='uni-p'>
                                Personalized advice on life
                                and health insurance. No spam
                                and no mis-selling.
                            </p>
                        </a>
                    </div>
                </div>
                <div className=" row text-center mb-5">
                    <Link className='text-center uni-link' style={{width: "15rem"}} to={"/signup"}>
                        <button className='mt-3 p-2 btn btn-primary fs-5 mb-5' id='hero_btn'>Sign up for free</button>
                    </Link>
                </div>
            </div>
        </>
     );
}

export default Universe;