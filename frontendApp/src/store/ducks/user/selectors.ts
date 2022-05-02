import { rootState } from '../../store';
import { LoadingState } from '../twits/contracts/state'
import { UserState } from './contracts/state';

export const selectUserState = (state: rootState): UserState => state.user;

export const selectUserData = (state: rootState): UserState['data'] => selectUserState(state).data;

export const selectUserStatus = (state: rootState): UserState['status'] => selectUserState(state).status;

export const selectUserIsLoading = (state: rootState): boolean=> selectUserState(state).status === LoadingState.LOADING;

