import { rootState } from '../../store';
import { UserState } from './contracts/state';

export const selectUserState = (state: rootState): UserState => state.user;

export const selectUserData = (state: rootState): UserState['data'] => selectUserState(state).data;

export const selectUserStatus = (state: rootState): UserState['status'] => selectUserState(state).status;

