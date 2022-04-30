import { all } from 'redux-saga/effects'
import { twitsSaga } from './ducks/twits/saga'
import { userSaga } from './ducks/user/saga'
import { tagsSaga } from './tags/saga'
import { twitSaga } from './tweet/saga'

export default function* rootSaga() {
    yield all([twitsSaga(), tagsSaga(), twitSaga(), userSaga()])
}
