import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import CreateTicket from './CreateTicket';
import Footer from '../Footer';
import './SupportPage.css'

function SupportPage() {
    return (
        <>
            <body>
                <Hero />
                <CreateTicket />
            </body>
        </>
    );
}

export default SupportPage;