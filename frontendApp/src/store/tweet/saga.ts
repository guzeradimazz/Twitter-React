
import { takeEvery, call, put } from 'redux-saga/effects';
import { setTwitDataLoadingState, SetTwitData, TwitDataActionsType, FetchTwitDataActionInterface } from './actionCreatores';
import axios from 'axios';
import { LoadingState } from './contracts/state';


export function* fetchDataRequest ({payload:  twitId }:FetchTwitDataActionInterface){
    try {
        const {data} = yield call(axios.get,`/twits?_id=${twitId}`)
        yield put(SetTwitData(data[0]))
    } catch (error) {
        console.log(error);
        yield put(setTwitDataLoadingState(LoadingState.ERROR))
    }
}

export function* twitSaga (){
    yield takeEvery(TwitDataActionsType.FETCH_DATA,fetchDataRequest)
} 
