import React from 'react';
import './about.css';

function Hero() {
    return ( 
        <div className="container mt-3">
            <div className="row text-center border-bottom">
                <h1 className='mt-5 px-5 letterSpace mb-5'>
                    We pioneered the discount broking model in India. <br />
                    Now, we are breaking ground with our technology.
                </h1>
            </div>
            <div className="row mt-5">
                <div className="col-lg-6 col-md-12 mt-5">
                    <p className='about'>
                        We launched StockEra on 8th of August, 2024 with the vision of revolutionizing the trading and investment experience in 
                        Bangladesh and beyond. Our mission is to eliminate all barriers related to cost, accessibility, and technology that 
                        traders and investors face today. <br /><br />

                        The name StockEra signifies a new era of stock trading, where innovation meets simplicity, empowering everyone to 
                        take charge of their financial future. <br /><br />

                        With our cutting-edge technology, transparent pricing, and user-focused ecosystem, StockEra aims to become the most 
                        trusted trading platform in the region. <br /> <br />

                        Today, thousands of users trust StockEra for their trading needs, placing numerous orders daily through our seamless 
                        platform. We are proud to contribute to transforming the retail trading landscape with a commitment to excellence and innovation.
                    </p>
                </div>
                <div className="col-lg-6 col-md-12 mt-5">
                    <p className='about'>
                    In addition, we are committed to empowering retail traders and investors through a range of free online educational 
                    initiatives and an active community platform. At StockEra, we believe that knowledge is the key to unlocking financial 
                    growth for everyone. <br /><br />

                    Our innovation fund, InvestEra, is dedicated to supporting promising fintech startups, with the vision of advancing 
                    financial technology and expanding access to the stock market for all. <br /><br />

                    But that’s just the beginning. We’re constantly innovating, striving to redefine the future of trading and 
                    investing every day. Stay tuned for our latest updates on our blog or explore what the media is <a href="">saying about StockEra</a>.
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Hero;