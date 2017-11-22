import React from 'react';
import styled from 'styled-components';

const Option = styled.div `
  height: ${props => props.height + 'px'};
`

const Padding = styled.div `
  padding: ${props => props.padding + 'px'};
`

const InnerOption = styled.div `
  text-align: center;
  line-height: ${props => (props.height - 2*props.padding) + 'px'};
  height: 100%;

  background: ${props => props.checked ? "rgb(135, 195, 232)" : "rgb(42, 73, 92)"};
  color: white;
  cursor: pointer;
  transition: background 0.5s;
  &:hover {
    background: rgb(135, 195, 232);
  }

  text-transform: uppercase;
  font-weight: 600;
`

const HEIGHT = 60, PADDING = 9;

const MajorOptions = (props) => {
  return (
    <div>
      <div className="row">
        <Option
          className="col-lg-3 col-sm-6"
          height={ HEIGHT }
        >
          <Padding padding={ PADDING }>
            <InnerOption
              height={ HEIGHT }
              padding={ PADDING }
              checked={ "content" === props.major }
              onClick={ () => {props.handleMajorChange("content")} }
            >
              Content
            </InnerOption>
          </Padding>
        </Option>


        <Option
          className="col-lg-3 col-sm-6"
          height={ HEIGHT }
        >
          <Padding padding={ PADDING }>
            <InnerOption
              height={ HEIGHT }
              padding={ PADDING }
              checked={ "design" === props.major }
              onClick={ () => {props.handleMajorChange("design")} }
            >
              Design
            </InnerOption>
          </Padding>
        </Option>


        <Option
          className="col-lg-3 col-sm-6"
          height={ HEIGHT }
        >
          <Padding padding={ PADDING }>
            <InnerOption
              height={ HEIGHT }
              padding={ PADDING }
              checked={ "marketing" === props.major }
              onClick={ () => {props.handleMajorChange("marketing")} }
            >
              Marketing
            </InnerOption>
          </Padding>
        </Option>


        <Option
          className="col-lg-3 col-sm-6"
          height={ HEIGHT }
        >
          <Padding padding={ PADDING }>
            <InnerOption
              height={ HEIGHT }
              padding={ PADDING }
              checked={ "programming" === props.major }
              onClick={ () => {props.handleMajorChange("programming")} }
            >
              Programming
            </InnerOption>
          </Padding>
        </Option>
      </div>
    </div>
  );
}

export default MajorOptions;
