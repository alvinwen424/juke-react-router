import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';

import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {}
    };
    this.selectAlbum = this.selectAlbum.bind(this);
    this.deselectAlbum = this.deselectAlbum.bind(this);
  }

  render() {
    return (
      <Router>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar />
          </div>
          <div className="col-xs-10">
            <Route exact path="/" component={AllAlbums} />
            <Route exact path="/albums" component={AllAlbums} />
            <Route path="/albums/:albumId" render={({ match }) => (<SingleAlbum albumId={match.params.albumId} />)} />
          </div>
          <Player />
        </div>
      </Router>
    );
  }
}
