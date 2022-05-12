import LanguageIcon from '@mui/icons-material/Language'
import { IconButton, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import PersonIcon from '@mui/icons-material/Person'
import { Link } from 'react-router-dom'
import Button from '../../UI/Button'
import LogoutIcon from '@mui/icons-material/Logout'
import { useSelector } from 'react-redux'
import { selectUserState } from '../../store/ducks/user/selectors'

export const HomeNavBar = ({ setIsOpenModal}) => {
    const handleOut = () => {
        window.localStorage.clear()
    }
    const userData = useSelector(selectUserState)
    if (!userData) return null
    return (
        <div className="navbar">
            <div className="navbar__menu">
                <div className="userIcon"></div>
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
                <Link to="/userpage">
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
            <div className="userBlock">
                <div>
                    <Avatar src={window.localStorage.getItem('AVATAR')}></Avatar>
                </div>
                <div className='userBlock-text'>
                    <p>{userData.data?.fullname}</p>
                    <p>{userData.data?.email}</p>
                </div>
            </div>
        </div>
    )
}
