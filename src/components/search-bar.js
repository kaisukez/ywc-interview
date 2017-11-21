import React from 'react';
import styled from 'styled-components';

const Div = styled.div `
  border: 4px solid grey;
  ${'' /* width: 700px; */}
`

const Input = styled.input `
  border: none;
  outline: none;
  font-size: 20px;
  padding-left: 10px;
  width: ${props =>
    'calc(100% - ' + props.width + ')' || 'calc(100% - 60px)'
  };
  height: ${props => props.height || '50px'};
`

const Button = styled.button `
  border: none;
  outline: none;
  background: grey;
  padding: 0px;
  float: right;
  color: white;
  width: ${props => props.width || '60px'};
  height: ${props => props.height || '50px'};
`

const WIDTH = "120px", HEIGHT = "50px";

const SearchBar = (props) => {
  return (
    <Div className="SearchBar">
      <Input
        // id="search-field"
        type="text"
        value={props.inputValue}
        placeholder="Find your name here..."
        onChange={props.handleInputChange}
        onKeyDown={props.handleInputKeyPress}
        width={WIDTH}
        height={HEIGHT}
      />
      <Button
        id="clear-button"
        onClick={props.handleClear}
        width={WIDTH}
        height={HEIGHT}
      >
        Clear (ESC)
      </Button>
    </Div>
  );
}

export default SearchBar;
