import React from 'react';
import './SupportPage.css';

function Hero() {
    return ( 
        <div className='Supportbg pb-5 pt-3'>
            <div className="text-white d-flex justify-content-between p-4">
                <h4>Support Portal</h4>
                <a className='supportA' href="">Tickets Track</a>
            </div>
            <div className="row px-4 pb-5 pt-3 ">
                <div className='col-md-6 col-sm-12'>
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                    <div className="d-flex mt-4 mb-3">
                    <input className='form-control supportIN' type="text" placeholder='Eg: how do i activate F&O, why is my order getting reject'/>
                    </div>
                    <a className='supportA' href="">Track account opening</a> &nbsp; &nbsp; &nbsp;
                    <a className='supportA' href="">Track segment activation</a> &nbsp; &nbsp; &nbsp;
                    <a className='supportA' href="">Intraday margins</a> &nbsp; &nbsp; &nbsp;
                    <a className='supportA' href="">Kite user manual</a> &nbsp; &nbsp; &nbsp;
                </div>
                <div className='col-md-1'>
                </div>
                <div className='col-md-5 col-sm-12 mt-4'>
                    <h4>Featured</h4>
                    <ol className='lh-lg'>
                        <li><a className='supportA2' href="">Revision in expiry day of index derivatives contracts</a></li>
                        <li><a className='supportA2' href="">Offer for sale (OFS) - December 2024</a></li>
                    </ol>
                </div>
            </div>
        </div>
     );
}

export default Hero;