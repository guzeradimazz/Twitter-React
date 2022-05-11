import { takeLatest, call, put } from 'redux-saga/effects'
import {
    AddTwit,
    FetchAddTwitActionInterface,
    SetTwits,
    setTwitsLoadingState,
    TwitsActionsType,
} from './actionCreatores'
import { axios } from '../../../core/axios'
import { LoadingState, Twit } from './contracts/state'

export function* fetchTwitsRequest() {
    try {
        const { data } = yield call(axios.get, '/twits')
        yield put(SetTwits(data.data))
    } catch (error) {
        yield put(setTwitsLoadingState(LoadingState.ERROR))
    }
}
async function addTwitFunction(payload: {
    text: string
    images: string[]
}): Promise<Twit> {
    const { data } = await axios.post('/twits', payload)
    return data
}
export function* addTwitRequest({ payload }: FetchAddTwitActionInterface) {
    try {
        const item: Twit = yield call(addTwitFunction, payload)
        yield put(AddTwit(item))
    } catch (error) {
        yield put(setTwitsLoadingState(LoadingState.ERROR))
    }
}

export function* twitsSaga() {
    yield takeLatest(TwitsActionsType.FETCH_TWITS, fetchTwitsRequest)
    yield takeLatest(TwitsActionsType.FETCH_ADD_TWIT, addTwitRequest)
}
