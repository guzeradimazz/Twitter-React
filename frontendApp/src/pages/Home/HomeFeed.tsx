import { Avatar, IconButton, Typography } from '@mui/material';
import React from 'react';
import { TwitList } from '../../Tweet/TwitList';
import { useState } from 'react';

export const HomeFeed: React.FC = (): React.ReactElement => {
    const [text, setText] = useState<string>('');
    const handleChangeText = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
            setText(e.currentTarget.value);
        }
    };



    return (
        <div className="feed">
            <h1>Главная</h1>
            <div className="twit-block">
                <Avatar alt="Remy Sharp" className="userAvatar" />
                <div className="twit-text__body">
                    <input
                        type="text"
                        placeholder="Что происходит?"
                        value={text}
                        onChange={(e) => handleChangeText(e)}
                    />
                    <div className="button">
                        <IconButton color="primary">
                            <Typography color="grey">Твитнуть</Typography>
                        </IconButton>
                    </div>
                </div>
            </div>
            <TwitList />
        </div>
    );
};
