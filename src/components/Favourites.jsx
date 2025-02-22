import { useDispatch, useSelector } from "react-redux";
import { addToFavouritesAction, removeFromFavouritesAction, selectSongAction } from "../redux/actions";
import { Alert, Button, Col, Container, Image, Row } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";

const Favourites = () => {
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.favourites.content);

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
          <Container id="favourites">
            <h2>Favourite songs</h2>
            <Row className="imgLinks py-3">
              {favourites.length > 0 ? (
                favourites.map((song) => (
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
                <>
                  <Alert variant="warning">No favourites at the moment...</Alert>
                </>
              )}
            </Row>
          </Container>
        </Col>
      </Row>
    </Col>
  );
};

export default Favourites;
