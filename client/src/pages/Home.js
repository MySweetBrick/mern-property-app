import React from 'react';
import HeroBanner from '../components/HeroBanner';
import RentalForm from '../components/RentalForm';
import Break from '../components/Break';
import CovidBanner from '../components/CovidBanner';
import ResultPage from './ResultPage';


import PropertyPage from './PropertyPage';

function Home() {
    return (
        <>
        <ResultPage />
        <PropertyPage />
        <HeroBanner />
        <RentalForm />
        <Break />
        <CovidBanner />
        </>
    );
};

export default Home;