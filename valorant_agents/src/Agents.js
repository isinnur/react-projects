import React from 'react';

const agents = ({ agents }) => {
    return (
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
    )
}

export default agents