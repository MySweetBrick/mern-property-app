import React from 'react';
import HeroBanner from '../components/HomeComponents/HeroBanner';
import RentalForm from '../components/HomeComponents/RentalForm';
import Break from '../components/HomeComponents/Break';
import CovidBanner from '../components/HomeComponents/CovidBanner';

function Home() {
    return (
        <>
        <HeroBanner />
        <RentalForm />
        <Break />
        <CovidBanner />
        </>
    );
};

export default Home;