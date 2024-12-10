import React from 'react';
import Hero from './Hero';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './css/PricingPage.css';
import Table from './table';
import AccountOpening from './AccountOpening';
import OptionalServices from './OptionalServices';

function PricingPage() {
    return ( 
        <>
            <body>
                <Hero />
                <Table/>
                <AccountOpening/>
                <OptionalServices/>
            </body>
        </>
     );
}

export default PricingPage;