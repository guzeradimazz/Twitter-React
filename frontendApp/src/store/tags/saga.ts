
import { takeLatest, call, put } from 'redux-saga/effects';
import { SetTags, setTagsLoadingState, TagsActionsType } from './actionCreatores';
import { axios } from '../../core/axios'
import { LoadingState } from './contracts/state';


export function* fetchTagsRequest (){
    try {
        const {data} = yield call(axios.get,'/tags')
        yield put(SetTags(data))
         
    } catch (error) {
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }
}

export function* tagsSaga (){
    yield takeLatest(TagsActionsType.FETCH_TAGS,fetchTagsRequest)
}