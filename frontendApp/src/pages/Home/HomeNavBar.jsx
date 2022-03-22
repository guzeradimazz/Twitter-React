import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import { Button, IconButton, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';

export const HomeNavBar = () => {
    const menuArray = [
        { id: 1, title: 'Поиск', icon: <SearchIcon /> },
        { id: 2, title: 'Уведомления', icon: SearchIcon },
        { id: 3, title: 'Сообщения', icon: SearchIcon },
        { id: 4, title: 'Закладки', icon: SearchIcon },
        { id: 5, title: 'Список', icon: SearchIcon },
        { id: 6, title: 'Профиль', icon: SearchIcon }
    ];
    return (
        <div className="navbar">
            <div className="navbar__menu">
                <IconButton aria-label="default">
                    <TwitterIcon color="primary" />
                </IconButton>
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
                <Button color="primary">
                    <Typography >Твитнуть</Typography>
                </Button>
            </div>
            <div className="userIcon"></div>
        </div>
    );
};
