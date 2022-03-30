import { Twit } from "../../ducks/twits/contracts/state";

export enum LoadingState {
    LOADED = 'LOADED',
    NEVER = 'NEVER',
    LOADING = 'LOADING',
    ERROR = 'ERROR'
}

export interface TwitDataState {
    data?: Twit;
    loadingState: LoadingState;
}
