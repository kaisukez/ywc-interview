import React, { Component } from 'react';
// import axios from 'axios';
import styled from 'styled-components';

import SearchBar from './components/search-bar'
import MajorOptions from './components/major-options'
import IntervieweeTable from './components/interviewee-table'

import './App.css';

const Margin = styled.div `
  margin-top: ${props => props.margin}
`

export const intervieweeList = [{
  firstName: 'Naruto',
  lastName: 'Uzumaki',
  major: 'content',
  interviewRef: 'CT01'
}, {
  firstName: 'Sasuke',
  lastName: 'Uchiha',
  major: 'design',
  interviewRef: 'DS01'
}, {
  firstName: 'Sakura',
  lastName: 'Haruno',
  major: 'marketing',
  interviewRef: 'MK01'
}, {
  firstName: 'Kakashi',
  lastName: 'Hatake',
  major: 'programming',
  interviewRef: 'PG01'
}, {
  firstName: 'Boruto',
  lastName: 'Uzumaki',
  major: 'content',
  interviewRef: 'CT02'
}, {
  firstName: 'Sarada',
  lastName: 'Uchiha',
  major: 'design',
  interviewRef: 'DS02'
}, {
  firstName: 'Konohamaru',
  lastName: 'Sarutobi',
  major: 'marketing',
  interviewRef: 'MK02'
}, {
  firstName: 'Zabuza',
  lastName: 'Momochi',
  major: 'programming',
  interviewRef: 'PG02'
}]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervieweeList: [],
      inputValue: "",
      major: "content",
      majorTemp: "content"
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleMajorChange = this.handleMajorChange.bind(this)
    this.handleClear= this.handleClear.bind(this)
    this.handleInputKeyPress = this.handleInputKeyPress.bind(this)
  }

  componentDidMount() {
    // axios.get('https://ywc15.ywc.in.th/api/interview')
    //   .then(response => {
    //     const intervieweeList = response.data.sort((a,b) => {
    //       if(a.interviewRef < b.interviewRef)
    //         return -1;
    //       if(a.interviewRef > b.interviewRef)
    //         return 1;
    //       return 0;
    //     })
    //     // console.log(intervieweeList)
    //     this.setState({
    //       intervieweeList
    //     })
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    this.setState({ intervieweeList })
  }

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value,
      major: event.target.value === "" ? this.state.majorTemp : "none"
    })
  }

  handleInputKeyPress(event) {
    if(/* event.key === "Enter" || */ event.key === "Escape") {
      this.setState({
        inputValue: "",
        major: this.state.majorTemp
      })
    }
  }

  handleClear() {
    this.setState({
      inputValue: "",
      major: this.state.majorTemp
    })
  }

  handleMajorChange(major) {
    this.setState({
      major,
      majorTemp: major,
      inputValue: ""
    })
  }

  render() {
    return (
      <div className="App">
        <Margin margin="20px" />
        <h1 className="header white lang-th">ผู้ผ่านเข้ารอบสัมภาษณ์ YWC15</h1>
        <Margin margin="20px" />

        <SearchBar
          inputValue={this.state.inputValue}
          handleInputChange={this.handleInputChange}
          handleClear={this.handleClear}
          handleInputKeyPress={this.handleInputKeyPress}
        />
        <Margin margin="15px" />

        <MajorOptions
          major={this.state.major}
          handleMajorChange={this.handleMajorChange}
        />
        <Margin margin="20px" />

        <IntervieweeTable
          intervieweeList={this.state.intervieweeList}
          major={this.state.major}
          inputValue={this.state.inputValue}
        />
        <Margin margin="20px" />
      </div>
    );
  }
}

export default App;
