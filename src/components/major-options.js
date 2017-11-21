import React from 'react';
import styled from 'styled-components';

const Option = styled.div `
  height: ${props => props.height || "50px"};
  padding: 0;
  text-align: center;
  line-height: ${props => props.height || "50px"};
  background: ${props => props.checked ? "lightgrey" : "grey"};
  color: white;
  transition: background 0.5s;
  &:hover {
    background: lightgrey;
  }
`

const HEIGHT = "50px";

const MajorOptions = (props) => {
  return (
    <div className="MajorOptions">
      <div className="row">
        <Option
          className="option col-lg-3 col-sm-6"
          height={ HEIGHT }
          checked={ "content" === props.major }
          onClick={ () => {props.handleMajorChange("content")} }
        >
          Content
        </Option>
        <Option
          className="option col-lg-3 col-sm-6"
          height={ HEIGHT }
          checked={ "design" === props.major }
          onClick={ () => {props.handleMajorChange("design")} }
        >
          Design
        </Option>
        <Option
          className="option col-lg-3 col-sm-6"
          height={ HEIGHT }
          checked={ "marketing" === props.major }
          onClick={ () => {props.handleMajorChange("marketing")} }
        >
          Marketing
        </Option>
        <Option
          className="option col-lg-3 col-sm-6"
          height={ HEIGHT }
          checked={ "programming" === props.major }
          onClick={ () => {props.handleMajorChange("programming")} }
        >
          Programming
        </Option>
      </div>
    </div>
  );
}

export default MajorOptions;
