import React, { useState, useEffect } from 'react'
import { Route, Routes, Link, NanLink } from 'react-router-dom';
import weapons from './Weapons';
import Agents from './Agents';
import './index.css';

function App() {


  const [agents, setAgents] = useState([]);
  const [isHovering, setIsHovering] = useState(false);


  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents')
      .then(response => response.json())
      .then(data => {
        console.log(data.data); // agent verilerini konsola yazdırıyoruz
        const filteredAgents = data.data.filter(
          (agent, index, self) => index === self.findIndex((a) => a.displayName === agent.displayName && a.isPlayableCharacter)
        )
        setAgents(filteredAgents);
      })
      .catch(error => console.log(error));
  }, []);



  return (
    <div className="App">

      <div className='weapons' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <h4>{isHovering ? 'Update Soon' : 'Weapons'}</h4>
      </div>

      <Agents agents={agents} />
      <footer className='footer'>© 2023 - Işınnur Günay</footer>
    </div >


  );
}

export default App;
