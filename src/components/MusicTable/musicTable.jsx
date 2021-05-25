import React from 'react';
import './musicTable.css';

const MusicTable = (props) => {
    return (
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
            <tr key={song.id}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
                <td><button className= "button" onClick={() => props.deleteSongApi(song.id)}>Delete</button></td>
            </tr>
        )}
    )}
            </tbody>
        </table>
        
    )
}


export default MusicTable;