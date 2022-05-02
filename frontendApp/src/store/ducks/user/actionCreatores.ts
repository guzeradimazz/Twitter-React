import { Action } from 'redux'
import { LoadingState } from '../twits/contracts/state'
import { User, UserState } from './contracts/state'
import { LoginForm } from '../../../pages/SignIn/ModalIn'
import { RegisterForm } from '../../../pages/SignIn/ModalReg'

export enum UserActionsType {
    SET_USER_DATA = 'user/SET_USER_DATA',
    SET_LOADING_STATE = 'user/SET_LOADING_STATE',
    FETCH_SIGNIN = 'user/FETCH_SIGNIN',
    FETCH_SIGNUP = 'user/FETCH_SIGNUP',
}

export interface FetchUserDataActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGNIN
    payload: LoginForm
}

export interface SetUserDataActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_DATA
    payload: User | undefined
}

export interface SetUserLoadingActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_LOADING_STATE
    payload: LoadingState
}

export interface FethcSignUpActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGNUP
    payload: RegisterForm
}


export const setUserData = (
    payload: UserState['data']
): SetUserDataActionInterface => ({
    type: UserActionsType.SET_USER_DATA,
    payload,
})

export const fetchUserData = (
    payload: LoginForm
): FetchUserDataActionInterface => ({
    type: UserActionsType.FETCH_SIGNIN,
    payload,
})

export const setUserDataLoading = (
    payload: UserState['status']
): SetUserLoadingActionInterface => ({
    type: UserActionsType.SET_LOADING_STATE,
    payload,
})




export const fethcSignUp = (
    payload: RegisterForm
): FethcSignUpActionInterface => ({
    type: UserActionsType.FETCH_SIGNUP,
    payload,
})


export type UserActions =
    | SetUserDataActionInterface
    | SetUserLoadingActionInterface
