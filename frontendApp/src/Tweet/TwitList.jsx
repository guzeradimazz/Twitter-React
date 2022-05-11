import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchTwits } from '../store/ducks/twits/actionCreatores';
import { SelectTwitsItems } from '../store/ducks/twits/selectors';
import { Twit } from './Twit';

export const TwitList = () => {
    const dispatch = useDispatch();
    const twits = useSelector(SelectTwitsItems);
    useEffect(() => {
        dispatch(FetchTwits());
    }, [dispatch]);

    return (
        <div className='tempMagin'>
            {twits.map((twit) => (
                <Twit
                    _id={twit._id}
                    key={twit._id}
                    user={twit.user}
                    text={twit.text}
                    createdAt={twit.createdAt}
                    avatarUrl={twit.user.avatarUrl}
                    like={twit.like}
                    images={twit.images}
                />
            ))}
        </div>
    );
};
