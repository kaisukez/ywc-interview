import React from 'react';

const SearchBar = (props) => {
    return (
      <div className="SearchBar">
        <input
          type="text"
          defaultValue={props.inputValue}
          onChange={props.handleInputChange}
        />
      </div>
    );
}

export default SearchBar;
