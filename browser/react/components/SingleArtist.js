import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

import Songs from './Songs';
import AllAlbums from './AllAlbums';

export default class SingleArtist extends Component {
    constructor() {
        super();
        this.state = {
            artist: {},
            albums: [],
            songs: []
        };
    }

    componentDidMount() {
        Promise.all([
            axios.get(`/api/artists/${this.props.artistId}`)
                .then(res => res.data),
            axios.get(`/api/artists/${this.props.artistId}/albums`)
                .then(res => res.data),
            axios.get(`/api/artists/${this.props.artistId}/songs`)
                .then(res => res.data),
        ])
            .then(([artist, albums, songs]) => {
                this.setState({
                    artist,
                    albums,
                    songs
                });
            })
            .catch((err) => console.error(err));
    }

    render() {
        const artist = this.state.artist;
        const songs = this.state.songs;
        const albums = this.state.albums;

        return (
            <Router>
                <div>
                    <h3>{artist.name}</h3>
                    <ul className="nav nav-tabs">
                        <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
                        <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
                    </ul>

                    <Route path={`/artists/${artist.id}/albums`} render={() => <AllAlbums albums={albums} />} />
                    <Route path={`/artists/${artist.id}/songs`} render={() => <Songs {...this.props} songs={songs} />} />
                </div>
            </Router>
        );
    }
}
