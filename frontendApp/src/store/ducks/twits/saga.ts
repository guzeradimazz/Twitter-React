import { takeLatest, call, put } from 'redux-saga/effects';
import {
    AddTwit,
    FetchAddTwitActionInterface,
    SetTwits,
    setTwitsLoadingState,
    TwitsActionsType
} from './actionCreatores';
import axios from 'axios';
import { LoadingState, Twit, TwitsState } from './contracts/state'



export function* fetchTwitsRequest(){
    try {
        const { data } = yield call(axios.get, '/twits');
        yield put(SetTwits(data.data));
    } catch (error) {
        yield put(setTwitsLoadingState(LoadingState.ERROR));
    }
}
async function addTwitFunction(payload: Twit): Promise<Twit> {
    const { data } = await axios.post('/twits', payload)
    return data
}
export function* addTwitRequest({ payload }: FetchAddTwitActionInterface) {
    try {
        const data: Twit = {
            _id: Math.random().toString(36).substring(2),
            text: payload,
            user: {
                fullname: 'Test user',
                username: 'test',
                avatarUrl: 'https://random.imagecdn.app/100/100?5'
            }
        };
        const item: Twit = yield call(addTwitFunction, data);
        yield put(AddTwit(item));
    } catch (error) {
        yield put(setTwitsLoadingState(LoadingState.ERROR));
    }
}

export function* twitsSaga() {
    yield takeLatest(TwitsActionsType.FETCH_TWITS, fetchTwitsRequest);
    yield takeLatest(TwitsActionsType.FETCH_ADD_TWIT, addTwitRequest);
}
