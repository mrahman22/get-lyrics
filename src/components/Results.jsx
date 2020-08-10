import React, { Component } from "react";

class Results extends Component {
  state = {
    songs: [
      {
        trackName: "Imagine Dragons",
        track: "Natural",
        Album: "New Songs",
      },
      {
        trackName: "Emined",
        track: "Badboys",
        Album: "8 Mile",
      },
    ],
  };

  render() {
    return (
      <div className="results-container">
        <div className="results">
          <ul>
            {this.state.songs.map((song) => {
              return (
                <li>
                  <h3>{song.trackName}</h3>
                  <p>{song.track}</p>
                  <p>{song.Album}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Results;
