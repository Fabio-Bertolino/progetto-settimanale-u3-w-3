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
import { Alert, Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";
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
    <Col sm={12} md={9} className="offset-md-3 mainPage">
      <Row>
        <Col sm={9} lg={11} className=" mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        <Col sm={10}>
          <Container id="search">
            <h2>Search Artist</h2>
            <Row className="imgLinks py-3">
              {isLoading && <Spinner animation="border" variant="light" className="d-block mx-auto" />}
              {queryRowSongs ? (
                queryRowSongs.slice(0, 4).map((song) => (
                  <Col sm={6} lg={4} xl={3} key={song.id} className="text-center pb-3">
                    <Image
                      fluid
                      onClick={() => {
                        dispatch(selectSongAction(song));
                      }}
                      src={song.album.cover_medium}
                      alt="track"
                    />
                    <p>
                      Track: {song.title} <br />
                      Artist: {song.artist.name}
                    </p>
                    {favourites.some((thisSong) => thisSong.id === song.id) ? (
                      <Button
                        className="bg-dark border-0"
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
                  </Col>
                ))
              ) : (
                <Alert variant="warning">No author searched!</Alert>
              )}
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col sm={10}>
          <Container id="rock">
            <h2>Rock Classics</h2>
            <Row className="imgLinks py-3" id="rockSection">
              {isLoading && <Spinner animation="border" variant="light" className="d-block mx-auto" />}
              {firstRowSongs.slice(0, 4).map((song) => (
                <Col sm={6} lg={4} xl={3} key={song.id} className="text-center pb-3">
                  <Image
                    fluid
                    onClick={() => {
                      dispatch(selectSongAction(song));
                    }}
                    src={song.album.cover_medium}
                    alt="track"
                  />
                  <p>
                    Track: {song.title} <br />
                    Artist: {song.artist.name}
                  </p>
                  {favourites.some((thisSong) => thisSong.id === song.id) ? (
                    <Button
                      className="bg-dark border-0"
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
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col sm={10}>
          <Container id="pop">
            <h2>Pop Culture</h2>
            <Row className="imgLinks py-3" id="popSection">
              {isLoading && <Spinner animation="border" variant="light" className="d-block mx-auto" />}
              {secondRowSongs.slice(0, 4).map((song) => (
                <Col sm={6} lg={4} xl={3} key={song.id} className="text-center pb-3">
                  <Image
                    fluid
                    onClick={() => {
                      dispatch(selectSongAction(song));
                    }}
                    src={song.album.cover_medium}
                    alt="track"
                  />
                  <p>
                    Track: {song.title} <br />
                    Artist: {song.artist.name}
                  </p>
                  {favourites.some((thisSong) => thisSong.id === song.id) ? (
                    <Button
                      className="bg-dark border-0"
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
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col sm={10}>
          <Container id="hiphop">
            <h2>#HipHop</h2>
            <Row className="imgLinks py-3" id="hipHopSection">
              {isLoading && <Spinner animation="border" variant="light" className="d-block mx-auto" />}
              {thirdRowSongs.slice(0, 4).map((song) => (
                <Col sm={6} lg={4} xl={3} key={song.id} className="text-center pb-3">
                  <Image
                    fluid
                    onClick={() => {
                      dispatch(selectSongAction(song));
                    }}
                    src={song.album.cover_medium}
                    alt="track"
                  />
                  <p>
                    Track: {song.title} <br />
                    Artist: {song.artist.name}
                  </p>
                  {favourites.some((thisSong) => thisSong.id === song.id) ? (
                    <Button
                      className="bg-dark border-0"
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
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Col>
  );
};

export default HomePage;
