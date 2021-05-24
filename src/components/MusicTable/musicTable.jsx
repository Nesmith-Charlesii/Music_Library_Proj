import React from 'react';
import './musicTable.css';

const MusicTable = (props) => {
    return (
        <div className="music-library-table">
            <table>
                <thead>
                    <tr>
                        <th>Song Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
            {props.data.map((song) => { 
            return (
                <tr>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.release_date}</td>
                    <td>{song.genre}</td>
                    <td><button className="btn btn-sm btn-danger" onClick={() => this.props.deleteSongApi(song.id)}>Delete</button></td>
                </tr>
            )}
        )}
                </tbody>
            </table>
        </div>
    )
}


export default MusicTable;