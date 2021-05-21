import React, {Component} from 'react';
import MusicApi from './MusicApi/musicApi';

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
                <MusicApi/>
            </div>
        )
    }
}

export default App;