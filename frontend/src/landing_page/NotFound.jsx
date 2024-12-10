import React from 'react';
import './home/css/OpenAccount.css';
function NotFound() {
    return ( 
        <body>
            <div className='Container text-center p-5'>
            <div className='row col-sm-12 mt-5'>  
                <img src="/media/images/404.jpeg" alt="" style={{width: "20rem", margin: "0 auto"}}/>
                <h1 className='fs-1 mt-5'>404 Not found</h1>                          
                <p className='mt-3 text-muted fs-5'>
                We couldn’t find the page you were looking 
                for. Visit <a href="/">StockEra home page</a>
                </p>
            </div>
        </div>
        </body>
     );
}

export default NotFound;