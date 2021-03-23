import React from "react";

const LibrarySong = ({ song, songs, setCurrentSong, currentSong, id }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.id === currentSong.id ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-details">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
