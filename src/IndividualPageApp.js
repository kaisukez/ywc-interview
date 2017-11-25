import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import imageFile from './doge.jpg';

const Margin = styled.div `
  margin-top: ${props => props.margin}
`

class IndividualPageApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refno: this.props.match.params.refno,
      name: undefined,
      major: undefined
    }
  }

  componentDidMount() {
    axios.get('https://ywc15.ywc.in.th/api/interview')
      .then(response => {
        const user = response.data.filter(person => person.interviewRef === this.state.refno.toUpperCase())
        // console.log(response.data.filter(person => person.interviewRef === this.state.refno.toUpperCase()))
        if(user.length === 1) {
          this.setState({
            name: user[0].firstName + ' ' + user[0].lastName,
            major: user[0].major
          })
        }
      })
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    if(!this.state.name) {
      return (
        <div className="IndividualPageApp">
          <Margin margin="20px" />
          <p className="text-center white lang-th">url error</p>
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

        <div
          className="fb-share-button"
          data-href="https://kaisukez.github.io/ywc-interview/"
          data-layout="button"
          data-size="small"
          data-mobile-iframe="true"
        >
          <a
            className="fb-xfbml-parse-ignore"
            target="_blank"
            href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkaisukez.github.io%2Fywc-interview%2F${this.state.refno}&amp;src=sdkpreparse`}
            >
              Share
            </a>
        </div>
        <Link to="/ywc-interview">back to home</Link>
      </div>
    );
  }
}

export default IndividualPageApp;
