import React, { Component } from 'react';
import axios from 'axios';

import Songs from '../components/Songs';

export default class SingleAlbum extends Component {
  constructor() {
    super();
    this.state = {
      album: {
        songs: []
      }
    };
  }

  componentDidMount() {
    axios.get(`/api/albums/${this.props.albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        album
      }));
  }

  render() {
    const album = this.state.album;

    return (
      <div className="album">
        <div>
          <h3>{album.name}</h3>
          <img src={album.imageUrl} className="img-thumbnail" />
        </div>
        <Songs {...this.props} songs={album.songs} />
      </div>
    );
  }
}
