import React, {Component} from 'react';
import axios from 'axios';

class MusicApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getMusicApi()
    }

    getMusicApi = async () => {
        try {
            let {data} = await axios.get('http://127.0.0.1:8000/music/')
            this.setState({data: data})
            console.log(this.state.data)
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
                        </tr>
                    </thead>
                {this.state.data.map((song) => { 
                return (
                    <tr>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                        <td>{song.genre}</td>
                    </tr>
                )}
            )}
                </table>
            </div>
        )
    }
}

export default MusicApi;