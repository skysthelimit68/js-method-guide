import React from 'react';
import './App.css';
import MainDisplay from './Components/MainDisplay';
import Navigation from './Components/Navigation';


class App extends React.Component {
  state = {
    dataType : null,
    goal : null
  }

  setDataType = type => {
    this.setState({
      dataType : type
    })
  }

  setGoal = goal => {
    this.setState({
      goal : goal
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation 
          setDataType = {this.setDataType} 
          setGoal = {this.setGoal}
        />
        <MainDisplay  
          dataType = {this.state.dataType} 
          goal = {this.state.goal}
        />
      </div>
    )
  }
}

export default App;
