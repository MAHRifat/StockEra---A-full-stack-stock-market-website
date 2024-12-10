import React from "react";

function AccountOpening() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <h3 className="mb-4 opacity-75">Charges for account opening</h3>
                <table className="table border table-borderless table-striped">
                    <thead className="table-light ">
                        <tr>
                            <th scope="col">Type of account</th>
                            <th scope="col">Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Online account</td>
                            <td><span class="badge bg-success">FREE</span></td>
                        </tr>
                        <tr>
                            <td>Offline account</td>
                            <td><span class="badge bg-success">FREE</span></td>
                        </tr>
                        <tr>
                            <td>NRI account (offline only)</td>
                            <td>$ 5</td>
                        </tr>
                        <tr>
                            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td>$ 5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AccountOpening;