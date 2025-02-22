import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import SideBar from "./components/SideBar";
import HomePage from "./components/Homepage";
import Player from "./components/Player";
import Favourites from "./components/Favourites";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <SideBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </Container>
        <Container fluid className="fixed-bottom bg-container pt-1">
          <Player />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
