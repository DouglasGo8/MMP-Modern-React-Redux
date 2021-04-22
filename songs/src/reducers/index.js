import { combineReducers } from "redux";

// Reducers

/**
 *
 * @returns
 */
const songsReducer = () => {
  return [
    {
      title: "The Bing Hand (Instrumental)",
      duration: "5:03",
      artist: "The Cure",
    },
    {
      title: "Gods Without Name",
      duration: "54:02",
      artist: "Aoratos",
    },
    {
      title: "Far Beyond Insanity",
      duration: "43:58",
      artist: "Hymnr",
    },
    {
      title: "Violent Dreams (Sidewalks and Skeletons REMIX)",
      duration: "3:25",
      artist: "Crystal Castles",
    },
  ];
};

/**
 *
 * @param {*} selectedSong
 * @param {*} action
 */
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

/**
 *
 */
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
