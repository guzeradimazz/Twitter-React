import { IconButton } from '@mui/material'
import React from 'react'
import './Twit.css'
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'
import AutorenewTwoToneIcon from '@mui/icons-material/AutorenewTwoTone'
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone'
import Avatar from '@mui/material/Avatar'
import { Link } from 'react-router-dom'
import formatDistanse from 'date-fns/formatDistance'
import ruLang from 'date-fns/locale/ru'

interface TwitProps {
    _id: string
    text: string
    createdAt: string
    user: {
        fullname: string
        username: string
        avatarUrl: string
    }
    like: number
}
export const formatDate = (date: Date): string => {
    return formatDistanse(date, new Date(), { locale: ruLang })
}

export const Twit: React.FC<TwitProps> = ({
    _id,
    text,
    createdAt,
    user,
    like,
}: TwitProps): React.ReactElement => {
    return (
        <Link to={`/home/twit/${_id}`}>
            <div className="twit">
                <Avatar alt="Remy Sharp" src={user.avatarUrl} />
                <div className="twit-text">
                    <div className="twit-text__title">
                        <b>{user.fullname}</b>{' '}
                        <span>
                            @{user.username} - {formatDate(new Date(createdAt))}{' '}
                            назад
                        </span>
                    </div>
                    <div className="twit-text__body">{text}</div>
                    <div className="twit-group">
                        <IconButton aria-label="default">
                            <ChatBubbleOutlineTwoToneIcon color="primary" />
                            <span>1</span>
                        </IconButton>
                        <IconButton aria-label="default">
                            <FavoriteTwoToneIcon color="error" />
                            <span>{like}</span>
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
        </Link>
    )
}
