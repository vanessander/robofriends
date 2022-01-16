import React from "react";


const SearchBox = ({ searchTerm, onSearch }) => {
    return (
        <div className="pa2">
            <input 
                type="search" 
                placeholder="search for robots" 
                className="pa2 ba b--green bg-lightest-blue"
                onChange={onSearch}
            />
        </div>
    )
}

export default SearchBox;