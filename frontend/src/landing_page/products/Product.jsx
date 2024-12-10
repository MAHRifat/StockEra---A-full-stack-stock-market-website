import React from "react";
import './products.css';

function Product() {
    return ( 
        <>
            <div className="container mb-5">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-12 text-center">
                        <img className="p-img mt-5" src="/media/images/products-kite.png" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-12 mt-5">
                        <h1 className="p-head">Kite</h1>
                        <p className="text-muted">
                            Our ultra-fast flagship trading platform with streaming market data,
                            advanced charts, an elegant UI, and more. Enjoy the Kite experience 
                            seamlessly on your Android and iOS devices.
                        </p>
                        <div className="link">
                            <a href="">Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> &nbsp; &nbsp;
                            <a href="">Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                        </div>
                    </div>
                </div>
                <div className="row flex-lg-row-reverse align-items-center mt-5">
                    <div className="col-lg-7 col-md-12 text-center">
                        <img className="p-img" src="/media/images/products-console.png" alt="" />
                    </div>
                    <div className="col-lg-1 d-none d-lg-block"></div>
                    <div className="col-lg-4 col-md-12 text-lg-start">
                        <h1 className="p-head">Console</h1>
                        <p className="text-muted">
                            The central dashboard for your Zerodha account. Gain insights into 
                            your trades and investments with in-depth reports and visualisations.
                        </p>
                        <a href="">Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="row mt-5 align-items-center">
                    <div className="col-lg-8 col-md-12 text-center">
                    <img className="p-img" src="/media/images/products-coin.png" alt="" />
                        
                    </div>
                    <div className="col-lg-4 col-md-12">
                    <h1 className="mt-5 p-head">Coin</h1>
                        <p className="text-muted"> 
                        Buy direct mutual funds online, commission-free, delivered directly to 
                        your Demat account. Enjoy the investment experience on your Android and 
                        iOS devices.
                        </p >
                        <a href="">Coin <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <div className="mt-3">
                            <a href=""><img src="/media/images/google.svg" alt="" /></a> &nbsp; &nbsp;
                            <a href=""><img src="/media/images/app.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="row flex-lg-row-reverse align-items-center mt-5">
                    <div className="col-lg-7 col-md-12 text-center">
                        <img className="p-img " src="/media/images/products-kite1.png" alt="" />
                    </div>
                    <div className="col-lg-1 d-none d-lg-block"></div>
                    <div className="col-lg-4 col-md-12">
                        <h1 className="mt-5 p-head">Kite Connect API</h1>
                        <p className="text-muted">
                            Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. 
                            If you are a startup, build your investment app and showcase it to our clientbase.
                        </p>
                        <a href="">Kite Connect <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="row mt-5 align-items-center mb-5">
                    <div className="col-lg-8 col-md-12 text-center" >
                        <img className="" src="/media/images/varsity-products.png" alt="" />                      
                    </div>
                    <div className="col-lg-4 col-md-12">
                    <h1 className="p-head">Varsity mobile</h1>
                        <p className="text-muted">
                            An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations.
                            Content is broken down into bite-size cards to help you learn on the go.
                        </p>
                        <div>
                            <a href=""><img src="/media/images/google.svg" alt="" /></a> &nbsp; &nbsp;
                            <a href=""><img src="/media/images/app.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
     );
}

export default Product;