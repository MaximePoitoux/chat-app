import React from 'react';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">

      <Contact 
      picture="https://randomuser.me/api/portraits/women/4.jpg"
      pseudo="Lorraine Reynolds" connect online
      />

      <Contact 
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      pseudo="Tyler Bell" 
      />

      <Contact
      picture="https://randomuser.me/api/portraits/men/1.jpg"
      pseudo="Noah Wood" connect online
      /> 

    </div>
  );
}

export default App;
