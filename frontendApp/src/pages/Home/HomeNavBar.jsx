import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';

export const HomeNavBar = ({ setIsOpenModal }) => {
    return (
        <div className="navbar">
            <div className="navbar__menu">
                <Link to="/home">
                    <IconButton aria-label="default">
                        <TwitterIcon color="primary" />
                    </IconButton>
                </Link>
                <IconButton>
                    <SearchIcon color="primary" />
                    <Typography color="grey">Поиск</Typography>
                </IconButton>
                <IconButton>
                    <NotificationsIcon color="primary" />
                    <Typography color="grey">Уведомления</Typography>
                </IconButton>
                <IconButton>
                    <EmailIcon color="primary" />
                    <Typography color="grey">Сообщения</Typography>
                </IconButton>
                <IconButton>
                    <BookmarkIcon color="primary" />
                    <Typography color="grey">Закладки</Typography>
                </IconButton>
                <IconButton>
                    <ListAltIcon color="primary" />
                    <Typography color="grey">Список</Typography>
                </IconButton>
                <IconButton>
                    <PersonIcon color="primary" />
                    <Typography color="grey">Профиль</Typography>
                </IconButton>

                <Button
                    onClick={() => setIsOpenModal(true)}
                    classNameProp={'blueBtn blueBtntext'}
                    title={'Твитнуть'}
                ></Button>
            </div>
            <div className="userIcon"></div>
        </div>
    );
};
