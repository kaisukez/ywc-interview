import React from 'react';

const MajorOptions = (props) => {
    return (
      <div className="MajorOptions">
        <input
          type="radio"
          name="major"
          value="content"
          onChange={props.handleMajorChange}
        />
        <input
          type="radio"
          name="major"
          value="design"
          onChange={props.handleMajorChange}
        />
        <input
          type="radio"
          name="major"
          value="marketing"
          onChange={props.handleMajorChange}
        />
        <input
          type="radio"
          name="major"
          value="programming"
          onChange={props.handleMajorChange}
        />
      </div>
    );
}

export default MajorOptions;
