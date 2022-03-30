import produce, { Draft } from 'immer';
import { TwitsActions, TwitsActionsType } from './actionCreatores';
import { LoadingState, TwitsState } from './contracts/state';

export const initialState: TwitsState = {
    items: [],
    loadingState: LoadingState.NEVER
};

export const twitsReducer = produce(
    (draft: Draft<TwitsState>, action: TwitsActions) => {
        switch (action.type) {
            case TwitsActionsType.SET_TWITS:
                draft.items = action.payload;
                draft.loadingState = LoadingState.LOADED;
                break;
            case TwitsActionsType.FETCH_TWITS:
                draft.items = [];
                draft.loadingState = LoadingState.LOADING;
                break;
            case TwitsActionsType.SET_LOADING_STATE:
                draft.loadingState = action.payload;
                break;
            default:
                break;
        }
    },
    initialState
);
