import { INCREASEMENT } from "./constants";

const initialState = {
    topBanner:[
        {
            url:"",
            targetId:""
        }
    ]
}

function recomendReducer(state=initialState,action){
    switch(action.type){
        case INCREASEMENT:
            return (
                initialState.
            )
        default: return state;
    }
}