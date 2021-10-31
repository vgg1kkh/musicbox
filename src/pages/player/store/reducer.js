import { Map } from "immutable"
import { CHANGE_CURRENT_SONG_DETAILS } from "./constants"

const initialState = Map({
    currentSong: {}
})

const songDetailsReducer = (state=initialState,action)=>{
    switch(action.type){
        case CHANGE_CURRENT_SONG_DETAILS:
            return state.set("currentSong",action.payload)
        default: 
        return state
    }
}

export default songDetailsReducer