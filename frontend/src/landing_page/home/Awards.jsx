import React from 'react';

function Awards() {
    return ( 
       <div className='container mt-5 mb-5 p-1'>
            <div className='row'>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-4 text-center">
                    <img src="/media/images/largestBroker.svg" alt="" style={{width: "30rem"}}/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mt-4">
                    <h1 className='fs-2 mb-2'>Largest stock broker in the World</h1>
                    <p>2+ billion StockEra clients contrubute to over 15% of all retail order
                        volumes in the world daily by trading and investing in:
                    </p>
                    <div className='row mt-5 mb-2'>
                        <div className="col-6">
                            <ul>
                            <li><p>Futures and Options</p></li>
                            <li><p>Commodity derivatives</p></li>
                            <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                            <li><p>Stocks & IPOs</p></li>
                            <li><p>Diret mutual funds</p></li>
                            <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    
                    <img src="\media\images\pressLogos.png" alt="" style={{width: "90%"}}/>
                </div>
            </div>

       </div>
     );
}

export default Awards;