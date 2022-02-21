import React from 'react';
import Calendar from './components/Calendar/Calendar'
import Navbar from './components/Navbar/Navbar';

function App() {

  const appStyles = {
    height: window.visualViewport.height, 
    width: window.visualViewport.width, 
    overscrollBehavior: 'none',
    overflow: 'hidden',
  }
  
  return (
    <div className="App" style={appStyles}>
        <Navbar month="February" year={2022}>
        </Navbar>
        <Calendar />
    </div>
  );
}

export default App;
