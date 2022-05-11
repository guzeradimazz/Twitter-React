import { Action } from 'redux'
import { LoadingState, Twit, TwitsState } from './contracts/state'

export enum TwitsActionsType {
    SET_TWITS = 'twits/SET_TWITS',
    FETCH_TWITS = 'twits/FETCH_TWITS',
    SET_LOADING_STATE = 'twits/SET_LOADING_STATE',
    ADD_TWIT = 'twits/ADD_TWIT',
    FETCH_ADD_TWIT = 'twits/FETCH_ADD_TWIT',
}

//SET
export interface SetTwitsActionInterface extends Action<TwitsActionsType> {
    type: TwitsActionsType.SET_TWITS
    payload: TwitsState['items']
}

export const SetTwits = (
    payload: TwitsState['items']
): SetTwitsActionInterface => ({
    type: TwitsActionsType.SET_TWITS,
    payload,
})

//FETCH
export interface FetchTwitsActionInterface extends Action<TwitsActionsType> {
    type: TwitsActionsType.FETCH_TWITS
}

export const FetchTwits = (): FetchTwitsActionInterface => ({
    type: TwitsActionsType.FETCH_TWITS,
})

//ADD
export interface AddTwitActionInterface extends Action<TwitsActionsType> {
    type: TwitsActionsType.ADD_TWIT
    payload: Twit
}

export const AddTwit = (payload: Twit): AddTwitActionInterface => ({
    type: TwitsActionsType.ADD_TWIT,
    payload,
})
//FETCH_ADD
export interface FetchAddTwitActionInterface extends Action<TwitsActionsType> {
    type: TwitsActionsType.FETCH_ADD_TWIT
    payload: { text: string; images: string[] }
}

export const fetchAddTwit = (payload: {
    text: string
    images: string[]
}): FetchAddTwitActionInterface => ({
    type: TwitsActionsType.FETCH_ADD_TWIT,
    payload,
})
//LOADING
export interface LoadingTwitsActionInterface extends Action<TwitsActionsType> {
    type: TwitsActionsType.SET_LOADING_STATE
    payload: LoadingState
}
export const setTwitsLoadingState = (
    payload: LoadingState
): LoadingTwitsActionInterface => ({
    type: TwitsActionsType.SET_LOADING_STATE,
    payload,
})

export type TwitsActions =
    | SetTwitsActionInterface
    | FetchTwitsActionInterface
    | LoadingTwitsActionInterface
    | FetchAddTwitActionInterface
    | AddTwitActionInterface
