import React, { Component } from 'react';
import axios from 'axios';
// import _ from 'lodash';

import SearchBar from './components/search-bar'
import MajorOptions from './components/major-options'
import IntervieweeTable from './components/interviewee-table'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervieweeList: [],
      inputValue: "",
      major: "programming"
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleMajorChange = this.handleMajorChange.bind(this)
  }

  componentDidMount() {
    axios.get('https://ywc15.ywc.in.th/api/interview')
      .then(response => {
        const intervieweeList = response.data.sort((a,b) => {
          if(a.interviewRef < b.interviewRef)
            return -1;
          if(a.interviewRef > b.interviewRef)
            return 1;
          return 0;
        })
        console.log(intervieweeList)
        this.setState({
          intervieweeList
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value }, () => {console.log("inputValue: " + this.state.inputValue)})
  }

  handleMajorChange(event) {
    this.setState({ major: event.target.value }, () => {console.log("major: " + this.state.major)})
  }

  render() {
    return (
      <div className="App">
        <h1>Test Header</h1>
        <SearchBar
          inputValue={this.state.inputValue}
          handleInputChange={this.handleInputChange}
        />
        <MajorOptions
          handleMajorChange={this.handleMajorChange}
        />
        <IntervieweeTable
          intervieweeList={this.state.intervieweeList}
          major={this.state.major}
        />
      </div>
    );
  }
}

export default App;
