import React from 'react';

function Team() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row text-center mt-5">
                <h1 className='mb-5'>People</h1>
            </div>
            <div className="row mt-5 mb-5">
            <div className="col-lg-5 col-sm-12 text-center">
                    <img className='profile' src="/media/images/profile.png" alt="" />
                    <h2 className='fs-4'>MD Ahsanul Hasan Rifat</h2>
                    <p>Founder, CEO</p>
                </div>
                <div className="col-lg-7 col-sm-12">
                    <p>
                    MD Ahsanul Hasan Rifat founded StockEra with the vision to simplify and modernize the 
                    trading experience, drawing from years of firsthand experience navigating the challenges 
                    of the stock market. Today, StockEra is redefining the trading landscape in Bangladesh, 
                    empowering traders and investors with cutting-edge tools and technology. <br /><br />

                    MD Ahsanul Hasan Rifat is deeply passionate about financial education and innovation, 
                    constantly working to make investing accessible to everyone. <br /><br />

                    When not immersed in building StockEra, MD Ahsanul Hasan Rifat enjoys playing cricket, 
                    badminton and football. <br /> <br />

                    Connect on <a href="">Homepage</a> / <a href="">Twitter</a>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Team;