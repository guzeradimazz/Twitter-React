import { LoginForm } from '../pages/SignIn/ModalIn'
import { axios } from './axios'

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
    async getMe(): Promise<LogInResponse> {
        const { data } = await axios.get<LogInResponse>('/users/me')
        return data
    },
}
// @ts-ignore
window.LogInApi = LogInApi