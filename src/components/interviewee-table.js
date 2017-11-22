import React from 'react';
import styled from 'styled-components';

const Margin = styled.div `
  margin-top: ${props => props.margin}
`

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

  const renderRow = (rowData) => {
    return rowData.map((person, index) =>
        <tr key={index}>
          <td className="semi-bold">{person.interviewRef}</td>
          <td className="lang-th">{person.firstName + " " + person.lastName}</td>
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

  const renderCongrat = () => {
    if(rowData.length === 1) {
      return (
        <div>
          <Margin margin="20px" />
          <p className="name-not-found white lang-th">ยินดีด้วย!</p>
          <p className="name-not-found white lang-th">คุณผ่านเข้ารอบสัมภาษณ์</p>
        </div>
      )
    }
  }

  // console.log(props.intervieweeList.filter(people => people.major === props.major))

  const rowData = getRow();

  if(rowData.length === 0) {
    return (
      <div>
        <p className="name-not-found white lang-th">ขออภัย ไม่เจอชื่อที่คุณค้นหา</p>
        <p className="name-not-found white lang-th">ลองกรอกใหม่อีกครั้ง</p>
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
          {renderRow(rowData)}
        </tbody>
      </table>
      {renderCongrat()}
    </div>
  );
}

export default ItervieweeTable;
