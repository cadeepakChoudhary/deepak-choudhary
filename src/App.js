import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footerpanel from './Component/Footerpanel';
import Testimony from './Component/Testimony';
import Highlight from './Component/Highlight';
import Corevalue from './Component/Corevalue';
import Serviceoffered from './Component/Serviceoffered';
import About from './Component/About';
import Maincover from './Component/Maincover';
import Navbar from './Component/Navbar';
import Socialmedia from './Component/Socialmedia';

function App() {
  return (
    <div className="App">
      <Socialmedia></Socialmedia>
      <Navbar></Navbar>
      <Maincover></Maincover>
      <About></About>
      <Serviceoffered></Serviceoffered>
      <Corevalue></Corevalue>
      <Testimony></Testimony>
      <Highlight></Highlight>
      <Footerpanel></Footerpanel>
    </div>
  );
}

export default App;
