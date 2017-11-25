import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Margin = styled.div `
  margin-top: ${props => props.margin}
`

const ItervieweeTable = (props) => {
  let loadState = 0;

  const getRow = () => {
    const input = props.inputValue.split(' ').filter(word => word !== "");
    let rowData;
    if(input.length === 0) {
      rowData = props.intervieweeList.filter(person => person.major === props.major)
    } else {
      rowData = props.intervieweeList.filter(person => checkIfInclude(person, input))
      loadState = 1;
    }
    return rowData;
  }

  const renderRow = (rowData) => {
    return rowData.map((person, index) =>
        <tr key={index}>
          <td className="semi-bold">{person.interviewRef}</td>
          <td>
            <Link className="lang-th link" to={`/ywc-interview/${person.interviewRef.toLowerCase()}`}>{person.firstName + " " + person.lastName}</Link>
          </td>
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
          <p className="text-center white lang-th">ยินดีด้วย!</p>
          <p className="text-center white lang-th">คุณผ่านเข้ารอบสัมภาษณ์</p>
        </div>
      )
    }
  }

  // console.log(props.intervieweeList.filter(people => people.major === props.major))

  const rowData = getRow();

  if(rowData.length === 0 && loadState === 0) {
    return (
      <div>
        <p className="text-center white lang-th">กำลังโหลดข้อมูล</p>
      </div>
    )
  } else if(rowData.length === 0 && loadState === 1) {
    return (
      <div>
        <p className="text-center white lang-th">ขออภัย ไม่เจอชื่อที่คุณค้นหา</p>
        <p className="text-center white lang-th">ลองกรอกใหม่อีกครั้ง</p>
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
      {/* <div class="fb-share-button" data-href="https://kaisukez.github.io/ywc-interview/" data-layout="button" data-size="small" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkaisukez.github.io%2Fywc-interview%2Fpg22&amp;src=sdkpreparse">Share</a></div> */}
    </div>
  );
}

export default ItervieweeTable;
