import { takeLatest, call, put } from 'redux-saga/effects'
import { LogInApi } from '../../../core/LogInApi'
import { LoadingState } from '../twits/contracts/state'
import {
    FetchUserDataActionInterface,
    FethcSignUpActionInterface,
    setUserData,
    setUserDataLoading,
    UserActionsType,
} from './actionCreatores'

export function* fetchSignIn({ payload }: FetchUserDataActionInterface): any {
    try {
        const {data} = yield call(LogInApi.signIn, payload)
        window.localStorage.setItem('token', data.token)
        yield put(setUserData(data))
    } catch (error) {
        yield put(setUserDataLoading(LoadingState.ERROR))
    }
}

export function* fetchSignUp({ payload }: FethcSignUpActionInterface): any {
    try {
        yield put(setUserDataLoading(LoadingState.LOADING))
        yield call(LogInApi.signUp, payload)
        yield put(setUserDataLoading(LoadingState.SUCCESS))
    } catch (error) {
        yield put(setUserDataLoading(LoadingState.ERROR))
    }
}

export function* userSaga() {
    yield takeLatest(UserActionsType.FETCH_SIGNIN, fetchSignIn)
    yield takeLatest(UserActionsType.FETCH_SIGNUP, fetchSignUp)
}
