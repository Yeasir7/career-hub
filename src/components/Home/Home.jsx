import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import Featured from '../FeaturedJobs/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <Featured></Featured>
        </div>
    );
};

export default Home;