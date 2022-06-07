import React from 'react';
import HeroBanner from '../components/HeroBanner';
import RentalForm from '../components/RentalForm';
import Break from '../components/Break';


import PropertyPage from './PropertyPage';

function Home() {
    return (
        <>
        <HeroBanner />
        <RentalForm />
        {/* <PropertyPage /> */}
        <Break />
        </>
    );
};

export default Home;