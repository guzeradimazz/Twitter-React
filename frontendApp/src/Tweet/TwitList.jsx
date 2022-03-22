import React from 'react';
import { Twit } from './Twit';

export const TwitList = () => {
    const defaultUser ={
        fullname: 'string',
        username: 'string',
        avatarUrl: 'string',
      }
    const array = [{}, {}, {}, {}, {}, {}, {}, {}];
    return (
        <div>
            {array.map((i,idx) => (
                <Twit
                    key={idx+'lorem'}
                    user={defaultUser}
                    text={
                        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore natus nam facere reprehenderit officia corrupti, recusandae repudiandae dolorum, quis, veniam odio sit. Obcaecati commodi excepturi consequuntur recusandae. Minima, fugiat quod.'
                    }
                />
            ))}
        </div>
    );
};
