import React from 'react';

const ItervieweeTable = (props) => {
    const renderRow = () =>
      props.intervieweeList
        .filter(people => people.major === props.major)
        .map((people, index) =>
            <tr key={index}>
              <td>{people.interviewRef}</td>
              <td>{people.firstName} {people.lastName}</td>
            </tr>
        )

    console.log(props.intervieweeList.filter(people => people.major === props.major))

    return (
      <div className="ItervieweeTable">
        <table>
          <thead>
            <tr>
              <th>ID</th>
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
