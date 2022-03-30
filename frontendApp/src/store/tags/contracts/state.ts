export enum LoadingState {
    LOADED = 'LOADED',
    NEVER = 'NEVER',
    LOADING = 'LOADING',
    ERROR = 'ERROR'
}

export interface Tag {
    _id:string;
    title:string;
    count:number;
}

export interface TagsState {
    items: Tag[];
    loadingState: LoadingState;
}
