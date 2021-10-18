import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Welcome from '../Welcome/Welcome';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Services></Services>
        </div>
    );
};

export default Home;