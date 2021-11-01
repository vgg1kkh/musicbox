import { getCurrentSongDetails } from "../../../services/player";
import { CHANGE_CURRENT_SONG_DETAILS ,CHANGE_LYRIC_LIST} from "./constants";

const changeCurrentSongDetails = (data) => ({
  type: CHANGE_CURRENT_SONG_DETAILS,
  payload: data,
});

export const createSongDetailsAction = (ids) => {
  return (dispatch) => {
    getCurrentSongDetails(ids).then((res) => {
      dispatch(changeCurrentSongDetails(res.songs[0]));
    });
  };
};

export const changeCurrentSongAction = (ids) => ({

})

export const changePlayListAction = list => ({
    ty
})