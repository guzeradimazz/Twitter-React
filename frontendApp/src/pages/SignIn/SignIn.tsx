import React, { useState, useEffect } from 'react'
import Button from '../../UI/Button'
import ModalIn from './ModalIn'
import ModalReg from './ModalReg'
import './SignIn.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LogInApi } from '../../core/LogInApi'
import { setUserData } from '../../store/ducks/user/actionCreatores'

const SignIn: React.FC = (): React.ReactElement => {
    const [isOpenIn, setIsOpenIn] = useState(false)
    const [isOpenUp, setIsOpenUp] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const checkAuth = async () => {
        const { data } = await LogInApi.getMe()
        console.log(data);
        
        dispatch(setUserData(data))
        navigate('/home')
    }
    
    useEffect(() => {
        checkAuth()
    })
    return (
        <div className="signInPage">
            <div className="blueWall"></div>
            <ModalIn isOpenIn={isOpenIn} setIsOpenIn={setIsOpenIn} />
            <ModalReg isOpenIn={isOpenUp} setIsOpenIn={setIsOpenUp} />
            <div className="formSignIn">
                <div className="formSignIn-logo"></div>
                <p>В курсе происходящего</p>
                <p>
                    Присоединяйтесь к Твиттеру
                    <br />
                    прямо сейчас!
                </p>
                <Button
                    onClick={() => setIsOpenUp(true)}
                    classNameProp={'blueBtn'}
                    title={'Зарегистрироваться'}
                />
                <p>Уже есть аккаунт?</p>
                <Button
                    onClick={() => setIsOpenIn(true)}
                    classNameProp={'whiteBtn'}
                    title={'Войти'}
                />
            </div>
        </div>
    )
}

export default SignIn
