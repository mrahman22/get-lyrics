import React, { Component } from "react";
import * as api from "../utilities/api";
import { Link } from "@reach/router";

class LyricsPage extends Component {
  state = {
    song: [
      {
        track_name: "Natural",
        artist_name: "Imagine Dragons",
        album_id: 1233333,
        song_genre: "alternative",
        explicit_words: "No",
        release_date: "07/10/2000",
      },
    ],
    track: [],
    lyrics_body: "",
    isLoading: true,
  };

  componentDidMount() {
    this.getSongLyricsById();
    this.getSongById();
  }

  getSongLyricsById = () => {
    const { track_id } = this.props;
    api.fetchSongLyricsById(track_id).then((lyrics) => {
      this.setState({
        lyrics_body: lyrics.lyrics_body,
        explicit_words: lyrics.explicit,
        isLoading: false,
      });
    });
  };

  getSongById = () => {
    const { track_id } = this.props;
    api.fetchSongById(track_id).then((track) => {
      this.setState({ track, isLoading: false });
    });
  };

  render() {
    const { track } = this.state;
    console.log(track)
    return (
      <div className="lyrics-container">
        <div className="lyrics">
          <Link to={`/`}>
            <button className="btn-back">BACK</button>
          </Link>{" "}
          <div className="top-part-lyrics">
            <h2>
              {track.track_name} By {track.artist_name}
            </h2>
            <p>{this.state.lyrics_body}</p>
          </div>
          <div className="bottom-part-lyrics">
            <p>Album ID: {track.album_id}</p>
            <p>Song Genre: {track.song_genre}</p>
            <p>Explicit Words: {track.explicit}</p>
            <p>First Release date: {track.updated_time}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LyricsPage;
