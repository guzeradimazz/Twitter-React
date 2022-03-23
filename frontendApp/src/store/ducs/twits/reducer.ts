import produce,{Draft} from 'immer'
import { TwitsActions, TwitsActionsType } from './actionCreatores';
import { LoadingState, TwitsState } from './contracts/state'

export const initialTwitsState:TwitsState={
    items:[],
    loadingState:LoadingState.NEVER,   
};

export const twitsReducer = produce((draft: Draft<TwitsState>,action:TwitsActions)=>{
    const {type,payload} = action
    switch(type){
        case TwitsActionsType.SET_TIWTS:
            draft.items = payload
            break;
    }

},initialTwitsState);