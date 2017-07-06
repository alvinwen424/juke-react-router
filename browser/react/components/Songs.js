import React from 'react';

const Songs = (props) => {

  const songs = props.songs;

  return (
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>Name</th>
          <th>Artists</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {
          songs && songs.map(song => (
            <tr key={song.id} style={
              props.currentSong.id === song.id
              ? {backgroundColor: '#606060'}
              : {backgroundColor: '#303030'}} >
              <td>
                <button className="btn btn-default btn-xs" onClick={() => props.toggleOne(song, songs)} >
                  <span className={
                    props.isPlaying && props.currentSong.id === song.id
                    ? "glyphicon glyphicon-pause"
                    : "glyphicon glyphicon-play"
                  } />
                </button>
              </td>
              <td>{song.name}</td>
              <td>
                <span>{song.artists ? song.artists.map(artist => artist.name).join(', ') : null}</span>
              </td>
              <td>{song.genre}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Songs;
