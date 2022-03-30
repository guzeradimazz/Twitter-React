import { Action } from 'redux';
import { Twit } from '../ducks/twits/contracts/state';
import { LoadingState } from './contracts/state';

export enum TwitDataActionsType {
    SET_DATA = 'twits/SET_DATA',
    FETCH_DATA = 'twits/FETCH_DATA',
    SET_LOADING_STATE = 'twits/SET_LOADING_STATE'
}

//SET
export interface SetTwitDataActionInterface extends Action<TwitDataActionsType> {
    type: TwitDataActionsType.SET_DATA;
    payload: Twit;
}

export const SetTwitData = (
    payload: Twit
): SetTwitDataActionInterface => ({
    type: TwitDataActionsType.SET_DATA,
    payload
});

//FETCH
export interface FetchTwitDataActionInterface extends Action<TwitDataActionsType> {
    type: TwitDataActionsType.FETCH_DATA;
    payload:string;
}

export const FetchTwitData = (payload:string): FetchTwitDataActionInterface => ({
    type: TwitDataActionsType.FETCH_DATA,
    payload,
});

//LOADING
export interface LoadingTwitDataActionInterface extends Action<TwitDataActionsType> {
    type: TwitDataActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}
export const setTwitDataLoadingState  = (
    payload: LoadingState
): LoadingTwitDataActionInterface => ({
    type: TwitDataActionsType.SET_LOADING_STATE,
    payload
});

export type TwitDataActions =
    | SetTwitDataActionInterface
    | FetchTwitDataActionInterface
    | LoadingTwitDataActionInterface;
