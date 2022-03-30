import { Action } from 'redux';
import { LoadingState, TagsState } from './contracts/state';

export enum TagsActionsType {
    SET_TAGS = 'tags/SET_TAGS',
    FETCH_TAGS = 'tags/FETCH_TAGS',
    SET_LOADING_STATE = 'tags/SET_LOADING_STATE'
}

//SET
export interface SetTagsActionInterface extends Action<TagsActionsType> {
    type: TagsActionsType.SET_TAGS;
    payload: TagsState['items'];
}

export const SetTags = (
    payload: TagsState['items']
): SetTagsActionInterface => ({
    type: TagsActionsType.SET_TAGS,
    payload
});

//FETCH
export interface FetchTagsActionInterface extends Action<TagsActionsType> {
    type: TagsActionsType.FETCH_TAGS;
}

export const FetchTags = (): FetchTagsActionInterface => ({
    type: TagsActionsType.FETCH_TAGS
});

//LOADING
export interface LoadingTagsActionInterface extends Action<TagsActionsType> {
    type: TagsActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}
export const setTagsLoadingState  = (
    payload: LoadingState
): LoadingTagsActionInterface => ({
    type: TagsActionsType.SET_LOADING_STATE,
    payload
});

export type TagsActions =
    | SetTagsActionInterface
    | FetchTagsActionInterface
    | LoadingTagsActionInterface;
