import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import { TwitsState } from './ducks/twits/contracts/state'
import { TagsState } from './tags/contracts/state'
import { TwitDataState } from './tweet/contracts/state'
import { UserState } from './ducks/user/contracts/state'

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

export interface rootState {
    twits: TwitsState
    tags: TagsState
    twit: TwitDataState
    user: UserState
}

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)
