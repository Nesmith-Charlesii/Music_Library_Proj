import React, {Component} from 'react';
import MusicTable from './MusicTable/musicTable';
import SongForm from './SongForm/songForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        return(
            <div className="container-fluid">
                <h1>Music Library</h1>
                <br/>
                <MusicTable/>
                <SongForm/>
            </div>
        )
    }
}

export default App;