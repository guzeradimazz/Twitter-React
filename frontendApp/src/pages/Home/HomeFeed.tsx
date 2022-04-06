import { Avatar } from '@mui/material';
import React from 'react';
import { TwitList } from '../../Tweet/TwitList';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAddTwit } from '../../store/ducks/twits/actionCreatores';
import Button from '../../UI/Button';

export const HomeFeed: React.FC = (): React.ReactElement => {
    const [text, setText] = useState<string>('');
    const handleChangeText = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
            setText(e.currentTarget.value);
        }
    };

    const dispatch = useDispatch();

    const handleClickAddTwit = () => {
        dispatch(fetchAddTwit(text));
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
                    <div className="btnAdd">
                        <Button
                            onClick={handleClickAddTwit}
                            classNameProp={'blueBtn blueBtntext'}
                            title={'Твитнуть'}
                        ></Button>
                    </div>
                </div>
            </div>
            <TwitList />
        </div>
    );
};
