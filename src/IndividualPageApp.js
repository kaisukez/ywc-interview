import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import axios from 'axios';

import { intervieweeList } from './App'

import imageFile from './doge.jpg';

const Margin = styled.div `
  margin-top: ${props => props.margin}
`

class IndividualPageApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refno: this.props.match.params.refno.toUpperCase(),
      name: undefined,
      major: undefined,
      loadState: "init"
    }
  }

  componentDidMount() {
    // axios.get('https://ywc15.ywc.in.th/api/interview')
    //   .then(response => {
    //     const user = response.data.filter(person => person.interviewRef === this.state.refno)
    //     if(user.length === 1) {
    //       this.setState({
    //         name: user[0].firstName + ' ' + user[0].lastName,
    //         major: user[0].major,
    //         loadState: "success"
    //       })
    //     } else {
    //       this.setState({
    //         loadState: "fail"
    //       })
    //     }
    //   })
    const person = intervieweeList.filter(person => person.interviewRef === this.state.refno)
    this.setState({
      name: person[0].firstName + ' ' + person[0].lastName,
      major: person[0].major,
      loadState: "success"
    })
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    if(this.state.loadState === "init") {
      return (
        <div className="IndividualPageApp">
          <Margin margin="20px" />
          <p className="text-center white lang-th">กำลังโหลดข้อมูล</p>
        </div>
      )
    } else if(this.state.loadState === "fail") {
      return (
        <div className="IndividualPageApp">
          <Margin margin="20px" />
          <p className="text-center white lang-th">ขออภัย ไม่เจอหน้าที่คุณค้นหา</p>
        </div>
      )
    }

    return (
      <div className="IndividualPageApp">
        <Margin margin="20px" />
        <p className="big-font text-center white lang-th">ยินดีด้วย!</p>
        <p className="big-font text-center white lang-th">{`คุณ ${this.state.name}`}</p>
        <p className="big-font text-center white lang-th">{`ผ่านเข้ารอบสัมภาษณ์ YWC15 สาขา ${this.capitalize(this.state.major)}`}</p>
        <Margin margin="40px" />
        <img src={imageFile} className="congrat-image" alt="doge" />

        <Margin margin="25px" />
        <div className="center">
          <div
            className="fb-share-button"
            data-href="https://kaisukez.github.io/ywc-interview/"
            data-layout="button"
            data-size="small"
            data-mobile-iframe="true"
          >
            <a
              className="fb-xfbml-parse-ignore ref-link lang-th"
              // target="_blank"
              href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkaisukez.github.io%2Fywc-interview%2Fref%2F${this.state.refno}&amp;src=sdkpreparse`}
              >
                แชร์ลง Facebook
              </a>
          </div>
          <Margin margin="10px" />
          <Link to="/ywc-interview" className="ref-link lang-th">กลับหน้าหลัก</Link>
        </div>
      </div>
    );
  }
}

export default IndividualPageApp;
