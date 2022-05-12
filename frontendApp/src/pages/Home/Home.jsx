import { useState,useEffect } from 'react'
import './Home.css'
import { HomeFeed } from './HomeFeed'
import { HomeNavBar } from './HomeNavBar'
import { HomePlanks } from './HomePlanks'
import { ModalTwit } from './ModalTwit'
import { useDispatch } from 'react-redux'
import { LogInApi } from '../../core/LogInApi'
import { setUserData } from '../../store/ducks/user/actionCreatores'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const setLocalData = (data)=>{
        window.localStorage.setItem('EMAIL',data.email)
        window.localStorage.setItem('AVATAR',data.avatarUrl)
        window.localStorage.setItem('ID',data._id)
        window.localStorage.setItem('FULLNAME',data.fullname)
        window.localStorage.setItem('USERNAME',data.username)
        window.localStorage.setItem('CONFIRMED',data.confirmed)
    }
    const checkAuth = async () => {
        const { data } = await LogInApi.getMe()
        setLocalData(data)
        dispatch(setUserData(data))
        navigate('/home')
    }
    
    useEffect(() => {
        checkAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <section className="home">
            <ModalTwit isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
            <HomeNavBar setIsOpenModal={setIsOpenModal}/>
            <HomeFeed />
            <HomePlanks />
        </section>
    )
}
