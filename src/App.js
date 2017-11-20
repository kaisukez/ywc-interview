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
    this.handleInputKeyPress = this.handleInputKeyPress.bind(this)
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
    this.setState({ inputValue: event.target.value })
  }

  handleInputKeyPress(event) {
    if(/* event.key === "Enter" || */ event.key === "Escape") {
      this.setState({ inputValue: "" })
    }
  }

  handleMajorChange(event) {
    this.setState({ major: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <h1>Test Header</h1>
        <SearchBar
          inputValue={this.state.inputValue}
          handleInputChange={this.handleInputChange}
          handleInputKeyPress={this.handleInputKeyPress}
        />
        <MajorOptions
          major={this.state.major}
          handleMajorChange={this.handleMajorChange}
        />
        <IntervieweeTable
          intervieweeList={this.state.intervieweeList}
          major={this.state.major}
          inputValue={this.state.inputValue}
        />
      </div>
    );
  }
}

export default App;
