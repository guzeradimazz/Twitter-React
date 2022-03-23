import { Action } from 'redux';
import { TwitsState } from './contracts/state';

export enum TwitsActionsType {
    SET_TIWTS = 'twits/SET_TIWTS'
}

export interface SetTwitsActionInterface extends Action<TwitsActionsType>{
    type: TwitsActionsType.SET_TIWTS;
    payload: TwitsState['items'];
}

export const setTwits = (payload:TwitsState['items']):SetTwitsActionInterface=>({
    type:TwitsActionsType.SET_TIWTS,
    payload,
});

export type TwitsActions = SetTwitsActionInterface;
