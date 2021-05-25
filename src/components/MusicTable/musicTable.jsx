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
                    <td key={1}>{song.title}</td>
                    <td key={2}>{song.artist}</td>
                    <td key={3}>{song.album}</td>
                    <td key={4}>{song.release_date}</td>
                    <td key={5}>{song.genre}</td>
                    <td key={6}><button className="btn btn-sm btn-danger" onClick={() => props.deleteSongApi(song.id)}>Delete</button></td>
                </tr>
            )}
        )}
                </tbody>
            </table>
        </div>
    )
}


export default MusicTable;