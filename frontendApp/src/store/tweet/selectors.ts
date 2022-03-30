import { TwitDataState } from './contracts/state';
import { rootState } from '../store';

export const SelectTwitData = (state: rootState): TwitDataState => state.twit;

export const SelectTwitDataItems =(state:rootState):TwitDataState['data']=> SelectTwitData(state).data

export const SelectLoadingState = (state: rootState) => SelectTwitData(state).loadingState;
