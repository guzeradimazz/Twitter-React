
import { takeLatest, call, put } from 'redux-saga/effects';
import { SetTwits, setTwitsLoadingState, TwitsActionsType } from './actionCreatores';
import axios from 'axios';
import { LoadingState } from './contracts/state';


export function* fetchTwitsRequest (){
    try {
        const {data} = yield call(axios.get,'/twits')
        yield put(SetTwits(data))
         
    } catch (error) {
        yield put(setTwitsLoadingState(LoadingState.ERROR))
    }
}

export function* twitsSaga (){
    yield takeLatest(TwitsActionsType.FETCH_TWITS,fetchTwitsRequest)
}