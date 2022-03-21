import React from 'react';
import './Home.css';
import { HomeFeed } from './HomeFeed';
import { HomeNavBar } from './HomeNavBar';

export const Home: React.FC = (): React.ReactElement => {
    return (
        <section className="home">
            <HomeNavBar />
            <HomeFeed />
            


            <>
            o</>
            <div className="planks"><span color='white'>7777</span></div>
        </section>
    );
};
