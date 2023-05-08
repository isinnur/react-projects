import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { Info } from './components/Info';

function App() {
  const [info, setInfo] = useState([]);
  const [state, setState] = useState(false);
  return (
    <div className="App">
      <Form setInfo={setInfo} setState={setState} />
      <Info info={info} state={state} />
    </div>
  );
}

export default App;
