import { Action } from 'redux';
import { LoadingState, TwitsState } from './contracts/state';

export enum TwitsActionsType {
    SET_TWITS = 'twits/SET_TWITS',
    FETCH_TWITS = 'twits/FETCH_TWITS',
    SET_LOADING_STATE = 'twits/SET_LOADING_STATE'
}

//SET
export interface SetTwitsActionInterface extends Action<TwitsActionsType> {
    type: TwitsActionsType.SET_TWITS;
    payload: TwitsState['items'];
}

export const SetTwits = (
    payload: TwitsState['items']
): SetTwitsActionInterface => ({
    type: TwitsActionsType.SET_TWITS,
    payload
});

//FETCH
export interface FetchTwitsActionInterface extends Action<TwitsActionsType> {
    type: TwitsActionsType.FETCH_TWITS;
}

export const FetchTwits = (): FetchTwitsActionInterface => ({
    type: TwitsActionsType.FETCH_TWITS
});

//LOADING
export interface LoadingTwitsActionInterface extends Action<TwitsActionsType> {
    type: TwitsActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}
export const setTwitsLoadingState = (
    payload: LoadingState
): LoadingTwitsActionInterface => ({
    type: TwitsActionsType.SET_LOADING_STATE,
    payload
});

export type TwitsActions =
    | SetTwitsActionInterface
    | FetchTwitsActionInterface
    | LoadingTwitsActionInterface;
