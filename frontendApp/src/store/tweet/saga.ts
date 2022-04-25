
import { takeEvery, call, put } from 'redux-saga/effects';
import { setTwitDataLoadingState, SetTwitData, TwitDataActionsType, FetchTwitDataActionInterface } from './actionCreatores';
import { axios } from '../../core/axios'
import { LoadingState } from './contracts/state';


export function* fetchDataRequest ({payload:  twitId }:FetchTwitDataActionInterface){
    try {
        const {data} = yield call(axios.get,`/twits/${twitId}`)        
        yield put(SetTwitData(data.data))
    } catch (error) {
        console.log(error);
        yield put(setTwitDataLoadingState(LoadingState.ERROR))
    }
}

export function* twitSaga (){
    yield takeEvery(TwitDataActionsType.FETCH_DATA,fetchDataRequest)
} 
