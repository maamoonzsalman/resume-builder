import React, { useState } from 'react';
import SideBarNav from './Components/SideBarNav';
import FormContainer from './Components/FormContainer';
import './style.css';

const App = () => {
  return (
    <div className='app'>
      <div className='side-container'>
        <SideBarNav/>
        <FormContainer/>
      </div>
    </div>
  );
};

export default App;

