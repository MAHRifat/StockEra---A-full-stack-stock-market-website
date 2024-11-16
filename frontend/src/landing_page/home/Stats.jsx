import React from 'react';

function Stats() {
    return ( 
        <div className="container p-1 mb-5">
            <div className="row">
                <div className="col-lg-5 col-sm-12 mt-5 ">
                <h1 className='mb-5 fs-2'>Trust with confidence</h1>
                    <div className='pb-3'>
                        <h4 className='fs-5'>Customer-first always</h4>
                        <p className='text-muted'>
                        That's why 1.5+ crore customers trust StockEra with ₹4.5+ lakh crores of equity investments 
                        and contribute to 15% of daily retail exchange volumes in the world.
                        </p>
                    </div>
                    <div className='pb-3'>
                        <h4 className='fs-5'>No spam or gimmicks</h4>
                        <p className='text-muted'>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that 
                        you use at your pace, the way you like.
                        </p>
                    </div>
                    <div className='pb-3'>
                        <h4 className='fs-5'>The StockEra universe</h4>
                        <p className='text-muted'>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer
                         you tailored services specific to your needs.
                        </p>
                    </div>
                    <div className='pb-3'>
                        <h4 className='fs-5'>Do better with money</h4>
                        <p className='text-muted'>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions,
                         but actively help you do better with your money.
                        </p>
                    </div>
                </div>
                <div className="col-lg-7 col-sm-12 mt-5 text-center">
                    <img className='mt-5' src="\media\images\ecosystem.png" alt="" style={{width: "30rem"}}/>
                    <div className="">
                        <a style={{textDecoration: "none"}} className='mx-5' href="#">Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a style={{textDecoration: "none"}} href="#">Try kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;