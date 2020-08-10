import React from "react";
import Results from "./Results";

function SearchSong() {
  return (
    <>
      <div className="searchSong-container">
        <div className="search-songs">
          <h3>Search For A Song</h3>
          <p>Get lyrics for any track</p>
          <input type="text" placeholder="Song title" />
          <br />
          <button>Get Track</button>
        </div>
      </div>
      <Results />
    </>
  );
}

export default SearchSong;
