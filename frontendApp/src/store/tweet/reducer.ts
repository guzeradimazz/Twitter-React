import produce, { Draft } from 'immer';
import { TwitDataActions, TwitDataActionsType } from './actionCreatores';
import { LoadingState, TwitDataState } from './contracts/state';

export const initialState: TwitDataState = {
    data: undefined,
    loadingState: LoadingState.NEVER
};

export const TwitDataReducer = produce(
    (draft: Draft<TwitDataState>, action: TwitDataActions) => {
        switch (action.type) {
            case TwitDataActionsType.SET_DATA:
                draft.data = action.payload;
                draft.loadingState = LoadingState.LOADED;
                break;
            case TwitDataActionsType.FETCH_DATA:
                draft.data = undefined;
                draft.loadingState = LoadingState.LOADING;
                break;
            case TwitDataActionsType.SET_LOADING_STATE:
                draft.loadingState = action.payload;
                break;
            default:
                break;
        }
    },
    initialState
);
