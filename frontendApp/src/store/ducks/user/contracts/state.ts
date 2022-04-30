import { LoadingState } from "../../twits/contracts/state"

export interface User {
    _id?: String
    email: String
    fullname: String
    username: String
    location?: String
    password: String
    confirmed: boolean
    confirmedHash: String
    about?: String
    website?: String
}

export interface UserState {
    data: User | undefined,
    status:LoadingState
}