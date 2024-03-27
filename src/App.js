
import './App.css';
import React,{useState} from 'react'
import axios from 'axios'
import Navbar from './components/navbar/Navbar';
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';
import { originals,actions} from './components/url'
import './App.css'


function App() {
  return (
    <div className="App">

        
        <Navbar/>
        <Banner/>
        <Rowpost url = {originals} title ='Netflix Originals'/>
        <Rowpost url = {actions} title = 'Action' isSmall />
      
        
    </div>
  );
} 

export default App;
