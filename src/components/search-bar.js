import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  height: ${props => props.height || '50px'};
  box-shadow: 0px 0 60px 7px rgba(42, 73, 92, 0.8);
`

const Div = styled.div `
  border-top: 4px solid rgb(42, 73, 92);
  border-bottom: 4px solid rgb(42, 73, 92);
  border-left: 4px solid rgb(42, 73, 92);
  width: ${props =>
    'calc(100% - ' + props.width + 'px)' || 'calc(100% - 60px)'
  };
  height: ${props => props.height + 'px'};
  float: left;
`

const Input = styled.input `
  border: none;
  outline: none;
  font-size: 18px;
  padding-left: 10px;
  width: 100%;
  height: 100%;
`

const Button = styled.button `
  border: none;
  outline: none;
  background: rgb(42, 73, 92);
  padding: 0px;
  float: right;
  color: white;
  width: ${props => props.width + 'px'};
  height: ${props => props.height + 'px'};
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    background: rgb(135, 195, 232);
    box-shadow: 0px 0 150px 3px rgba(135, 195, 232, 0.1);
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
          className="lang-th"
          type="text"
          value={props.inputValue}
          placeholder="ค้นหาชื่อ"
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
