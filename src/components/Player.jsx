import { Col, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Player = () => {
  const selectSong = useSelector((state) => state.select.content);

  return (
    <div className="row h-100">
      <div className="col-lg-10 offset-lg-2">
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
            <div className="row h-100 flex-column justify-content-center align-items-center">
              <div className="col playerControls">
                <div className="d-flex">
                  <a href="#">
                    <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="assets/playerbuttons/prev.png" alt="prev" />
                  </a>
                  <a href="#">
                    <img src="assets/playerbuttons/play.png" alt="play" />
                  </a>
                  <a href="#">
                    <img src="assets/playerbuttons/next.png" alt="next" />
                  </a>
                  <a href="#">
                    <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                  </a>
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
};

export default Player;
