import React, { useState, useEffect } from 'react'
import { Route, Routes, Link, NanLink } from 'react-router-dom';
import weapons from './Weapons';
import './index.css';

function App() {


  const [agents, setAgents] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents')
      .then(response => response.json())
      .then(data => {
        console.log(data.data); // agent verilerini konsola yazdırıyoruz
        setAgents(data.data);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div className="App">


      <div className='weapons' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <h4>{isHovering ? 'Update Soon' : 'Weapons'}</h4>
      </div>


      {
        agents.map(agent => (
          <div className='container' key={agent.uuid}>
            <button className='touch'> <hr /></button>
            <h4 className='agents-name'>{agent.displayName}</h4>

            <img className='image' src={agent.fullPortrait} alt={agent.displayName}></img>
            <div className='infos'>
              <span className='bio'>  Biography: <br /> <p> {agent.description}</p></span>
              <span className='abilities'>Special Abilities: <br /><p> {agent.abilities.map(ability => ability.displayName).join(', ')}</p></span>
            </div>
          </div>
        ))
      }


      <footer className='footer'>© 2023 - Işınnur Günay</footer>
    </div >


  );
}

export default App;
