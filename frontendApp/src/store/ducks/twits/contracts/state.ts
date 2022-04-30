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
    user: {
        fullname: string
        username: string
        avatarUrl: string
    }
}

export interface TwitsState {
    items: Twit[]
    loadingState: LoadingState
}
