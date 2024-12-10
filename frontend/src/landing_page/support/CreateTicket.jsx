import React from 'react';
import './createTicket.css';

function CreateTicket() {
    return (
        <>
            <div className="m-5">
            <h3 className='fs-4'>To create a ticket, select a relevant topic</h3>
                <div className="row">
                    <div className='mt-5 col-lg-4 col-md-4 col-sm-12'>
                        <h3 className='fs-5 opacity-75'><i class="fa fa-plus-square-o" aria-hidden="true"></i> Account Opening</h3>
                        <p className='ticket'>
                            <a href="">Getting started</a>
                            <a href="">Online</a>
                            <a href="">Offline</a>
                            <a href="">Charges</a>
                            <a href="">Company, Partnership and HUF</a>
                            <a href="">Non Resident</a>
                        </p>
                    </div>
                    <div className=' mt-5 col-lg-4 col-md-4 col-sm-12'>
                        <h3 className='fs-5 opacity-75'><i class="fa fa-user-o" aria-hidden="true"></i> Your StockEra Account</h3>
                        <p className='ticket'>
                            <a href="">Login credentials</a>
                            <a href="">Your Profile</a>
                            <a href="">Account modification and segment addition</a>
                            <a href="">CMR & DP ID</a>
                            <a href="">Nomination</a>
                            <a href="">Transfer and conversion of shares</a>
                        </p>
                    </div>
                    <div className=' mt-5 col-lg-4 col-md-4 col-sm-12'>
                        <h3 className='fs-5 opacity-75'><i class="fa fa-bar-chart" aria-hidden="true"></i> Trading and Markets</h3>
                        <p className='ticket'>
                            <a href="">Trading FAQs</a>
                            <a href="">Kite</a>
                            <a href="">Margins</a>
                            <a href="">Product and order types</a>
                            <a href="">Corporate actions</a>
                            <a href="">Kite features</a>
                        </p>
                    </div>
                    <div className=' mt-5 col-lg-4 col-md-4 col-sm-12'>
                        <h3 className='fs-5 opacity-75'><i class="fa fa-credit-card" aria-hidden="true"></i> Funds</h3>
                        <p className='ticket'>
                            <a href="">Fund withdrawal</a>
                            <a href="">Adding funds</a>
                            <a href="">Adding bank accounts</a>
                            <a href="">eMandates</a>
                        </p>
                    </div>
                    <div className='mt-5 col-lg-4 col-md-4 col-sm-12'>
                        <h3 className='fs-5 opacity-75'><i class="fa fa-circle-o-notch" aria-hidden="true"></i> Console</h3>
                        <p className='ticket'>
                            <a href="">IPO</a>
                            <a href="">Portfolio</a>
                            <a href="">Funds statement</a>
                            <a href="">Profile</a>
                            <a href="">Reports</a>
                            <a href="">Referral program</a>
                        </p>
                    </div>
                    <div className=' mt-5 col-lg-4 col-md-4 col-sm-12'>
                        <h3 className='fs-5 opacity-75'><i class="fa fa-circle-o" aria-hidden="true"></i> Coin</h3>
                        <p className='ticket'>
                            <a href="">Understanding mutual funds and Coin</a>
                            <a href="">Coin app</a>
                            <a href="">Coin web</a>
                            <a href="">Transactions and reports</a>
                            <a href="">National Pension Scheme (NPS)</a>
                        </p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default CreateTicket;