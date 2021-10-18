import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';

import Services from '../Services/Services';
import Welcome from '../Welcome/Welcome';
import Whys from '../Whys/Whys';

import './Home.css'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Services></Services>
            <Doctors></Doctors>
            <Whys></Whys>
        </div>
    );
};

export default Home;