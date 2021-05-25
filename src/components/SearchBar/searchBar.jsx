import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
        if(event.target.value === '') {
            this.props.getAllMusicApi()
        }
        this.props.filter(this.state.search)
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={(event) => this.handleSubmit(event)} >
                <div className="form-group">
                    <input className="form-control" type="text" name="search" id="search" onChange={(event) => this.handleChange(event)} value={this.state.search} placeholder="Artists, songs, albums, release dates, genres" />
                    <br/>
                    {/*<button className="btn btn-sm btn-secondary">Search</button>*/}
                </div>
            </form>
        )
    }
}

export default SearchBar;