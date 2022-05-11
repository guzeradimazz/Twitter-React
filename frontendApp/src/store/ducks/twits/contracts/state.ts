export enum LoadingState {
    LOADED = 'LOADED',
    NEVER = 'NEVER',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    SUCCESS = 'SUCCESS',
}

export interface Twit {
    _id: string
    text: string
    createdAt: string
    images?:[]
    user: {
        fullname: string
        username: string
        avatarUrl: string
    }
    like: number
}

export interface TwitsState {
    items: Twit[]
    loadingState: LoadingState
}
