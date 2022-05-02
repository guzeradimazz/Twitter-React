import React from 'react'
import './SignIn.css'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import { fethcSignUp } from '../../store/ducks/user/actionCreatores'

interface Register {
    isOpenIn: boolean
    setIsOpenIn: (boolean: boolean) => void
}

const RegisterSchema = yup.object().shape({
    fullname: yup.string().required('Введите логин'),
    username: yup.string().required('Введите имя'),
    email: yup.string().email().required('Введите почту'),
    password: yup.string().required('Введите пароль'),
    password2: yup.string().required('Введите пароль'),
})

export interface RegisterForm {
    fullname: string
    username: string
    email: string
    password: string
    password2: string
}

const ModalReg: React.FC<Register> = ({
    isOpenIn,
    setIsOpenIn,
}): React.ReactElement | null => {
    const { register, handleSubmit } = useForm<RegisterForm>({
        resolver: yupResolver(RegisterSchema),
    })
    const dispatch = useDispatch()

    const onSubmit = async (data: RegisterForm) => {
        try {
            dispatch(fethcSignUp(data))
            // const user = await LogInApi.signIn(data)
            // console.log(user)
        } catch (error) {
            // console.log(error)
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
                    <h1>Создайте учетную запись</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="defaultInput"
                            type="fullname"
                            placeholder="Полное имя"
                            id="fullname"
                            {...register("fullname")}
                        />
                        <input
                            className="defaultInput"
                            type="username"
                            placeholder="Логин"
                            id="username"
                            {...register("username")}
                        />
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
                        <input
                            className="defaultInput"
                            type="password"
                            placeholder="Повторите пароль"
                            id="password2"
                            {...register("password2")}
                        />
                        <button type='submit' className="blueBtn">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalReg
