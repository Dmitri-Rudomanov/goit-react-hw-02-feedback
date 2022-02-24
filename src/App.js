import React, { Component } from 'react';
// import shortid from 'shortid';
// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter';
// import Container from './components/Container';
// import TodoList from './components/TodoList';
// import TodoEditor from './components/TodoEditor';
// import Filter from './components/Filter';
// import Form from './components/Form';
// import initialTodos from './todos.json';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleGoodChange = () => { 
    this.setState({
      good:this.state.good+1
    })
  }
  handleNeutralChange = () => { 
    this.setState({
      neutral:this.state.neutral+1
    })
  }
  handleBadChange = () => { 
    this.setState({
      bad:this.state.bad+1
    })
  }

  countTotalFeedback = () => { 
    const { good, neutral, bad } = this.state
    const totalCount = good + neutral + bad
    return totalCount
  }

  countPositiveFeedbackPercentage = () => { 
    return Math.round((this.state.good/this.countTotalFeedback())*100)
  }


  render() {


    return (
      <div>
        <h1>Please leave feedback</h1>

        <div>
          <button type='button' onClick={this.handleGoodChange}>Good</button>
          <button type='button' onClick={this.handleNeutralChange}>Neutral</button>
          <button type='button' onClick={this.handleBadChange}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {isNaN(this.countPositiveFeedbackPercentage())?"0":this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </div>
    )

  }
}

export default App;

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
