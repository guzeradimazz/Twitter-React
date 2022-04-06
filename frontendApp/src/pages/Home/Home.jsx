import React, { useState } from 'react';
import './Home.css';
import { HomeFeed } from './HomeFeed';
import { HomeNavBar } from './HomeNavBar';
import { HomePlanks } from './HomePlanks';
import { ModalTwit } from './ModalTwit';

export const Home = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <section className="home">
            <ModalTwit isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
            <HomeNavBar setIsOpenModal={setIsOpenModal} />
            <HomeFeed />
            <HomePlanks />
        </section>
    );
};
