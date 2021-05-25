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
        //this.props.filter(this.state.search)
    }

    render() {
        return(
            <div className="search-bar">
                <form onSubmit={(event) => this.handleSubmit(event)} >
                    <div className="form-group col-3">
                        <label htmlFor="search">Search: </label>
                        <input className="form-control" type="text" name="search" id="search" onChange={(event) => this.handleChange(event)} value={this.state.search} />
                        <br/>
                        <button className="btn btn-sm btn-secondary">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;