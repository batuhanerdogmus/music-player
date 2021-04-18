import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  currentSong,
  songs,
  isplaying,
  audioRef,
  setSongs,
  id,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    //add active state

    const newSong = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSong);
    //alternative
    //songs.map(s => song.id !== s.id ? s.active = false : s.active = true)
  };

  if (isplaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${
        song.id === currentSong.id ? "selected" : ""
      } `}
    >
      <img alt={song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
