import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SelectTwitData } from '../store/tweet/selectors';
import { FetchTwitData } from '../store/tweet/actionCreatores';
import { HomeNavBar } from '../pages/Home/HomeNavBar';
import { HomePlanks } from '../pages/Home/HomePlanks';
import { Link } from 'react-router-dom';
import { IconButton, Avatar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ModalTwit } from '../pages/Home/ModalTwit';
import { useState } from 'react';

export const TwetPage: React.FC = (): React.ReactElement | null => {
    const dispatch = useDispatch();
    const twitData = useSelector(SelectTwitData);
    const params: { _id?: string } = useParams();
    const id = params._id;
    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        if (id) {
            dispatch(FetchTwitData(id));
        }
    }, [dispatch, id, params]);

    if (!twitData.data) return null;
    return (
        <section className="home">
            <ModalTwit isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
            <HomeNavBar setIsOpenModal={setIsOpenModal} />
            <div className="feed">
                <div className="flexFeed">
                    <Link to="/home">
                        <IconButton aria-label="default">
                            <ArrowBackIcon color="primary" />
                        </IconButton>
                    </Link>
                    <h1>Страница поста</h1>
                </div>
                <div className="twit-personal">
                    <div className="twit_item__header">
                        <Avatar
                            className="avatar"
                            alt="Remy Sharp"
                            src={twitData.data.user.avatarUrl}
                        />
                        <div>
                            <span className="twit_header__fullname">
                                {twitData.data.user.fullname}
                            </span>
                            <span className="twit_header__username">
                                @{twitData.data.user.username}
                            </span>
                        </div>
                    </div>
                    <p>{twitData.data.text}</p>
                </div>
            </div>
            <HomePlanks />
        </section>
    );
};
