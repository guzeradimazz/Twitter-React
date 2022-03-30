export enum LoadingState {
    LOADED = 'LOADED',
    NEVER = 'NEVER',
    LOADING = 'LOADING',
    ERROR = 'ERROR'
}

export interface Twit {
    _id:string;
    text: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}

export interface TwitsState {
    items: Twit[];
    loadingState: LoadingState;
}
