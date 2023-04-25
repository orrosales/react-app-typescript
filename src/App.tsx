import {useEffect, useState} from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form'
import {Sub} from './types'

const INITIAL_SUB = [    
{
  nick:'dapelu',
  subMonts: 33,
  avatar:'https://i.pravatar.cc/150?u=dapelu',
  description:'Asistente'
},
{
  nick:'fran',
  subMonts: 32,
  avatar:'https://i.pravatar.cc/150?u=fran',
}]
 

function App() {
  const [subs, setSubs] = useState<Array<Sub>>([])

  const toggleClass = () => {
    document.documentElement.classList.toggle('dark-mode');
  }

  useEffect(()=> {

    setSubs(INITIAL_SUB)
  }, [])

  return (
    <div className="App">
      <header>
        <input
          type="checkbox"
          id="dark-mode"
          onClick={toggleClass}
        />
        <h4>Dark mode</h4>
      </header>
      <main>
        <h1>Card List</h1>
        <List subs= {subs} />
        <Form onNewSub={setSubs}/>
      </main>
    </div>
  );
}

export default App;
