import { useDispatch, useSelector } from "react-redux";
import { addToFavouritesAction, removeFromFavouritesAction, selectSongAction } from "../redux/actions";
import { Alert, Button } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";

const Favourites = () => {
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.favourites.content);

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
          <div id="favourites">
            <h2>Favourite songs</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {favourites.length > 0 ? (
                favourites.map((song) => (
                  <div key={song.id} className="col text-center pb-3">
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
                  </div>
                ))
              ) : (
                <>
                  <Alert variant="warning">No favourites at the moment...</Alert>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Favourites;
