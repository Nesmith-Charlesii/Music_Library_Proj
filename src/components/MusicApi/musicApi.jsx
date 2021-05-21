import React, {Component} from 'react';
import axios from 'axios';

class MusicApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    getMusicApi = async () => {
        try {
            let {data} = await axios.get('http://127.0.0.1:8000/')
            this.setState({data: data})
        }
        catch(ex) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    render() {
        return (
            <div className="music-library">
                <h2>Song Library</h2>
            </div>
        )
    }
}

export default MusicApi;