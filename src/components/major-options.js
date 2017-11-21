import React from 'react';

const MajorOptions = (props) => {
  return (
    <div className="MajorOptions">
      <input
        type="radio"
        name="major"
        value="content"
        checked={ "content" === props.major }
        onChange={props.handleMajorChange}
      />
      <input
        type="radio"
        name="major"
        value="design"
        checked={ "design" === props.major }
        onChange={props.handleMajorChange}
      />
      <input
        type="radio"
        name="major"
        value="marketing"
        checked={ "marketing" === props.major }
        onChange={props.handleMajorChange}
      />
      <input
        type="radio"
        name="major"
        value="programming"
        checked={ "programming" === props.major }
        onChange={props.handleMajorChange}
      />
    </div>
  );
}

export default MajorOptions;
