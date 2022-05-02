import { LoginForm } from '../pages/SignIn/ModalIn'
import { axios } from './axios'
import { RegisterForm } from '../pages/SignIn/ModalReg'

interface LogInResponse {
    status: string
    data: any
}
export const LogInApi = {
    async signIn(formData: LoginForm): Promise<LogInResponse> {
        const { data } = await axios.post<LogInResponse>('/auth/login', {
            username: formData.email,
            password: formData.password,
        })
        return data
    },
    async signUp(formData: RegisterForm): Promise<LogInResponse> {
        const { data } = await axios.post<LogInResponse>('/auth/register', {
            email: formData.email,
            username: formData.username,
            fullname: formData.fullname,
            password: formData.password,
            password2: formData.password2,
        })
        return data
    },
    async getMe(): Promise<LogInResponse> {
        const { data } = await axios.get<LogInResponse>('/users/me')
        return data
    },
}
// @ts-ignore
window.LogInApi = LogInApi