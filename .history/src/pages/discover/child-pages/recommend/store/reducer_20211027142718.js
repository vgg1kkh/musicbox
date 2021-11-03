import { Map } from 'immutable'
import { CHANGE_TOP_BANNERS ,CHANGE_HOT_RECOMMEND,CHANGE_NEW_ALBUM} from "./constants";

const initialState = Map({
    topBanner:[],
    hotRecommend:[],
    newAlbum:[]
})

function recommendReducer(state=initialState,action){
    switch(action.type){
        case CHANGE_TOP_BANNERS:
            return (
                // {...state, topBanner:action.payload}
                // use set method for immutableJS
                state.set("topBanner", action.payload)
            )
        case CHANGE_HOT_RECOMMEND:
            return(
                state.set("hotRecommend",action.payload)
            )
        case CHANGE_NEW_ALBUM:
            return(
                state.set("newAlbum")
            )
        default: return state;
    }
}

export default recommendReducer