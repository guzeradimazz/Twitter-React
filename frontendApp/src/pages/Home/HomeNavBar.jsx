import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
export const HomeNavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__menu">
                <IconButton aria-label="default">
                    <TwitterIcon color="primary" />
                </IconButton>
                <IconButton>
                    <SearchIcon color="primary" />
                    <Typography color='black'>Поиск</Typography>
                </IconButton>
                <IconButton>
                    <NotificationsIcon color="primary" />
                    <Typography color='black'>Уведомления</Typography>
                </IconButton>
                <IconButton>
                    <EmailIcon color="primary" />
                    <Typography color='black'>Сообщения</Typography>
                </IconButton>
                <IconButton>
                    <BookmarkIcon color="primary" />
                    <Typography color='black'>Закладки</Typography>
                </IconButton>
                <IconButton>
                    <ListAltIcon color="primary" />
                    <Typography color='black'>Список</Typography>
                </IconButton>
                <IconButton>
                    <PersonIcon color="primary" />
                    <Typography color='black'>Профиль</Typography>
                </IconButton>
            </div>
            <div className="userIcon"></div>
        </div>
    );
};
