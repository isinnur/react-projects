import React, { useEffect, useState } from 'react';
import EmojiData from './Emoji.json';
import logo from './logo.svg';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()))
    setData(newData);
  }, [search])


  return (
    <div className='container'>
      <div className='top-container' >
        <h1>Emoji Search</h1>
        <input type='text' name='search' value={search} onChange={(e) => setSearch(e.target.value)}></input>
      </div>
      {data.map(emoji => <div >
        <div className='board' onClick={() => { navigator.clipboard.writeText(emoji.symbol); alert("Emoji Copied") }} >
          {emoji.symbol} {emoji.title}
        </div>
      </div>)
      }

    </div >

  );
}

export default App;
