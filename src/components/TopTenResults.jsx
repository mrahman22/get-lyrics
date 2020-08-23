import React, { Component } from "react";
import {Link} from "@reach/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faMusic } from "@fortawesome/free-solid-svg-icons";

library.add(faPlay, faMusic);

class TopTenResults extends Component {
  state = {
    isLoading: false,
  };

  render() {
    const { songs } = this.props.songs;
    const { isLoading } = this.state;
    if (isLoading) return "...Loading";
    return (
      <div className="results-container">
        <div className="results">
          <h2 className="top-10">Top 10 Songs</h2>
          <ul>
            {songs.map((song) => {
              console.log(song)
              return (
                <li key={song.track.track_id}>
                  <h3>{song.track.track_name} By {song.track.artist_name}</h3>
                  <FontAwesomeIcon icon={faPlay} />
                  <p className="song-play">Track: {song.track.track_name}</p>
                  <br />
                  <FontAwesomeIcon icon={faMusic} />
                  <p className="song-music">Album: {song.track.album_name}</p>
                  <br />
                  <Link to={`/lyrics/${song.track.track_id}`}>
                  <button className="btn-lyrics">Get Lyrics</button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default TopTenResults;
