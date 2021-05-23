import React, {Component} from 'react';
import './musicTable.css';
import axios from 'axios';

class MusicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getAllMusicApi()

    }

    getAllMusicApi = async () => {
        try {
            let {data} = await axios.get('http://127.0.0.1:8000/music/')
            this.setState({data: data})
            console.log(this.state.data)
        }
        catch(ex) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    deleteSongApi = async (id) => {
        console.log(`http://127.0.0.1:8000/music/${id}/`)
        try {
            let {data} = await axios.delete(`http://127.0.0.1:8000/music/${id}/`)
            console.log(data)
            const Data = this.state.data.filter(item => item.id !== id);
            this.setState({
                data: Data
            })
            this.componentDidMount()
        }
        catch(ex) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    postSongApi = async () => {
        try {
            let {data} = await axios.post(`http://127.0.0.1:8000/music/`)
            console.log(data)
            this.setState({
                data: data
            })
            this.componentDidMount()
        }
        catch(ex) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    render() {
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
                {this.state.data.map((song) => { 
                return (
                    <tr>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                        <td>{song.genre}</td>
                        <td><button className="btn btn-sm btn-danger" onClick={() => this.deleteSongApi(song.id)}>Delete</button></td>
                    </tr>
                )}
            )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MusicTable;