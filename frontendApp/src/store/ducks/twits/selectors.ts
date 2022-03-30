import { rootState } from '../../store';
import { TwitsState } from './contracts/state';
import { createSelector } from 'reselect';

export const SelectTwits = (state: rootState): TwitsState => state.twits;

export const SelectTwitsItems = createSelector(
    SelectTwits,
    (twits) => twits.items
);

export const SelectLoadingState = (state: rootState) => SelectTwits(state).loadingState;
