import LibrarySong from "./librarySong";

const Library = ({
  songs,
  setCurrentSong,
  isplaying,
  audioRef,
  setSongs,
  currentSong,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setSongs={setSongs}
            isplaying={isplaying}
            audioRef={audioRef}
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
            currentSong={currentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
