import React, {Component} from 'react';
import MusicTable from './MusicTable/musicTable';
import SongForm from './SongForm/songForm';
import SearchBar from './SearchBar/searchBar';
// Add bootstrap in App Component before CSS so that CSS will overwrite unwanted bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            search: ''
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
            alert(`Whoops! ${ex} Looks like we're having some technical difficulties. Try again later`)
        }
    }

    deleteSongApi = async (id) => {
        console.log(`http://127.0.0.1:8000/music/${id}/`)
        try {
            let {data} = await axios.delete(`http://127.0.0.1:8000/music/${id}/`)
            console.log(data)
            this.getAllMusicApi()
        }
        catch(ex) {
            alert(`Whoops! ${ex} Looks like we're having some technical difficulties. Try again later`)
        }
    }

    addSong = () => {
        this.getAllMusicApi()
    }

    filter = (search) => {
        console.log(`Reached filter method looking for ${search}`, this.state.data)
        const data = this.state.data.filter(key =>
            key.title.includes(search) ||
            key.artist.includes(search) ||
            key.album.includes(search) ||
            key.release_date.includes(search) ||
            key.genre.includes(search) 
        )
        this.setState({
            data: data
        })
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <h1 className="header my-5 mx-5">Music Library</h1>
                </div>
                <div className="search-bar my-4">
                    <SearchBar getAllMusicApi = {() => this.getAllMusicApi()} filter = {(search) => this.filter(search)} />
                </div>
                <div className="music-row my-5">
                    <div className="music-table">
                        <MusicTable  data={this.state.data} deleteSongApi={(id) => this.deleteSongApi(id)} />
                    </div>
                    <div className="song-form">
                        <SongForm addSong = {() => this.addSong()}/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App;