import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faMusic, faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faPlay, faMusic, faHeadphonesAlt);

class SearchSong extends Component {
  state = {
    userInput: "",
  };

  handleinput = (key, value) => {
    this.setState({ [key]: value });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.getUserSong(this.state.userInput);
  };

  render() {
    return (
      <div className="searchSong-container">
        <div className="search-songs">
          <FontAwesomeIcon className="search-icon" icon={faMusic} />
          <h3>Search For A Song</h3>
          <p>Get lyrics for any track</p>
          <input
            type="text"
            className="search-input"
            name="userInput"
            onChange={(e) => this.handleinput("userInput", e.target.value)}
            placeholder="Song title........"
          />
          <br />
          <button className="btn-get_track" onClick={this.handleClick}>
            Get Track
          </button>
        </div>
      </div>
    );
  }
}

export default SearchSong;
