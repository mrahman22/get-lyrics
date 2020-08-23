import React, { Component } from "react";
import * as api from "../utilities/api";
import TopTenResults from "./TopTenResults";
import SearchSong from "./SearchSong";


class Home extends Component {
  state = {
    songs: [],
    isLoading: true,
    searchSong: true,
  };

  componentDidMount() {
    this.getTopTenTracks();
    this.getUserSong();
  }

  getTopTenTracks = () => {
    api.fetchTopTenTracks().then((songs) => {
      this.setState({ songs, isLoading: false });
    });
  };

  getUserSong = (track) => {
    api.fetchSelectedUserSong(track).then((songs) => {
      this.setState({ songs, isLoading: false });
    });
  };

  render() {
    return (
      <>
        <SearchSong getUserSong={this.getUserSong} />
        <TopTenResults songs={this.state} />
      </>
    );
  }
}

export default Home;
