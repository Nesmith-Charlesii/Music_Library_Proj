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
            <div className="music-library">
                <h2>Song Library</h2>
                {this.state.data.map((song) => { 
                return (
                    <div className='songs'>
                        <p>{song.title}</p>
                        <p>{song.artist}</p>
                    </div>
                )}
            )}
            </div>
        )
    }
}

export default MusicApi;