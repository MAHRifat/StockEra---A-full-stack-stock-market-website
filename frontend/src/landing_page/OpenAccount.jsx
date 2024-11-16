import React from 'react';
import './home/css/OpenAccount.css';
function OpenAccount() {
    return ( 
        <div className='Container text-center p-5'>
            <div className='row col-sm-12'>  
                <h1 className='fs-2'>Open a StockEra account</h1>                          
                <p className='mt-3 text-muted fs-5'>
                    Modern platforms and apps, ₹0 investments, and flat ₹20 
                    intraday and F&O trades.
                </p>
                <button className='mt-3 p-2 btn btn-primary fs-5 mb-5' id='account_btn'>Sign up for free</button>
            </div>


        </div>
     );
}

export default OpenAccount;