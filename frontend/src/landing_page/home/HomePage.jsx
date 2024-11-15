import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';


function HomePage() {
    return ( 
        <>
            <Navbar />
            <Hero />
            <Education />
            <Pricing />
            <Awards />
            <Stats />
            <OpenAccount />
            <Footer />

        </>
     );
}

export default HomePage;