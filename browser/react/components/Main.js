import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import StatefulAlbums from './StatefulAlbums';
import SingleAlbum from './SingleAlbum';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import Sidebar from './Sidebar';
import Player from './Player';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar />
          </div>
          <div className="col-xs-10">
            <Route exact path="/" component={StatefulAlbums} />
            <Route exact path="/albums" component={StatefulAlbums} />
            <Route path="/albums/:albumId" render={ ({ match }) => (<SingleAlbum albumId={match.params.albumId} />)} />
            <Route exact path="/artists" component={AllArtists} />
            <Route path="/artists/:artistId" render={ ({ match }) => (<SingleArtist artistId={match.params.artistId} />)} />
          </div>
          <Player />
        </div>
      </Router>
    );
  }
}
