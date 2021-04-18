import React, { useState, useRef } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/library";
import Nav from "./components/Nav";

import data from "./util";
import "./styles/app.scss";

function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isplaying, setIsplaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  //audioRef
  const audioRef = useRef(null);

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        audioRef={audioRef}
        isplaying={isplaying}
        setIsplaying={setIsplaying}
        currentSong={currentSong}
      />
      <Library
        libraryStatus={libraryStatus}
        setSongs={setSongs}
        audioRef={audioRef}
        isplaying={isplaying}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        songs={songs}
      />
    </div>
  );
}

export default App;
