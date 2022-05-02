import LanguageIcon from '@mui/icons-material/Language'
import TwitterIcon from '@mui/icons-material/Twitter'
import { IconButton, Typography } from '@mui/material'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import PersonIcon from '@mui/icons-material/Person'
import { Link } from 'react-router-dom'
import Button from '../../UI/Button'
import LogoutIcon from '@mui/icons-material/Logout';

export const HomeNavBar = ({ setIsOpenModal }) => {

    const handleOut = ()=>{
        window.localStorage.clear()
    }
    return (
        <div className="navbar">
            <div className="navbar__menu">
                <Link to="/home">
                    <IconButton aria-label="default">
                        <TwitterIcon color="primary" />
                    </IconButton>
                </Link>
                <Link to="/home">
                    <IconButton>
                        <LanguageIcon color="primary" />
                        <Typography color="grey">Главная</Typography>
                    </IconButton>
                </Link>
                <Link to="/signin" onClick={handleOut}>
                    <IconButton>
                        <VpnKeyIcon color="primary" />
                        <Typography color="grey">Регистрация</Typography>
                    </IconButton>
                </Link>
                <Link to="/signin" onClick={handleOut}>
                    <IconButton>
                        <LogoutIcon color="primary" />
                        <Typography color="grey">Выход</Typography>
                    </IconButton>
                </Link>
                <Link to='/home'>
                    <IconButton>
                        <PersonIcon color="primary" />
                        <Typography color="grey">Профиль</Typography>
                    </IconButton>
                </Link>

                <Button
                    onClick={() => setIsOpenModal(true)}
                    classNameProp={'blueBtn blueBtntext'}
                    title={'Твитнуть'}
                ></Button>
            </div>
            <div className="userIcon"></div>
        </div>
    )
}
