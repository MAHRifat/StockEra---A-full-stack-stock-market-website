import React from 'react';
import './css/Education.css';
function Education() {
    return ( 
        <div className="container p-1 mb-5">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 mb-4 text-center">
                    <img src="\media\images\education1.svg" alt="" style={{width: "30rem"}}/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mt-4">
                    <h1 className='fs-2 mb-4'>Free and open market education</h1>
                    <p className='mb-4 e_para'>
                        Varsity, the largest online stock market education book 
                        in the world covering everything from the basics to advanced trading.
                    </p>
                    <a style={{textDecoration: "none"}} href="">Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                    <p className='mt-4 mb-4 e_para'>
                        TradingQ&A, the most active trading and investment community in the world 
                        for all your market related queries.
                    </p>
                    <a style={{textDecoration: "none"}} href="#">TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;