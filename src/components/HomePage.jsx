import { useDispatch, useSelector } from "react-redux";
import {
  fetchFirstRowSongsAction,
  fetchSecondRowSongsAction,
  fetchThirdRowSongsAction,
  addToFavouritesAction,
  removeFromFavouritesAction,
  selectSongAction,
} from "../redux/actions";
import { useEffect } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";

const HomePage = () => {
  const firstRowSongs = useSelector((state) => state.fetchSongs.firstRowContent);
  const secondRowSongs = useSelector((state) => state.fetchSongs.secondRowContent);
  const thirdRowSongs = useSelector((state) => state.fetchSongs.thirdRowContent);
  const queryRowSongs = useSelector((state) => state.fetchSongs.queryRowContent);
  const isLoading = useSelector((state) => state.fetchSongs.isLoading);

  //   const selectSong = useSelector((state) => state.select.content);

  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.favourites.content);

  useEffect(() => {
    dispatch(fetchFirstRowSongsAction("Queen"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(fetchSecondRowSongsAction("Katy Perry"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(fetchThirdRowSongsAction("Eminem"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="search">
            <h2>Search Artist</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {isLoading && <Spinner animation="border" variant="light" className="d-block mx-auto" />}
              {queryRowSongs ? (
                queryRowSongs.slice(0, 4).map((song) => (
                  <div key={song.id} className="col text-center">
                    <img
                      onClick={() => {
                        dispatch(selectSongAction(song));
                      }}
                      className="img-fluid"
                      src={song.album.cover_medium}
                      alt="track"
                    />
                    <p>
                      Track: {song.title} <br />
                      Artist: {song.artist.name}
                    </p>
                    {favourites.some((thisSong) => thisSong.id === song.id) ? (
                      <Button
                        className="bg-dark"
                        onClick={() => {
                          dispatch(removeFromFavouritesAction(song));
                        }}
                      >
                        <HeartFill className="text-danger" />
                      </Button>
                    ) : (
                      <Button
                        className="bg-dark border-0"
                        onClick={() => {
                          dispatch(addToFavouritesAction(song));
                        }}
                      >
                        <Heart />
                      </Button>
                    )}
                  </div>
                ))
              ) : (
                <Alert variant="warning">No author searched!</Alert>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              {isLoading && <Spinner animation="border" variant="light" className="d-block mx-auto" />}
              {firstRowSongs.slice(0, 4).map((song) => (
                <div key={song.id} className="col text-center">
                  <img
                    onClick={() => {
                      dispatch(selectSongAction(song));
                    }}
                    className="img-fluid"
                    src={song.album.cover_medium}
                    alt="track"
                  />
                  <p>
                    Track: {song.title} <br />
                    Artist: {song.artist.name}
                  </p>
                  {favourites.some((thisSong) => thisSong.id === song.id) ? (
                    <Button
                      className="bg-dark"
                      onClick={() => {
                        dispatch(removeFromFavouritesAction(song));
                      }}
                    >
                      <HeartFill className="text-danger" />
                    </Button>
                  ) : (
                    <Button
                      className="bg-dark border-0"
                      onClick={() => {
                        dispatch(addToFavouritesAction(song));
                      }}
                    >
                      <Heart />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              {isLoading && <Spinner animation="border" variant="light" className="d-block mx-auto" />}
              {secondRowSongs.slice(0, 4).map((song) => (
                <div key={song.id} className="col text-center">
                  <img
                    onClick={() => {
                      dispatch(selectSongAction(song));
                    }}
                    className="img-fluid"
                    src={song.album.cover_medium}
                    alt="track"
                  />
                  <p>
                    Track: {song.title} <br />
                    Artist: {song.artist.name}
                  </p>
                  {favourites.some((thisSong) => thisSong.id === song.id) ? (
                    <Button
                      className="bg-dark"
                      onClick={() => {
                        dispatch(removeFromFavouritesAction(song));
                      }}
                    >
                      <HeartFill className="text-danger" />
                    </Button>
                  ) : (
                    <Button
                      className="bg-dark border-0"
                      onClick={() => {
                        dispatch(addToFavouritesAction(song));
                      }}
                    >
                      <Heart />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              {isLoading && <Spinner animation="border" variant="light" className="d-block mx-auto" />}
              {thirdRowSongs.slice(0, 4).map((song) => (
                <div key={song.id} className="col text-center">
                  <img
                    onClick={() => {
                      dispatch(selectSongAction(song));
                    }}
                    className="img-fluid"
                    src={song.album.cover_medium}
                    alt="track"
                  />
                  <p>
                    Track: {song.title} <br />
                    Artist: {song.artist.name}
                  </p>
                  {favourites.some((thisSong) => thisSong.id === song.id) ? (
                    <Button
                      className="bg-dark"
                      onClick={() => {
                        dispatch(removeFromFavouritesAction(song));
                      }}
                    >
                      <HeartFill className="text-danger" />
                    </Button>
                  ) : (
                    <Button
                      className="bg-dark border-0"
                      onClick={() => {
                        dispatch(addToFavouritesAction(song));
                      }}
                    >
                      <Heart />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
