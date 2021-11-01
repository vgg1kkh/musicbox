import { getCurrentSongDetails } from "../../../services/player";
import {
  CHANGE_CURRENT_SONG_DETAILS,
  CHANGE_LYRIC_LIST,
  CHANGE_PLAY_LIST,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_PLAY_SEQUENCE,
} from "./constants";
import { getRandomNumber } from "@/utils/math-utils";

const changeCurrentSongDetails = (data) => ({
  type: CHANGE_CURRENT_SONG_DETAILS,
  payload: data,
});

export const createSongDetailsAction = (ids) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    const index = playList.findIndex((item) => item.id === ids);

    if (index !== -1) {
      dispatch(changeCurrentSongIndexAction(index));
      dispatch(changeCurrentSongDetails(playList[index]));
    } else {
      getCurrentSongDetails(ids).then((res) => {
        console.log("new Song=", res);
        const song = res.songs && res.songs[0];
        if (!song) return;
        const newPlayList = [...playList];
        newPlayList.push(song);
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongDetails(song));
      });
    }
  };
};

export const changeCurrentSongAction = (ids) => ({});

export const changePlayListAction = (list) => ({
  type: CHANGE_PLAY_LIST,
  payload: list,
});

export const changeCurrentSongIndexAction = (id) => ({
  type: CHANGE_CURRENT_SONG_INDEX,
  payload: id,
});

export const changeSequenceAction = (sequence) => ({
  type: CHANGE_PLAY_SEQUENCE,
  payload: sequence,
});

export const changeCurrentSong = (tag) => {
  return (dispatch, getState) => {
    const sequence = getState().getIn(["player", "sequence"]);
    const currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    const playList = getState().getIn("player", "playList");
    
    let newSongIndex
    switch (sequence) {
      
      case 0: //random
        newSongIndex = -1;
        while (currentSongIndex === newSongIndex) {
          newSongIndex = getRandomNumber(playList.length);
        }
        break;
      default:
        //sequence & single
        newSongIndex = currentSongIndex + tag;
        if (newSongIndex >= playList.length) {
          newSongIndex = 0;
        } else if (newSongIndex < 0) {
          newSongIndex = playList.length - 1;
        }
    }
  };
};
