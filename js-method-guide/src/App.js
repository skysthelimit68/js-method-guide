import React from 'react';
import './App.css';
import MainDisplay from './Components/MainDisplay';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainDisplay />
    </div>
  );
}

export default App;
