import React from 'react';

const SearchBar = (props) => {
    return (
      <div className="SearchBar">
        <input
          type="text"
          value={props.inputValue}
          onChange={props.handleInputChange}
          onKeyDown={props.handleInputKeyPress}
        />
      </div>
    );
}

export default SearchBar;
