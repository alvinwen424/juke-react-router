import React, { Component } from 'react';
import axios from 'axios';

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
            <div className="artist">
                <h3>{artist.name}</h3>
                <AllAlbums albums={albums} />
                <Songs songs={songs} />
            </div>
        );
    }
}
