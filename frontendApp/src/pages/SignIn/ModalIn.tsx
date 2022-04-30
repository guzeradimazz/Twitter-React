import React, { useEffect } from 'react'
import './SignIn.css'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LogInApi } from '../../core/LogInApi'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData } from '../../store/ducks/user/actionCreatores'
import { selectUserStatus } from '../../store/ducks/user/selectors'
import { LoadingState } from '../../store/ducks/twits/contracts/state'

interface Login {
    isOpenIn: boolean
    setIsOpenIn: (boolean: boolean) => void
}
const LoginSchema = yup.object().shape({
    email: yup.string().email().required("Введите почту"),
    password: yup.string().required("Введите пароль"),
})

export interface LoginForm {
    email: string
    password: string
}
const ModalIn: React.FC<Login> = ({
    isOpenIn,
    setIsOpenIn,
}): React.ReactElement | null => {
    const loadingStatus = useSelector(selectUserStatus)
    const dispatch = useDispatch()


    const { register, handleSubmit } = useForm<LoginForm>({
        resolver: yupResolver(LoginSchema),
    })

    const onSubmit = async(data: LoginForm) => {
        try {
            dispatch(fetchUserData(data))
            const user = await LogInApi.signIn(data)
            console.log(user);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    // useEffect(()=>{
    //     if(loadingStatus === LoadingState.LOADED) 
    // },[loadingStatus])

    if (!isOpenIn) {
        return null
    }
    return (
        <div className={isOpenIn ? 'blackBackground' : 'displayNone'}>
            <div className={isOpenIn ? 'modalIn' : 'displayNone'}>
                <div className="closeModal" onClick={() => setIsOpenIn(false)}>
                    <span></span>
                    <span></span>
                </div>
                <div className="innerModal">
                    <h1>Войти в Твиттер</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="defaultInput"
                            type="email"
                            placeholder="E-mail"
                            id="email"
                            {...register("email")}
                        />
                        <input
                            className="defaultInput"
                            type="password"
                            placeholder="Пароль"
                            id="password"
                            {...register("password")}
                        />
                        <button className="blueBtn" type='submit'>Войти</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalIn
