import { Button, Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToFavouritesAction, removeFromFavouritesAction } from "../redux/actions";
import { Heart, HeartFill } from "react-bootstrap-icons";

const Player = () => {
  const selectSong = useSelector((state) => state.select.content);
  const favourites = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();

  return (
    <Row className="h-100">
      <Col lg={10} className="offset-lg-2">
        <Row>
          <Col className="d-flex align-items-center">
            {selectSong ? (
              <>
                <Image src={selectSong.album.cover_small} alt={selectSong.title_short} />{" "}
                <div className="d-flex flex-column justify-content-center ps-5">
                  <h6 className="text-light">{selectSong.title}</h6>
                  <p className="text-light m-0">{selectSong.artist.name}</p>
                </div>
              </>
            ) : (
              <></>
            )}
          </Col>
          <Col>
            <Row className="h-100 flex-column justify-content-center align-items-center">
              <Col className="playerControls">
                <div className="d-flex">
                  <a href="#">
                    <Image src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <Image src="assets/playerbuttons/prev.png" alt="prev" />
                  </a>
                  <a href="#">
                    <Image src="assets/playerbuttons/play.png" alt="play" />
                  </a>
                  <a href="#">
                    <Image src="assets/playerbuttons/next.png" alt="next" />
                  </a>
                  <a href="#">
                    <Image src="assets/playerbuttons/repeat.png" alt="repeat" />
                  </a>
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            {selectSong ? (
              <>
                {favourites.some((thisSong) => thisSong.id === selectSong.id) ? (
                  <Button
                    className="bg-transparent border-0"
                    onClick={() => {
                      dispatch(removeFromFavouritesAction(selectSong));
                    }}
                  >
                    <HeartFill className="text-danger fs-5" />
                  </Button>
                ) : (
                  <Button
                    className="bg-transparent border-0"
                    onClick={() => {
                      dispatch(addToFavouritesAction(selectSong));
                    }}
                  >
                    <Heart className="fs-5" />
                  </Button>
                )}
              </>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Player;
