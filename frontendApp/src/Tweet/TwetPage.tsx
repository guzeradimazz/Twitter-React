import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Twit } from './Twit';
import { useDispatch, useSelector } from 'react-redux';
import { SelectTwitData } from '../store/tweet/selectors';
import { FetchTwitData } from '../store/tweet/actionCreatores';

export const TwetPage: React.FC = (): React.ReactElement | null => {
    const dispatch = useDispatch();
    const twitData = useSelector(SelectTwitData);
    const params: { _id?: string } = useParams();
    const id = params._id;

    useEffect(() => {
        
        
        if (id) {
            dispatch(FetchTwitData(id));
        }
    }, [dispatch, id, params]);

    if (!twitData.data) {
        return null;
    }
    return (
        <>
            <Twit {...twitData.data} />
        </>
    );
};
