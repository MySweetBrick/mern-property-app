import React from 'react';
import HeroBanner from '../components/HomeComponents/HeroBanner';
import RentalForm from '../components/HomeComponents/RentalForm';
import Break from '../components/HomeComponents/Break';
import CovidBanner from '../components/HomeComponents/CovidBanner';
import Awards from '../components/HomeComponents/Awards';
import AboutUs from '../components/HomeComponents/AboutUs';

function Home() {
    return (
        <>
        <HeroBanner />
        <RentalForm />
        <Break />
        <CovidBanner />
        <AboutUs />
        <Awards />
        </>
    );
};

export default Home;