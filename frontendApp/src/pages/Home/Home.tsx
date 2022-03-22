import React from 'react';
import './Home.css';
import { HomeFeed } from './HomeFeed';
import { HomeNavBar } from './HomeNavBar';
import { HomePlanks } from './HomePlanks';

export const Home: React.FC = (): React.ReactElement => {
    return (
        <section className="home">
            <HomeNavBar />
            <HomeFeed />
            <HomePlanks/>
        </section>
    );
};
