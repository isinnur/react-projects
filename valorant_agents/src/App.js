import React, { useState, useEffect } from 'react'
import './index.css';
function App() {

  const [agents, setAgents] = useState([]);

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
      {agents.map(agent => (
        <div className='container' key={agent.uuid}>
          <button className='touch'> <hr /></button>
          <h4 className='agents-name'>{agent.displayName}</h4>
          <img className='image' src={agent.fullPortrait} alt={agent.displayName}></img>
          <div className='infos'>
            <span className='bio'>  Biography: <br /> <p> {agent.description}</p></span>
            <span className='abilities'>Special Abilities: <br /><p> {agent.abilities.map(ability => ability.displayName).join(', ')}</p></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
