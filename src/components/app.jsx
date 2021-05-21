import React, {Component} from 'react';
import MusicApi from './MusicApi/musicApi';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div className="container-fluid">
                <h1>Music Library</h1>
                <MusicApi/>
            </div>
        )
    }
}

export default App;