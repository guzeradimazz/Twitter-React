import { combineReducers } from 'redux';
import { twitsReducer } from './ducks/twits/reducer';
import { TagsReducer } from './tags/reducer';
import { TwitDataReducer } from './tweet/reducer';

export const rootReducer = combineReducers({
    twits: twitsReducer,
    tags: TagsReducer,
    twit: TwitDataReducer,
});
