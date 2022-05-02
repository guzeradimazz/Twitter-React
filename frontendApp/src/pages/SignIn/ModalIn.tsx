import React from 'react'
import './SignIn.css'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import { fetchUserData } from '../../store/ducks/user/actionCreatores'

interface Login {
    isOpenIn: boolean
    setIsOpenIn: (boolean: boolean) => void
}
const LoginSchema = yup.object().shape({
    email: yup.string().email().required('Введите почту'),
    password: yup.string().required('Введите пароль'),
})

export interface LoginForm {
    email: string
    password: string
}
const ModalIn: React.FC<Login> = ({
    isOpenIn,
    setIsOpenIn,
}): React.ReactElement | null => {
    const dispatch = useDispatch()

    const { register, handleSubmit } = useForm<LoginForm>({
        resolver: yupResolver(LoginSchema),
    })

    const onSubmit = async (data: LoginForm) => {
        try {
            dispatch(fetchUserData(data))
            setIsOpenIn(false)
        } catch (error) {
            console.log(error)
        }
    }

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
                            {...register('email')}
                        />
                        <input
                            className="defaultInput"
                            type="password"
                            placeholder="Пароль"
                            id="password"
                            {...register('password')}
                        />
                        <button className="blueBtn" type="submit">
                            Войти
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalIn
