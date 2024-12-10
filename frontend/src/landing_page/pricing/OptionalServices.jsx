import React from 'react';

function OptionalServices() {
    return ( 
        <>
        <div className="container mt-5 mb-5">
        <h3 className="mb-4 opacity-75">Charges for optional value added services</h3>
        <table className="table border table-borderless table-striped">
            <thead className="table-light">
                <tr>
                    <th scope="col">Service</th>
                    <th scope="col">Billing Frequency</th>
                    <th scope="col">Charges</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tickertape</td>
                    <td>Monthly / Annual</td>
                    <td>Free: 0 | Pro: 249/2399</td>
                </tr>
                <tr>
                    <td>Smallcase</td>
                    <td>Per transaction</td>
                    <td>Buy &amp; Invest More: 100 | SIP: 10</td>
                </tr>
                <tr>
                    <td>Kite Connect</td>
                    <td>Monthly</td>
                    <td>Connect: 2000 | Historical: 2000</td>
                </tr>
            </tbody>
        </table>
    </div>
        </>
     );
}

export default OptionalServices;