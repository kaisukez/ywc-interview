import React from 'react';

const ItervieweeTable = (props) => {
  const getRow = () => {
    const input = props.inputValue.split(' ').filter(word => word !== "");
    let rowData;

    if(input.length === 0) {
      rowData = props.intervieweeList.filter(person => person.major === props.major)
    } else {
      rowData = props.intervieweeList.filter(person => checkIfInclude(person, input))
    }
    return rowData;
  }

  const renderRow = () => {
    return getRow().map((person, index) =>
        <tr key={index}>
          <td className="semi-bold">{person.interviewRef}</td>
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

  if(getRow().length === 0) {
    return (
      <div>
        <p className="name-not-found">Sorry, can't find your name.</p>
        <p className="name-not-found">Please type your name again.</p>
      </div>
    )
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="semi-bold th-left">Ref</th>
            <th className="semi-bold th-right">Name</th>
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
