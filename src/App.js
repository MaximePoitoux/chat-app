import React from 'react';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">

      <Contact 
      pseudo="Lorraine Reynolds"
      picture="https://randomuser.me/api/portraits/women/4.jpg"
      connect="true"
      />

      <Contact 
      />

      <Contact
      /> 

    </div>
  );
}

export default App;
