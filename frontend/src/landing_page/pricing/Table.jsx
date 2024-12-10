import React from 'react';

function Table() {
    return (
        <>
            <div class="container mt-5 text-center">
                {/* <!-- Tabs Navigation --> */}
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button class="nav-link active" id="equity-tab" data-bs-toggle="tab" data-bs-target="#equity" type="button" role="tab" aria-controls="equity" aria-selected="true">Equity</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="currency-tab" data-bs-toggle="tab" data-bs-target="#currency" type="button" role="tab" aria-controls="currency" aria-selected="false">Currency</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="commodity-tab" data-bs-toggle="tab" data-bs-target="#commodity" type="button" role="tab" aria-controls="commodity" aria-selected="false">Commodity</button>
                    </li>
                </ul>

                {/* <!-- Tab Content --> */}
                <div className="tab-content mt-3" id="myTabContent">
                    {/* <!-- Equity Tab --> */}
                    <div className="tab-pane fade show active" id="equity" role="tabpanel" aria-labelledby="equity-tab">
                        <table className="table table-borderless table-striped text-center border ">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Equity Delivery</th>
                                    <th>Equity Intraday</th>
                                    <th>F&O - Futures</th>
                                    <th>F&O - Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Brokerage</td>
                                    <td>Zero Brokerage</td>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td>Flat Rs. 20 per executed order</td>
                                </tr>
                                <tr className='mx-auto'>
                                    <td>STT/CTT</td>
                                    <td>0.1% on buy & sell</td>
                                    <td>0.025% on the sell side</td>
                                    <td>0.02% on the sell side</td>
                                    <td>
                                        <ul>
                                            <li>0.125% of the intrinsic value on options bought and exercised</li>
                                            <li>0.1% on the sell side (on premium)</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Transaction Charges</td>
                                    <td>NSE: 0.00297% <br />BSE: 0.00375%</td>
                                    <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
                                    <td>NSE: 0.00173%<br />BSE: 0</td>
                                    <td>NSE: 0.03503% (on premium)<br />BSE: 0.0325% (on premium)</td>
                                </tr>
                                <tr>
                                    <td>GST</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <td>SEBI Charges</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                </tr>
                                <tr>
                                    <td>Stamp Charges</td>
                                    <td>0.015% or ₹1500 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                    <td>0.002% or ₹200 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Currency Tab  */}
                    <div className="tab-pane fade" id="currency" role="tabpanel" aria-labelledby="currency-tab">
                        <div className="table-responsive mt-3">
                            <table className="table table-borderless table-striped text-center border">
                                <thead>
                                    <tr>
                                        <th>Currency futures</th>
                                        <th>Currency options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0.03% or ₹20/executed order whichever is lower</td>
                                        <td>₹20/executed order</td>
                                    </tr>
                                    <tr>
                                        <td>No STT</td>
                                        <td>No STT</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            NSE: 0.00035% <br />
                                            BSE: 0.00045%
                                        </td>
                                        <td>
                                            NSE: 0.0311% <br />
                                            BSE: 0.001%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    </tr>
                                    <tr>
                                        <td>₹10 / crore</td>
                                        <td>₹10 / crore</td>
                                    </tr>
                                    <tr>
                                        <td>0.0001% or ₹10 / crore on buy side</td>
                                        <td>0.0001% or ₹10 / crore on buy side</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Commodity Tab  */}
                    <div className="tab-pane fade" id="commodity" role="tabpanel" aria-labelledby="commodity-tab">
                        <div className="table-responsive mt-3">
                            <table className="table table-borderless table-striped text-center border">
                                <thead>
                                    <tr>
                                        <th>Commodity futures</th>
                                        <th>Commodity options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0.03% or ₹20/executed order whichever is lower</td>
                                        <td>₹20/executed order</td>
                                    </tr>
                                    <tr>
                                        <td>0.01% on sell side (Non-Agri)</td>
                                        <td>0.05% on sell side</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            MCX: 0.0021% <br />
                                            NSE: 0.0001%
                                        </td>
                                        <td>
                                            MCX: 0.0418% <br />
                                            NSE: 0.001%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Agri: ₹1 / crore <br />
                                            Non-agri: ₹10 / crore
                                        </td>
                                        <td>₹10 / crore</td>
                                    </tr>
                                    <tr>
                                        <td>0.002% or ₹200 / crore on buy side</td>
                                        <td>0.003% or ₹300 / crore on buy side</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <p className='text-muted fs-5 mt-5'><a className='fs-5' href="">Calculate your costs upfront</a> using our brokerage calculator</p>
            </div>
        </>
    );
}

export default Table;