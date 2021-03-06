import { IconButton } from '@mui/material';
import React from 'react';
import './Twit.css';
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import AutorenewTwoToneIcon from '@mui/icons-material/AutorenewTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import Avatar from '@mui/material/Avatar';

interface TwitProps {
    text: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}

export const Twit: React.FC<TwitProps> = ({
    text,
    user
}: TwitProps): React.ReactElement => {
    return (
        <div className="twit">
            <Avatar alt="Remy Sharp" src={user.avatarUrl} />
            <div className="twit-text">
                <div className="twit-text__title">
                    <b>{user.fullname}</b> <span>{user.username} - 8ч</span>
                </div>
                <div className="twit-text__body">
                    {text}
                </div>
                <div className="twit-group">
                    <IconButton aria-label="default">
                        <ChatBubbleOutlineTwoToneIcon color="primary" />
                        <span>1</span>
                    </IconButton>
                    <IconButton aria-label="default">
                        <FavoriteTwoToneIcon color="error" />
                        <span>1</span>
                    </IconButton>
                    <IconButton aria-label="default">
                        <AutorenewTwoToneIcon color="warning" />
                    </IconButton>
                    <IconButton aria-label="default">
                        <ShareTwoToneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};
