import axios from "axios"; 
import {myApiKey} from "../apiKey";


const baseUrl =
  "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1";



export const fetchTopTenTracks = () => {
  return axios
    .get(
      `${baseUrl}/chart.tracks.get?&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${myApiKey.key}`
    )
    .then(({ data }) => {
      console.log(data)
      return data.message.body.track_list;
    });
};

export const fetchSelectedUserSong = (track) => {
  return axios
    .get(
      `${baseUrl}/track.search?q_track=${track}&page_size=10&page=1&s_track_rating=desc&apikey=${myApiKey.key}`
    )
    .then(({ data }) => {
      return data.message.body.track_list;
    });
};

export const fetchSongLyricsById = (track_id) => {
  return axios
    .get(`${baseUrl}/track.lyrics.get?track_id=${track_id}&apikey=${myApiKey.key}`)
    .then(({ data }) => {
      console.log(data)
      return data.message.body.lyrics;
    })
};

export const fetchSongById = (track_id) => {
  return axios
    .get(`${baseUrl}/track.get?track_id=${track_id}&apikey=${myApiKey.key}`)
    .then(({ data }) => {
      return data.message.body.track;
    })
};