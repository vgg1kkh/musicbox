import { getCurrentSongDetails } from "../../../services/player"


const changeCurrentSongDetails= (data)=>()

export const createSongDetailsAction = (ids) =>{
    return (dispatch)=>{
        getCurrentSongDetails(ids).then(res=>console.log(res))
        dispatch(changeCurrentSongDetails)
    }
}