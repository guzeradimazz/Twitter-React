import React from 'react';
import { TwitList } from '../../Tweet/TwitList';

export const HomeFeed = () => {
    return (
        <div className="feed">
            <h1>Главная</h1>
            <TwitList />
        </div>
    );
};
