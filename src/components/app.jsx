import React, {Component} from 'react';
import MusicTable from './MusicTable/musicTable';
import SongForm from './SongForm/songForm';
import axios from 'axios';

class App extends Component {
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
            alert(`Whoops! ${ex} Looks like we're having some technical difficulties. Try again later`)
        }
    }

    addSong = () => {
        this.getAllMusicApi()
    }

    render() {
        return(
            <div className="container-fluid">
                <h1>Music Library</h1>
                <br/>
                <MusicTable  data={this.state.data} />
                <SongForm addSong = {(Song) => this.addSong(Song)}/>
            </div>
        )
    }
}

export default App;