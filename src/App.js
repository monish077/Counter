import './App.css';
import Counter from './counter';
import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
   <div className={ darkMode ? "container dark-mode" : "container"}>

    <h1> Click Counter App</h1>
    <Counter /> 

    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>


    
   </div>
  );
}

export default App;