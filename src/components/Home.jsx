import React, { Component } from "react";
import * as api from "../utilities/api";
import TopTenResults from "./TopTenResults";
import Loading from "./Loading";
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
      if(songs) {
        this.setState({ songs, isLoading: false });
      } else {
        this.setState({ songs: ""});
      }
    });
  };

  getUserSong = (track) => {
    api.fetchSelectedUserSong(track).then((songs) => {
      if(songs) {
        this.setState({ songs, isLoading: false });
      } else {
        this.setState({ songs: ""});
      }
    });
  };

  render() {
    if(this.state.isLoading) return <Loading />
    return (
      <>
        <SearchSong getUserSong={this.getUserSong} />
        <TopTenResults songs={this.state} />
      </>
    );
  }
}

export default Home;
