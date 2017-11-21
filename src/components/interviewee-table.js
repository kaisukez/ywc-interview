import React from 'react';
import styled from 'styled-components';

const Table = styled.table `
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

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
    <div>
      <Table>
        <thead>
          <tr>
            <th>Ref</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {renderRow()}
        </tbody>
      </Table>
    </div>
  );
}

export default ItervieweeTable;
