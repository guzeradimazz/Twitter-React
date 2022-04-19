import { rootState } from '../../store';
import { TwitsState } from './contracts/state';

export const SelectTwits = (state: rootState): TwitsState => state.twits;

export const SelectTwitsItems = (state: rootState) => SelectTwits(state).items

export const SelectLoadingState = (state: rootState) => SelectTwits(state).loadingState;
