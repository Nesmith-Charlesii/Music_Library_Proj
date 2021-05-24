import React from 'react';

const SearchBar = (props) => {
    return(
        <div className="search-bar">
            <form>
                <div className="form-group col-5">
                <label htmlFor="title">By Title</label>
                    <input className="form-control" type="text" name="title" id="title"/>

                    <label htmlFor="artist">By Artist</label>
                    <input className="form-control" type="text" name="artist" id="artist"/>

                    <label htmlFor="album">By Album</label>
                    <input className="form-control" type="text" name="album" id="album"/>

                    <label htmlFor="release date">By Release Date</label>
                    <input className="form-control" type="text" name="release_date" id="release_date"/>

                    <label htmlFor="genre">By Genre</label>
                    <input className="form-control" type="text" name="genre" id="genre"/>
                    <br/>
                    <button className="btn btn-sm btn-secondary">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;