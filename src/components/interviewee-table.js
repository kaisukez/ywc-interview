import React from 'react';

const ItervieweeTable = (props) => {
  const renderRow = () => {
    const input = props.inputValue.split(' ').filter(word => word !== "");
    let rowData;

    if(input.length === 0) {
      rowData = props.intervieweeList.filter(person => person.major === props.major)
    } else {
      rowData = props.intervieweeList.filter(person => checkIfInclude(person, input))
    }

    return rowData.map((person, index) =>
        <tr key={index}>
          <td>{person.interviewRef}</td>
          <td>{person.firstName + " " + person.lastName}</td>
        </tr>
    )
  }

  const checkIfInclude = (person, input) => {
    return input.every(word =>
      person.firstName.includes(word) ||
      person.lastName.includes(word) ||
      person.major.includes(word.toLowerCase()) ||
      person.interviewRef.includes(word.toUpperCase())
    )
  }

  // console.log(props.intervieweeList.filter(people => people.major === props.major))

  return (
    <div className="ItervieweeTable">
      <table>
        <thead>
          <tr>
            <th>Ref</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {renderRow()}
        </tbody>
      </table>
    </div>
  );
}

export default ItervieweeTable;
