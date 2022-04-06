import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FetchTags } from '../../store/tags/actionCreatores';
import { SelectTagsItems } from '../../store/tags/selectors';

export const HomePlanks = () => {
    const dispatch = useDispatch();
    const tags = useSelector(SelectTagsItems);
    useEffect(() => {
        dispatch(FetchTags());
    }, [dispatch]);
    return (
        <div className="planks">
            <input type="text" placeholder="Поиск..." />
            <h2>Актуальная информация</h2>
            {tags.map((i) => (
                <Link to={`/home/search?q=${i.title}`} key={i._id}>
                    <div className="actual-info">
                        <div className="actual-info__title">{i.title}</div>
                        <p>Твитов: {i.count}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};
