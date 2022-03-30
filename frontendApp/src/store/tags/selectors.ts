import { TagsState } from './contracts/state';
import { createSelector } from 'reselect';
import { rootState } from '../store';

export const SelectTags = (state: rootState): TagsState => state.tags;

export const SelectTagsItems = createSelector(
    SelectTags,
    (Tags) => Tags.items
);

export const SelectLoadingState = (state: rootState) => SelectTags(state).loadingState;
