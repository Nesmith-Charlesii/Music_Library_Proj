import React, {Component} from 'react';
import axios from 'axios';

class SongForm extends Component {
    constructor(props) {
        super(props);
        //set all input fields to empty strings when component renders
        this.state = {
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: ''
        }
    }

    //handleChange method sets state to the input value of data entered
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.postSong();
    }
    
    postSong = async () => {
        try {
            const Song = {
                title: this.state.title,
                artist: this.state.artist,
                album: this.state.album,
                release_date: this.state.release_date,
                genre: this.state.genre
            }
            //pass JSON object as second arg in POST method **No brackets around object to be passed (Song)
            let {data} = await axios.post(`http://127.0.0.1:8000/music/`, Song)
            console.log(data)
            alert('new song added')
        }
        catch(ex) {
            alert(`Whoops! ${ex}. Looks like we're having some technical difficulties. Try again later`)
        }
    }

    render() {
        return (
            <div className = "song-form">
                <form onSubmit = {(event) => this.handleSubmit(event)}>
                    <div className="form-group">
                        <label htmlFor="title">Title: </label>
                        <input className="form-control" type="text" name="title" id="title" onChange={(event) => this.handleChange(event)} value={this.state.title} /> 

                        <label htmlFor="artist">Artist: </label>
                        <input className="form-control" type="text" name="artist" id="artist" onChange={(event) => this.handleChange(event)} value={this.state.artist}/> 

                        <label htmlFor="album">Album: </label>
                        <input className="form-control" type="text" name="album" id="album" onChange={(event) => this.handleChange(event)} value={this.state.album}/> 

                        <label htmlFor="release_date">Release Date: </label>
                        <input className="form-control" type="text" name="release_date" id="release_date" onChange={(event) => this.handleChange(event)} value={this.state.release_date}/> 

                        <label htmlFor="genre">Genre: </label>
                        <input className="form-control" type="text" name="genre" id="genre" onChange={(event) => this.handleChange(event)} value={this.state.genre}/> 
                        
                        <br/>
                        <button className="btn btn-sm btn-success">Add Song</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SongForm;
