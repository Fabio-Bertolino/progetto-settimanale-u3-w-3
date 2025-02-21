import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import fetchSongsReducer from "../reducers/fetchSongsReducer";
import selectSongReducer from "../reducers/songSelectReducer";

const rootReducer = combineReducers({
  favourites: favouriteReducer,
  fetchSongs: fetchSongsReducer,
  select: selectSongReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
