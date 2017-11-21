import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  height: ${props => props.height || '50px'};Wrapper
`

const Div = styled.div `
  border-top: 4px solid grey;
  border-bottom: 4px solid grey;
  border-left: 4px solid grey;
  width: ${props =>
    'calc(100% - ' + props.width + 'px)' || 'calc(100% - 60px)'
  };
  height: ${props => props.height + 'px'};
  float: left;
`

const Input = styled.input `
  border: none;
  outline: none;
  font-size: 20px;
  padding-left: 10px;
  width: 100%;
  height: 100%;
`

const Button = styled.button `
  border: none;
  outline: none;
  background: grey;
  padding: 0px;
  float: right;
  color: white;
  width: ${props => props.width + 'px'};
  height: ${props => props.height + 'px'};
  transition: background 0.5s;
  cursor: pointer;
  &:hover {
    background: lightgrey;
  }

  text-transform: uppercase;
  font-weight: 600;
`

const WIDTH = 120, HEIGHT = 50;

const SearchBar = (props) => {
  return (
    <Wrapper className="SearchBar">
      <Div width={WIDTH} height={HEIGHT}>
        <Input
          // id="search-field"
          type="text"
          value={props.inputValue}
          placeholder="Find your name here..."
          onChange={props.handleInputChange}
          onKeyDown={props.handleInputKeyPress}
        />
      </Div>
      <Button
        id="clear-button"
        onClick={props.handleClear}
        width={WIDTH}
        height={HEIGHT}
      >
        Clear (ESC)
      </Button>
    </Wrapper>
  );
}

export default SearchBar;
