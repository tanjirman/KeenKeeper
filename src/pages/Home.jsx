import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import FriendList from '../components/FriendList';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <FriendList/>
        </div>
    );
};

export default Home;