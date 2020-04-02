import React from 'react';
import ContactList from './Components/ContactList';

function App() {
  return (
    <div className="App">

      {/* <Contact 
      picture="https://randomuser.me/api/portraits/women/4.jpg"
      pseudo="Lorraine Reynolds" 
      connect
      />

      <Contact 
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      pseudo="Tyler Bell" 
      />

      <Contact
      picture="https://randomuser.me/api/portraits/men/1.jpg"
      pseudo="Noah Wood" 
      connect
      />  */}

      <ContactList />

    </div>
  );
}

export default App;
