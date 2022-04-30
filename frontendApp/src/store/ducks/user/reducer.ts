import produce, { Draft } from 'immer';
import { LoadingState } from '../twits/contracts/state'
import { UserActions, UserActionsType } from './actionCreatores';
import { UserState } from './contracts/state';

export const initialState: UserState = {
    data: undefined,
    status:LoadingState.NEVER
};

export const UserReducer = produce(
    (draft: Draft<UserState>, action: UserActions) => {
        switch (action.type) {
            case UserActionsType.SET_USER_DATA:
                draft.data = action.payload;
                draft.status = LoadingState.SUCCESS;
                break;
            case UserActionsType.SET_LOADING_STATE:
                draft.status = action.payload;
                break;
            default:
                break;
        }
    },
    initialState
);
