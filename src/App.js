import React from 'react';
import './App.css';
import Header from './components/Header';
import {Router} from "@reach/router";
import SearchSong from './components/SearchSong';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <SearchSong path="/"/>
      </Router>
    </div>
  );
}

export default App;
