export const IS_LOADING_ON = "IS_LOADING_ON";
export const IS_LOADING_OFF = "IS_LOADING_OFF";
export const SET_FIRST_ROW_SONGS = "SET_FIRST_ROW_SONGS";
export const SET_SECOND_ROW_SONGS = "SET_SECOND_ROW_SONGS";
export const SET_THIRD_ROW_SONGS = "SET_THIRD_ROW_SONGS";
export const SET_QUERY_ROW_SONGS = "SET_QUERY_ROW_SONGS";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SELECT_SONG = "SELECT_SONG";

export const addToFavouritesAction = (fav) => ({
  type: ADD_TO_FAVOURITES,
  payload: fav,
});

export const removeFromFavouritesAction = (fav) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: fav.id,
});

export const selectSongAction = (song) => ({
  type: SELECT_SONG,
  payload: song,
});

export const fetchFirstRowSongsAction = (artistName) => {
  return async (dispatch) => {
    dispatch({ type: IS_LOADING_ON });
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let songs = await response.json();
        console.log(songs);
        dispatch({ type: SET_FIRST_ROW_SONGS, payload: songs.data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    } finally {
      dispatch({ type: IS_LOADING_OFF });
    }
  };
};

export const fetchSecondRowSongsAction = (artistName) => {
  return async (dispatch) => {
    dispatch({ type: IS_LOADING_ON });
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let songs = await response.json();
        console.log(songs);
        dispatch({ type: SET_SECOND_ROW_SONGS, payload: songs.data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    } finally {
      dispatch({ type: IS_LOADING_OFF });
    }
  };
};

export const fetchThirdRowSongsAction = (artistName) => {
  return async (dispatch) => {
    dispatch({ type: IS_LOADING_ON });
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let songs = await response.json();
        console.log(songs);
        dispatch({ type: SET_THIRD_ROW_SONGS, payload: songs.data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    } finally {
      dispatch({ type: IS_LOADING_OFF });
    }
  };
};

export const fetchQueryRowSongsAction = (artistName) => {
  return async (dispatch) => {
    dispatch({ type: IS_LOADING_ON });
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let songs = await response.json();
        console.log(songs);
        dispatch({ type: SET_QUERY_ROW_SONGS, payload: songs.data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    } finally {
      dispatch({ type: IS_LOADING_OFF });
    }
  };
};
