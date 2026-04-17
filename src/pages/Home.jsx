import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import FriendList from '../components/FriendList';
import SummaryCards from '../components/SummaryCards';

const Home = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <Banner/>
            {/* <SummaryCards/> */}
            <FriendList/>
        </div>
    );
};

export default Home;