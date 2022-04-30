import { Action } from 'redux'
import { LoadingState } from '../twits/contracts/state'
import { User, UserState } from './contracts/state'
import { LoginForm } from '../../../pages/SignIn/ModalIn'

export enum UserActionsType {
    SET_USER_DATA = 'user/SET_USER_DATA',
    SET_LOADING_STATE = 'user/SET_LOADING_STATE',
    FETCH_SIGNIN = 'user/FETCH_SIGNIN',
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

export type UserActions =
    | SetUserDataActionInterface
    | SetUserLoadingActionInterface
