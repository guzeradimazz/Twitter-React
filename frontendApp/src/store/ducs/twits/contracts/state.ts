export enum LoadingState{
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface Twit{
    text: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}

export interface TwitsState {
    items:Twit[];
    loadingState: LoadingState;
}