import React, {Component} from 'react';
import axios from 'axios';

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    postSong = async () => {
        let {data} = await axios.post('http://127.0.0.1:8000/music')
        console.log(data)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

    }

    render() {
        return (
            <div className = "song-form">
                <form>
                    <div className="form-group">
                        <label for="title">Title: </label>
                        <input className="form-control" type="text" name="title" id="title"/> 
                        <label for="artist">Artist: </label>
                        <input className="form-control" type="text" name="artist" id="artist"/> 
                        <label for="album">Album: </label>
                        <input className="form-control" type="text" name="album" id="album"/> 
                        <label for="release_date">Release Date:</label>
                        <input className="form-control" type="text" name="release_date" id="release_date"/> 
                        <label for="genre">Title:</label>
                        <input className="form-control" type="text" name="genre" id="genre"/> 
                        <br/>
                        <button className="btn btn-sm btn-success">Add Song</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SongForm;
